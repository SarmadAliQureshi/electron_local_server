from waitress import serve
import falcon
from falcon_cors import CORS
import os
import psycopg2


cors = CORS(allow_all_origins=True, allow_all_headers=True, allow_credentials_all_origins=True, allow_all_methods=True)


class Test:
    _required_params = ['username','password']
    dir = os.path.dirname(__file__)

    def _handleQuery(self, provided_params):
        _required_params = self._required_params
        # Checking whether we are getting all the required parameters. Incomplete parameters will result in an error
        all_params_provided = all([False if param not in provided_params else True for param in _required_params])
        # If we are not getting all the parameters, we gracefully exit with an error statement
        if not all_params_provided:
            return {'Error': 'Missing Parameter. Make Sure all parameters are present. Valid parameters are '
                             '{0}'.format(', '.join(_required_params))}

        username = provided_params['username']
        password = provided_params['pasword']
        conn = None
        try:
            conn = psycopg2.connect(
                    "dbname='TPLMaps' user='" + username + "' host='172.16.130.23' password='" + password + "' port=" + str(
                        5432) + ")")
        except Exception as error:
                return {"Error": str(error) }

        if not conn:        
            output = {"Failed": "Wrong User Credentials!"}
        
        output = {"Success": "User Authenticated!"}
        return 

    def on_get(self, req, resp):
        params = req.params
        resp.media = self._handleQuery(params)

    def on_post(self, req, resp):
        params = req.media
        resp.media = self._handleQuery(params)


if __name__ == '__main__':

    api = falcon.API(middleware=[cors.middleware])
    api.add_route('/login', Test())

    serve(api, host='172.16.130.116', port=8090)

# http://172.16.130.116:8090/test?name=sarmad&age=15
