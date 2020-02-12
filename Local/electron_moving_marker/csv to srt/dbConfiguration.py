#this module is used for database connection and querying

import psycopg2
import random

class DbConfig:
    def __init__(self, db_ip, db_name, db_port, db_username, db_password):
        self.db_ip = db_ip
        self.db_name = db_name
        self.db_port = db_port
        self.db_username = db_username
        self.db_password = db_password
        self.comboUsed = []


    def ConnectDb(self):  # self,db_ip,db_name, db_port, db_username, db_password):
        try:
            self.conn = psycopg2.connect(
                "dbname='" + self.db_name + "' user='" + self.db_username + "' host='" + self.db_ip + "' password='" + self.db_password + "' port=" + str(
                    self.db_port) + ")")
            print("DB connection successful")
            return True
        except Exception as e:
            print(e)
            return False

    def returnedFormattedQuery(self, query, vare = None):
        cursor = self.conn.cursor()
        result = cursor.mogrify(query, vare)
        cursor.close()
        return result

    def DbResultsQuery(self, query, vare=None):
        cursor = self.conn.cursor()
        cursor.execute(query, vare)
        res = cursor.fetchall()
        cursor.close()
        self.conn.commit()
        return res

    def returnCursorQuery(self, query):
        while True:
            cur_name = str(random.randint(1,100)) + str(random.randint(1,100)) + str(random.randint(1,100))
            if cur_name not in self.comboUsed:
                self.comboUsed.append(cur_name)
                break
        cursor = self.conn.cursor(cur_name)
        cursor.execute(query)
        return cursor

    def DbModifyQuery(self,query, vare=None):
        cursor = self.conn.cursor()
        cursor.execute(query, vare)
        cursor.close()
        self.conn.commit()

    def commitConnection(self):
        self.conn.commit()

    def releaseDbConnection(self):
        self.conn.close()

    def DbResultsQueryForFunction(self, query):

        cursor = self.conn.cursor()
        cursor.execute(query)
        cursor.close()
        self.conn.commit()


    def refreshDbConenction(self):
        try:
            self.releaseDbConnection()
        except:
            pass
        self.ConnectDb()
