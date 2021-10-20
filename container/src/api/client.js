import axios from 'axios';
import logger from '../utils/logger';
import {baseEnvironmentConfig} from './constants';

const ApiClient = {
  _axiosAdapter: axios.create({
    baseURL: baseEnvironmentConfig.gql_host,
  }),

  _get(endpoint, config = {}) {
    return this._axiosAdapter({url: endpoint, ...config})
      .then((resp) => {
        console.warn(`[ApiClient.get]: ${endpoint} response => ${resp}`);
        return resp;
      })
      .catch((err) => {
        logger.warn(`error found ${err}`);
      });
  },

  _post(endpoint, config = {}) {
    return this._axiosAdapter({
      method: 'POST',
      url: endpoint,
      ...config,
    }).then((resp) => {
      console.warn(`[ApiClient.post]: ${endpoint} response => ${resp}`);
      return resp;
    });
  },

  _put(endpoint, config = {}) {
    return this._axiosAdapter({method: 'PUT', url: endpoint, ...config}).then(
      (resp) => {
        console.warn(`[ApiClient.put]: ${endpoint} response => ${resp}`);
        return resp;
      }
    );
  },

  _delete(endpoint, config = {}) {
    return this._axiosAdapter({
      method: 'DELETE',
      url: endpoint,
      ...config,
    }).then((resp) => {
      console.warn(`[ApiClient.delete]: ${endpoint} response => ${resp}`);
      return resp;
    });
  },
};

export default ApiClient;
