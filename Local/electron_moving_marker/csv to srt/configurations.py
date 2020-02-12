import sys
pg_credentials = ("localhost", "postgres", "5432", "postgres", "postgres")
es_credentials = ("172.16.130.52", "9400", "elastic", "sshclient")
fetch_ids_query = "SELECT id FROM video_track_points WHERE file_dir_name = '{0}' ORDER BY id;"
fetch_video_name = "SELECT file_dir_name FROM video_track_points WHERE file_dir_name ilike '%{0}%' LIMIT 1"
update_record_query = "UPDATE video_track_points SET text_present = %s WHERE id = %s  AND text_present is null;"
check_record_processed = "SELECT count(*) FROM video_track_points WHERE id = %s  AND text_present is null;"

index_name = "video_track_text"
video_names = [
               ]

ip = "localhost"
# ip = "172.16.130.69"
port = "5432"
user = "postgres"
# user = "postgres"
name = "postgres"
# name = "postgres"
password = "postgres"
# password = "mysecretpassword"

# Specify what type of processing is needed ######
# Possible values include
# 'all' for both compression and srt processing
# 'compression' for compressing videos to mkv format
# 'srt' for processing of srt only

processing = "all"  # all, compression, srt



# Directory where raw data is present
# test.PathSplit("D:/sarmad/electron/local_project/rawdata/1000")
# raw_data_dir = test.PathSplit("D:/sarmad/electron/local_project/rawdata/1000")
# print('this is roman',sys.argv[1])
# raw_data_dir = test.PathSplit(sys.argv[1])
# print('this is sarmad ', raw_data_dir)
raw_data_dir = "D:/sarmad/electron/local_project/rawdata"
# raw_data_dir=sys.argv[1]
# raw_data_dir = "/home/video_tracker_data/raw_data"
# Directory where processed videos will be placed
processed_video_dir = "D:/sarmad/electron/local_project/processedvideos"
# processed_video_dir = "/home/video_tracker_data/processed_videos"
# Directory where processed srt will be placed
processed_srt_dir = "D:/sarmad/electron/local_project/processed_srt"
# processed_srt_dir = "/home/video_tracker_data/processed_srt"

# Directory where machine is hosted
http_path = "http://172.16.130.52:8009/processed_videos/"
# dir to store mp4
processed_mp4_video_dir = "D:\sarmad\electron\local_project\orignal_videos_processed"
# processed_mp4_video_dir = "/home/video_tracker_data/orignal_videos_processed"

AM_PM_datetime_format = '%b %d, %Y %I:%M:%S %p'
No_AM_PM_datetime_format = '%d %b %Y %H:%M:%S'


query_droptable = "Drop table video_track_points_local"