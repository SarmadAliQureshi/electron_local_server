from Main_variable import Variable
import tempfile
import requests
from bs4 import BeautifulSoup

# image_url = "http://172.16.130.52:8009/electron_vidoes/"

def get_link():
    file=open('server.txt','r')
    server=file.read()
    return str(server)
def get():
    print(get_link())
    r = requests.get(get_link()+'electron_videos/').text
    return r

def Srt_List():
    list = []
    Final_list=[]
    res=get()
    out = BeautifulSoup(res, "html.parser")
    count=0
    for item in out.select('a'):
        links = item['href']
        if count is 0:
            count=1
        else:
            Final_list.append(links)
            if(links.endswith('.srt')):
             list.append(str(links))
    return list,Final_list


def download_files():
    dirpath = tempfile.mkdtemp()
    Variable.Srt_Path=dirpath
    list,Final_List=Srt_List()
    for i in list:
        res = requests.get(get_link()+'electron_videos/'+i)
        with open(dirpath+'\\'+i, 'wb') as f:
            f.write(res.content)
            f.close()
    return Final_List
def Main():
    result=download_files()
    return result

def Srt_List_final():
    list = []
    # image_url = "http://172.16.130.52:8009/electron_vidoes/"
    image_url=get_link()+'electron_videos/'
    res = requests.get(image_url).text
    out = BeautifulSoup(res, "html.parser")
    count=0
    for item in out.select('a'):
        links = item['href']
        if count is 0:
            count=1
        else:
            if (links.endswith('.mp4')):
                list.append(str(Variable.Srt_Path.replace('\\','/')+'/'+links))
    f=open('list.txt','w')
    f.write(str(list))
    f.close()


#
# if __name__ == "__main__":
Main()
