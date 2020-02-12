from waitress import serve
import falcon
from falcon_cors import CORS
import os
from db_connector import DbConnect
import configuration as conf
import decorators
import requests
from geojson import utils
from psycopg2.errorcodes import INTERNAL_ERROR
import json
import ast
import sys


cors = CORS(allow_all_origins=True, allow_all_headers=True, allow_credentials_all_origins=True, allow_all_methods=True)
directory = os.path.dirname(__file__)
configs_dict = json.loads(sys.argv[1])
main_database = DbConnect(configs_dict['ip'],
                   configs_dict['dbname'],
                   configs_dict['port'],
                   configs_dict['username'],
                   configs_dict['password'])
main_database.ConnectDb()

# establish connection with the postgres using the parameters which are declared in the configuration.py file
# main_database = DbConnect(conf.host_23, conf.database_23, conf.port_23, conf.username_23, conf.password_23)
# main_database.ConnectDb()


class Tracker:
    #this api required only one parameter which is the name of the video file
    _required_params = ['fname']

    def invert_coords(self, coordinates_dict: dict):
        # store value for the key type in geom_type
        print("coord dict" ,coordinates_dict)
        geom_type = coordinates_dict['type']
        func = lambda x: str(utils.switch_coords(x)['coordinates']).replace('(', '[').replace(')', ']')
        leaflet_coords = None
        if 'line' or 'point' in geom_type.lower():
            leaflet_coords = func(coordinates_dict)
        elif 'polygon' in geom_type.lower():
            leaflet_coords = func(coordinates_dict).rstrip(']').lstrip('[')
        # this is the inverted coordinates which are required by leaflet
        print("leaf let : ",leaflet_coords)
        return leaflet_coords

    def get_duration(self, limit: int, fname: str) -> tuple:
        try:
            # by using the variable on which database connection was stored, i.e. main_database database is queried-
            # -duration_query from the configuratio.py file run on the filename, i.e. fname
            # in db_response variable we get the duration time of the video
            db_response = main_database.DbResultsQuery(conf.duration_query.format(fname))
        except INTERNAL_ERROR:
            main_database.refreshDbConenction()
            db_response = main_database.DbResultsQuery(conf.duration_query.format(fname))
        # This is the print of db_response[0][0] -- 0:20:17 i.e. duration_min variable value
        duration_min = db_response[0][0]  #duration in minutes
        # Convert minutes into seconds
        duration_sec = int(duration_min.seconds)
        duration_list = [1000 for _ in range(limit)]
        return duration_list, duration_sec

    ## main api function
    @decorators.check_all_params_provided
    def _handleQuery(self, params) -> dict:
        # Do something here

        # parse file name with path in the variable fname
        fname = params['fname']

        try:
            # in db_response variable we get the results( linestring, length )from the track_query which is written in configuration file
            db_response = main_database.DbResultsQuery(conf.track_query.format(fname))
        except INTERNAL_ERROR:
            main_database.refreshDbConenction()
            db_response = main_database.DbResultsQuery(conf.track_query.format(fname))
        # db_response is in form of tuple (line,length) so we have to fetch line only and store it in variable track_geojson
        # print(db_response)
        track_geojson = json.loads(db_response[0][0])
        print("track_geo ",track_geojson)
        # print("track_geojson", track_geojson['coordinates'][0])
        for val in range(len(track_geojson['coordinates'][0])):
            pass
        # second column of the tuple (line,length) is stored in variable track_length
        track_length = int(db_response[0][1])
        # sending geojson-dictionary to function invert_coords and receiving back inverted coordinates in form of dictionary, i.e. (long 33 ,lat 72)-
        # - and then storing those coordinates in variable track_list
        track_list = ast.literal_eval(self.invert_coords(track_geojson))
        # print(track_list)
        start_point = [track_geojson['coordinates'][0][1], track_geojson['coordinates'][0][0]]
        # end_point = [track_geojson['coordinates'][-1][1], track_geojson['coordinates'][-1][0]]
        duration, duration_seconds = self.get_duration(limit=len(track_list)-1, fname=fname) ## duration= dur_list
        bearing = main_database.DbResultsQuery(conf.bearing.format(fname))
        datetime = main_database.DbResultsQuery(conf.datetime.format(fname))
        print("date , ",datetime)
        print("track ", track_list)
        li=[{"lat":v[0],"recorded_at_ms":datetime[i][0]*1000,"lng":v[1],"bearing":bearing[i][0]} for i,v in enumerate(track_list)]
        # print(li)
        output = [{"latLng": loc, "bearing": bearing[index][0]} for index, loc in enumerate(track_list)]
        # print("Bearing : ",bearing )
        return {'line':li ,
                'linestring': track_list,
                'duration':duration,
                'start':start_point
                }

    def on_get(self, req, resp) -> None:
        """Handles GET requests"""
        params = req.params
        output = self._handleQuery(params)
        if output == conf.unauthorized_error:
            resp.status = falcon.HTTP_401
        resp.media = output

    def on_post(self, req, resp) -> None:
        """Handles POST requests"""
        params = req.media
        output = self._handleQuery(params)
        if output == conf.unauthorized_error:
            resp.status = falcon.HTTP_401
        resp.media = output


if __name__ == '__main__':

    api = falcon.API(middleware=[cors.middleware])
    ## run Tracker class from the main
    api.add_route('/videotrack', Tracker())
    serve(api, host='localhost', port=8006)

# http://172.16.130.116:8006/videotrack?fname=http://172.16.130.52:8009/processed_videos/10000_VID_20190729_130815.mkv
