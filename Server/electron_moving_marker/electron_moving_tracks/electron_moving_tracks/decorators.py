import requests
import configuration as conf

# Check if all the parameters are provided


def check_all_params_provided(func):
    def inner(*args, **kwargs):
        parent = args[0]
        required_params = parent._required_params
        provided_params = list(args[1].keys())
        all_params_provided = all([False if param not in provided_params else True for param in required_params])
        # If we are not getting all the parameters, we gracefully exit with an error statement
        if not all_params_provided:
            absent_params = '{0}'.format(', '.join(required_params))
            return {'Error': f"""Missing Parameter. Make Sure all parameters are present. Valid Parameters are
            {absent_params}""".replace('\n', '').replace('  ', ' ')}
        return func(*args, **kwargs)
    return inner

# A decorator intended to check validity of a token before executing an APIs. Otherwise send an
# unauthorized error


def check_token_valid(func):
    def inner(*args, **kwargs):
        params = args[1]
        if 'token' in params.keys():
            success = False
            try:
                resp = requests.post('http://172.16.44.80:8008/authentication/checktoken', json={'token': params['token']}).json()
                success = resp['Success']
                if not success:
                    raise Exception('')
            except:
                pass
            if success:
                return func(*args, **kwargs)
        return conf.unauthorized_error
    return inner

