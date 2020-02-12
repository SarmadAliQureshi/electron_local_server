from Main_variable import Variable
import sys
class Auxilary:
    def __init__(self,link):
        self.link=link
    def FIle_creation(self,link):
        file=open('./server.txt','w')
        print(self.link)
        file.write(self.link)
        file.close()

if __name__ == '__main__':
    try:
        aux = Auxilary(sys.argv[1])
        # aux = Auxilary('192.168.100.1')
        aux.FIle_creation(sys.argv[1])
    except Exception as e:
        print(e)