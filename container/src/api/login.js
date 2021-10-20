import {baseEnvironmentConfig} from './constants';
import promise from '../services/promise';
import {fetchApi} from '../services/api-service';
import {ApiRequest} from 'Constants';
import {hr_login} from '../services/graphql/login';

const Login = {
  basePath: '',
  async hrLoginApi(loginInput) {
    const {data, errors} = await promise(
      fetchApi(`${baseEnvironmentConfig.gql_host}`, ApiRequest.METHOD.POST, {
        query: hr_login,
        variables: {loginInput: loginInput},
      })
    );
    if (errors) {
      return errors;
    }
    return data;
  },
};

export default Login;
