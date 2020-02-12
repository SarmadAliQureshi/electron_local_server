host_23 = 'localhost'
database_23 = 'postgres'
port_23 = '5432'
username_23 = 'postgres'
password_23 = 'postgres'
# host_23 = '172.16.130.23'
# database_23 = 'TPLMaps'
# port_23 = '5432'
# username_23 = 'qgis.plugin'
# password_23 = 'assigncity'
unauthorized_error = {'Error': 'Invalid Token'}
# Makes line from the list of all the points of a particular video whose path is given in file_dir_name parameter -
# - and then calculates line length  (line,length)
track_query = """select st_asgeojson(ST_Transform(ST_MakeLine(geom),4326)),st_length(ST_Transform(ST_MakeLine(geom),3857)) from(
select geom from video_track_points_local where file_dir_name='{0}'
order by datetime) as geom """

# This query subracts maximun datetime from minimum datetime in order to get the total duration of video (datetime)
duration_query = """select (max(datetime)-min(datetime)) as duration from video_track_points_local where file_dir_name='{0}'"""

bearing = """select viewing_direction as bearing from video_track_points_local where file_dir_name='{0}' order by datetime"""

datetime =  """select extract(epoch from datetime)  as datetime from video_track_points_local where file_dir_name='{0}' order by datetime"""