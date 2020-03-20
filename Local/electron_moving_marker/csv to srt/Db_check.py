import configurations as conf
from dbConfiguration import DbConfig
import json
import sys
class Auxilary:
    def __init__(self, configs_dict):
        f = open("auth.txt", "w")
        try:
            self.configs_dict = json.loads(configs_dict)
            self.db = DbConfig(self.configs_dict['ip'],
                               self.configs_dict['dbname'],
                               self.configs_dict['port'],
                               self.configs_dict['username'],
                               self.configs_dict['password'])
            flag=self.db.ConnectDb()
            f.write(str(flag))
            print(flag)
        except Exception as e:
            f.write(str(e))
        f.close()

if __name__ == '__main__':
    obj=Auxilary(sys.argv[1])