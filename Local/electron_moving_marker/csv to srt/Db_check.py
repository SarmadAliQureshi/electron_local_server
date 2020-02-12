import configurations as conf
from dbConfiguration import DbConfig
import json
import sys
class Auxilary:
    def __init__(self, configs_dict):
        self.configs_dict = json.loads(configs_dict)
        self.db = DbConfig(self.configs_dict['ip'],
                           self.configs_dict['dbname'],
                           self.configs_dict['port'],
                           self.configs_dict['username'],
                           self.configs_dict['password'])
        flag=self.db.ConnectDb()
        print(flag)
        f = open("auth.txt", "w")
        f.write(str(flag))
        f.close()
if __name__ == '__main__':
    obj=Auxilary(sys.argv[1])