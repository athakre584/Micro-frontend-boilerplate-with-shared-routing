import axios from 'axios';
import {baseEnvironmentConfig} from './constants';
import {getToken} from 'Helpers/localStorage';

const ApiClient = {
  _axiosAdapter: axios.create({
    baseURL: baseEnvironmentConfig.api_host,
    headers: {
      Authorization: `${getToken()}`,
    },
  }),

  _get(endpoint, config = {}) {
    return this._axiosAdapter({url: endpoint, ...config})
      .then((resp) => {
        console.warn(`[ApiClient.get]: ${endpoint} response => ${resp}`);
        return resp;
      })
      .catch((err) => err.response.data);
  },

  _post(endpoint, config = {}) {
    return this._axiosAdapter({
      method: 'POST',
      url: endpoint,
      ...config,
    })
      .then((resp) => {
        console.warn(`[ApiClient.post]: ${endpoint} response => ${resp}`);
        return resp;
      })
      .catch((err) => err.response.data);
  },

  _put(endpoint, config = {}) {
    return this._axiosAdapter({method: 'PUT', url: endpoint, ...config})
      .then((resp) => {
        console.warn(`[ApiClient.put]: ${endpoint} response => ${resp}`);
        return resp;
      })
      .catch((err) => err.response.data);
  },

  _delete(endpoint, config = {}) {
    return this._axiosAdapter({
      method: 'DELETE',
      url: endpoint,
      ...config,
    })
      .then((resp) => {
        console.warn(`[ApiClient.delete]: ${endpoint} response => ${resp}`);
        return resp;
      })
      .catch((err) => err.response.data);
  },
};

export default ApiClient;
