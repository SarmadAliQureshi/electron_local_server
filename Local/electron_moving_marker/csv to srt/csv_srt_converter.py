import pysrt
from datetime import datetime as dt
import configurations as conf
from dbConfiguration import DbConfig
import os
from moviepy.video.io.VideoFileClip import VideoFileClip
from datetime import timedelta
import shutil
import gc
import threading
import subprocess
import datetime
# import text_extractor
import sys
from time import time
import json


# old_stdout = sys.stdout
# log_file = open("message.log","w")
# sys.stdout = log_file
# self.provided_dir = sys.argv[1].split(str(os.sep))[:-1].join(str(os.sep))
# self.provided_dir = sys.argv[0]
# print(self.provided_dir)

class Auxilary:
    def __init__(self, provided_dir, configs_dict):

        self.compressed_video_names = []
        self.provided_dir = provided_dir
        self.configs_dict = json.loads(configs_dict)
        self.db = DbConfig(self.configs_dict['ip'],
                           self.configs_dict['dbname'],
                           self.configs_dict['port'],
                           self.configs_dict['username'],
                           self.configs_dict['password'])
        # print([item for item in provided_dir])
        # print(type(configs_dict))
        # self.db = DbConfig(conf.ip,conf.name,conf.port, conf.user,conf.password)
        self.db.ConnectDb()

    @staticmethod
    def clean_split_string(string: str, split_chr: str):
        return [x.rstrip().lstrip() for x in string.split(split_chr)]

    def srt_to_geojson(self, folder, surveyor_id):
        """
        mate 10
        :return:
        """
        paths = [f.name for f in os.scandir(folder) if f.is_file()]
        srt_files = []
        # paths = list of names of all the files in foler directory
        for path in paths:
            if ".srt" in path:
                srt_files.append(f'{folder}/{path}')
        print('    ', len(srt_files), 'SRT Files found')
        for num, srt_file in enumerate(srt_files):
            print('        Processing File no', num + 1, ' Named', srt_file)
            self.rows = []
            records = pysrt.open(srt_file)
            first_time = True
            parser = None
            for record in records:
                record = record.text.replace('a.m.', 'AM').replace('p.m.', 'PM')
                if first_time:
                    if 'AM' in record or 'PM' in record:
                        parser = conf.AM_PM_datetime_format
                    else:
                        parser = conf.No_AM_PM_datetime_format
                    print('            AM / PM Method')
                    first_time = False
                try:
                    time, spatial_info = self.clean_split_string(record, '\n')
                    time = dt.strptime(time, parser)
                    spatial_info = self.clean_split_string(spatial_info, ',')
                    lat = spatial_info[0]
                    lon = spatial_info[1]
                    speed = 0
                    # Getting Heading from data else putting 0
                    heading = [x for x in spatial_info if '°' in x]
                    if heading:
                        heading = heading[0].replace('°', '')
                    else:
                        heading = 0
                    row = [lat, lon, heading, time, speed]
                    self.rows.append(row)
                except Exception as e:
                    print('Error While Processing Record', e)
            self.push_gjson(surveyor_id)

    # Corrects the name of the video if second video lies in between first video
    def video_files_corrector(self):
        # query_droptable = "Drop table video_track_points_local"

        print("############ In video_files_corrector ##########")
        print('--dropping table--')
        query = "SELECT tablename FROM pg_catalog.pg_tables;"
        database_tables = self.db.DbResultsQuery(query)
        database_tables_list = [i[0] for i in database_tables]
        if "video_track_points_local" in database_tables_list:
            self.db.DbModifyQuery(conf.query_droptable)
        # list all the directories i.e. Surveyor id folders
        # directories = [f.name for f in os.scandir(self.provided_dir) if f.is_dir()]
        # print(directories)

        # for directory in directories:

        # print("in dir ......", directory)
        # videos = list all the videos and str files
        print(self.provided_dir)
        videos = [f.name for f in os.scandir(f'{self.provided_dir}') if f.is_file()]
        video_files_paths = []
        videos_names = []
        # In this loop the above fetched video is joined with the folder path to get full video path
        for video in videos:
            if ".mp4" in video:
                # storing video names whithout extension(.mp4 and VID_) in variable (video_names)
                #  (video_files_paths) contains tha full path of the video
                videos_names.append(video.split("/")[-1].replace(".mp4", "").replace("VID_", ""))
                video_files_paths.append(f'{self.provided_dir}/{video}')

        for index, video_first in enumerate(videos_names):

            # video_files_paths[index] extract all the videos from the list index wise
            # video = is the object of video file using python moviepy library through this library new we can access various functions/opps for video
            print(videos_names)
            video = VideoFileClip(video_files_paths[index])
            duration = video.duration
            video_first_start_time = dt.strptime(video_first, '%Y%m%d_%H%M%S')
            video_first_end_time = video_first_start_time + timedelta(seconds=duration)
            for video_second in videos_names:
                if video_first != video_second:
                    video_second_start_time = dt.strptime(video_second, '%Y%m%d_%H%M%S')
                    # means if second video starts in between first video
                    if video_first_start_time <= video_second_start_time <= video_first_end_time:
                        new_name = dt.strftime(video_first_end_time + timedelta(seconds=1), "%Y%m%d_%H%M%S")
                        os.rename(f'{self.provided_dir}/VID_{video_second}.mp4',
                                  f'{self.provided_dir}/VID_{new_name}.mp4')
            video.reader.close()
    def vid_to_dict(self, video_name, video_file):
        print("video_file:  " + video_file)

        video = VideoFileClip(video_file)
        file=open('log.txt','a')
        file.writelines(str(e))
        # print(f"Error here {e}")
        duration = video.duration
        video_start_time = dt.strptime(video_name, '%Y%m%d_%H%M%S')
        video_end_time = video_start_time + timedelta(seconds=duration)
        self.dict.update({video_file: [video_start_time, video_end_time]})
        video.close()
        video = None
        gc.collect()

    def video_path_finder(self, time):
        dict_keys = list(self.dict.keys())
        for key in dict_keys:
            time_range = self.dict[key]
            if time_range[0] <= time <= time_range[1]:
                return key
            print("")

    def push_gjson(self, name_to_add):
        print("in push_gjson")
        paths = [f.name for f in os.scandir(f'{self.provided_dir}') if f.is_file()]
        video_files = []
        videos_names = []
        for path in paths:
            if ".mp4" in path:
                videos_names.append(path.split("/")[-1].replace(".mp4", "").replace("VID_", ""))
                video_files.append(f'{self.provided_dir}/{path}')
        self.dict = dict()
        for num, video_name in enumerate(videos_names):
            self.vid_to_dict(video_name, video_files[num])

        print('            Processing', len(self.rows), 'points')

        # Lists all the tables of the database in database_tables_list variable and creates video_track_points table if it doesnot exists
        query = "SELECT tablename FROM pg_catalog.pg_tables;"
        database_tables = self.db.DbResultsQuery(query)
        database_tables_list = [i[0] for i in database_tables]
        if "video_track_points_local" not in database_tables_list:
            query = '''CREATE TABLE if not exists video_track_points_local
                    (
                        geom geometry,
                        datetime timestamp without time zone,
                        viewing_direction double precision,
                        completion_status boolean,
                        file_dir_name text COLLATE pg_catalog."default",
                        surveyor_id text,
                        added_on timestamp without time zone
                    )'''
            self.db.DbModifyQuery(query)

        for row in self.rows:
            lat = row[0]
            long = row[1]
            heading = row[2]
            time = row[3]  if not isinstance(row[3], str) else dt.strptime(row[3], "%Y-%m-%d %H:%M:%S")
            try:
                # vid = self.video_path_finder(time)
                # vid_path = f'{conf.http_path}{name_to_add}_{self.video_path_finder(time).split("/")[-1]}'
                vid_path = f'{self.provided_dir}/{self.video_path_finder(time).split("/")[-1]}'

            except Exception as e:
                print(e)
                vid_path = None

            time = dt.strftime(time, "%Y-%m-%d %H:%M:%S")
            # if vid_path is not None:
            #     vid_path = vid_path.replace(".mp4", ".mkv")
            #     already_added = self.db.DbResultsQuery('SELECT count(*) '
            #                                            'FROM video_track_points '
            #                                            'WHERE datetime = %s '
            #                                            'AND surveyor_id = %s', (time, name_to_add))[0][0]
            #     if already_added:
            #         continue
            # self.db.DbModifyQuery("insert into video_track_points (geom,datetime,viewing_direction,"
            #                           "completion_status,file_dir_name,surveyor_id,added_on) "
            #                           "values (st_transform(ST_SetSRID(ST_MakePoint(%s, %s),4326),3857),%s,%s,%s,%s,%s,"
            #                           "now())", (long, lat, time, heading, False,vid_path, name_to_add))

            #

            table_names = self.db.DbModifyQuery("SELECT tablename FROM pg_catalog.pg_tables;")
            self.db.DbModifyQuery("insert into video_track_points_local (geom,datetime,viewing_direction,"
                                  "completion_status,file_dir_name,surveyor_id,added_on) "
                                  "values (st_transform(ST_SetSRID(ST_MakePoint(%s, %s),4326),3857),%s,%s,%s,%s,%s,"
                                  "now())", (long, lat, time, heading, False, vid_path, name_to_add))
        self.rows = None
        gc.collect()

    def SnapPoints(self):
        try:
            print("In Snap function!")
            self.db.releaseDbConnection()
            self.db.ConnectDb()
            self.db.DbModifyQuery('select fn_snap_video_points_1();')
        except Exception as e:
            print("SnapPoints exception : ", e)

    def executor(self):
        print("############ In executor ##########")
        # paths = [x[0] for x in os.walk(conf.self.provided_dir)]
        # paths = [f.path for f in os.scandir(conf.self.provided_dir) if f.is_dir()]

        name_to_add = self.provided_dir.split("""/""")[-1]
        print('Processing Surveyor', name_to_add)
        self.srt_to_geojson(self.provided_dir, name_to_add)
        # files = [f.name for f in os.scandir(path) if f.is_file()]
        # for file in files:
        #     if ".mp4" in file:
        #         shutil.move(f'{conf.self.provided_dir}/{name_to_add}/{file}',
        #                     f'{conf.processed_mp4_video_dir}/{name_to_add}/{file}')
        #     elif '.srt' in file:
        #         os.rename(f'{conf.self.provided_dir}/{name_to_add}/{file}',
        #                   f'{conf.processed_srt_dir}/{name_to_add}/{file}')

    def video_compressor(self):
        print("############ In video_compressor ##########")
        # list surveyor folder
        directories = [f.name for f in os.scandir(conf.self.provided_dir) if f.is_dir()]
        print(conf.self.provided_dir, directories)
        for directory in directories:
            print(directory)
            # list all files inside surveryr id folder
            videos = [f.name for f in os.scandir(f'{conf.self.provided_dir}/{directory}') if f.is_file()]
            video_files_paths = []
            videos_names = []
            for video in videos:
                if ".mp4" in video:
                    videos_names.append(video.split("/")[-1])
                    video_files_paths.append(f'{conf.self.provided_dir}/{directory}/{video}')

            for index, video_name in enumerate(videos_names):
                video_path = video_files_paths[index]

                if conf.processing == 'compression':
                    processed_video_path = (
                        f'{conf.processed_video_dir}/{video_name.replace(".mp4", ".mkv")}'
                    )
                else:
                    processed_video_path = (
                        f'{conf.processed_video_dir}/{directory}_{video_name.replace(".mp4", ".mkv")}'
                    )
                    self.compressed_video_names.append(f'{directory}_{video_name.replace(".mp4", ".mkv")}')
                print('Compressed', self.compressed_video_names)
                print("Processing " + video_name + " AT " + video_path + " TO " + processed_video_path)

                command = "ffmpeg -hide_banner -loglevel panic -i {video}  -c:v libx264 -an -crf 28 -preset veryfast " \
                          "-loglevel panic -stats {output}".format(video=video_path, output=processed_video_path)
                print(command)
                subprocess.call(command, shell=True)


if __name__ == '__main__':
    try:
        # print("This is salman ", sys.argv[1])
        aux = Auxilary(sys.argv[1], sys.argv[2])
        if conf.processing == 'all' or conf.processing == 'srt':
            aux.video_files_corrector()
        # if conf.processing == 'all' or conf.processing == 'compression':
        #     ss = threading.Thread(target=aux.video_compressor)
        #     ss.start()
        #     ss.join()
        if conf.processing == 'all' or conf.processing == 'srt':
            aux.executor()
    except Exception as e:
        print(e)
        aux = None
        aux = Auxilary(sys.argv[1], sys.argv[2])
        if conf.processing == 'all' or conf.processing == 'srt':
            aux.video_files_corrector()
        # if conf.processing == 'all' or conf.processing == 'compression':
        #     ss = threading.Thread(target=aux.video_compressor)
        #     ss.start()
        #     ss.join()
        if conf.processing == 'all' or conf.processing == 'srt':
            aux.executor()
    # if conf.processing == 'all' or conf.processing == 'srt':
    #     aux.SnapPoints()

    # for num, video in enumerate(aux.compressed_video_names):

    # for num, video in enumerate([
    #     "http://172.16.130.52:8009/processed_videos/10000_VID_20191008_110224.mkv",
    #     "http://172.16.130.52:8009/processed_videos/10000_VID_20191008_111150.mkv",
    #     "http://172.16.130.52:8009/processed_videos/10000_VID_20191008_114129.mkv",
    #     "http://172.16.130.52:8009/processed_videos/10000_VID_20191008_115654.mkv",
    #     "http://172.16.130.52:8009/processed_videos/10000_VID_20191009_110446.mkv",
    #     "http://172.16.130.52:8009/processed_videos/10000_VID_20191009_113151.mkv",
    #     "http://172.16.130.52:8009/processed_videos/10000_VID_20191009_120213.mkv"]):

    #     'http://172.16.130.52:8009/processed_videos/10007_VID_20190923_091839.mkv',

    #     'http://172.16.130.52:8009/processed_videos/10000_VID_20190826_140555.mkv',
    #     'http://172.16.130.52:8009/processed_videos/10000_VID_20190826_143151.mkv',
    #     'http://172.16.130.52:8009/processed_videos/10000_VID_20190826_144333.mkv',
    #     'http://172.16.130.52:8009/processed_videos/10000_VID_20190410_103056.mp4',
    #     'http://172.16.130.52:8009/processed_videos/10000_VID_20190410_113438.mp4',
    #     'http://172.16.130.52:8009/processed_videos/10000_VID_20190410_111130.mp4',
    #     'http://172.16.130.52:8009/80/processed_videos/Islamabad/10000_VID_20190305_105031.mkv']):

    # 'http://172.16.130.52:8009/processed_videos/10000_VID_20190916_111451.mkv',

    # "http://172.16.130.52:8009/processed_videos/10000_VID_20190916_104359.mkv",
    # "http://172.16.130.52:8009/processed_videos/10000_VID_20190916_110526.mkv",
    # "http://172.16.130.52:8009/processed_videos/10000_VID_20190916_110930.mkv",
    # "http://172.16.130.52:8009/processed_videos/10000_VID_20190916_111302.mkv",
    # "http://172.16.130.52:8009/processed_videos/10000_VID_20190916_111744.mkv",
    # "http://172.16.130.52:8009/processed_videos/10000_VID_20190916_112048.mkv",
    # ]):
    # "http://172.16.130.52:8009/processed_videos/10005_VID_20190911_103256.mkv",
    # "http://172.16.130.52:8009/processed_videos/10005_VID_20190911_171106.mkv",
    # "http://172.16.130.52:8009/processed_videos/10005_VID_20190911_173230.mkv",
    # "http://172.16.130.52:8009/processed_videos/10005_VID_20190911_173803.mkv",
    # "http://172.16.130.52:8009/processed_videos/10005_VID_20190912_064606.mkv",
    # "http://172.16.130.52:8009/processed_videos/10005_VID_20190912_071834.mkv",
    # "http://172.16.130.52:8009/processed_videos/10005_VID_20190912_071927.mkv",
    # "http://172.16.130.52:8009/processed_videos/10005_VID_20190913_065134.mkv",
    # "http://172.16.130.52:8009/processed_videos/10005_VID_20190913_070405.mkv",
    # "http://172.16.130.52:8009/processed_videos/10005_VID_20190913_071647.mkv"]):
    # st_time = time()
    # if num == 0: # First Start
    #     text_extraction_process = None
    #     gc.collect()
    #     text_extraction_process = text_extractor.OCR()
    #     text_extraction_process.create_connections()
    # video_url = text_extraction_process.main_db.DbResultsQuery(conf.fetch_video_name.replace('{0}', video))
    # if video_url:
    #     try:
    #         text_extraction_process = None
    #         gc.collect()
    #         text_extraction_process = text_extractor.OCR()
    #         text_extraction_process.create_connections()
    #         text_extraction_process.process_video(video_url[0][0])
    #     except Exception as e:
    #         # raise e
    #         print('Compression', video_url, ' : ', e)
    # else:
    #     print('Compression : Video Not Found In Database', video_url)
    # print(video, 'Took', time() - st_time, 'Seconds')

