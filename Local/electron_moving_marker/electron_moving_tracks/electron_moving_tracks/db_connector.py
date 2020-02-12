import psycopg2

class DbConnect:
    def __init__(self, db_ip, db_name, db_port, db_username, db_password):
        self.db_ip = db_ip
        self.db_name = db_name
        self.db_port = db_port
        self.db_username = db_username
        self.db_password = db_password
        self.db_connection = None

    def ConnectDb(self):
        try:
            self.db_connection = psycopg2.connect(
                f"dbname='" + self.db_name + "' user='" + self.db_username + "' host='" + self.db_ip + "' password='" + self.db_password + "' port=" + str(
                    self.db_port) + ")")
            return True
        except psycopg2.OperationalError:
            return False

    def returnedFormattedQuery(self, query, vare = None):
        cursor = self.db_connection.cursor()
        result = cursor.mogrify(query, vare)
        cursor.close()
        return result

    def DbResultsQuery(self, query, vare=None):
        try:
            cursor = self.db_connection.cursor()
            cursor.execute(query, vare)
            res = cursor.fetchall()
            cursor.close()
            return res
        except Exception as e:
            print(e)
            self.refreshDbConenction()

    def DbModifyQuery(self,query, vare=None):
        try:
            cursor = self.db_connection.cursor()
            cursor.execute(query, vare)
            cursor.close()
            self.db_connection.commit()
        except:
            self.refreshDbConenction()
    def commitConnection(self):
        self.db_connection.commit()

    def releaseDbConnection(self):
        self.db_connection.close()

    def DbResultsQueryForFunction(self, query, vare=None):
        cursor = self.db_connection.cursor()
        cursor.execute(query, vare)
        res = cursor.fetchall()
        cursor.close()
        self.db_connection.commit()
        return res

    def refreshDbConenction(self):
        try:
            self.releaseDbConnection()
        except:
            pass
        self.ConnectDb()

ss = DbConnect('123', '123', '123', '123', '123')
ss.ConnectDb()