import ApiClient from './client';
import logger from '../utils/logger';

const Candidate = {
  namespace: 'candidate',
  basePath: '/api/preonboarding',

  async getHireTypes() {
    return ApiClient._get(`${this.basePath}/enumType/type_of_hire`).then((resp) => {
      let returnResponse = resp.data;
      if (!returnResponse) {
        logger.warn('API|Candidate: no hires found ');
        return resp;
      }
      return returnResponse;
    });
  },

  async getReportingManagers() {
    return ApiClient._get(`${this.basePath}/employee`).then((resp) => {
      let returnResponse = resp.data;
      if (!returnResponse) {
        logger.warn('API|Candidate: no managers found ');
        return resp;
      }
      return returnResponse;
    });
  },

  async getClients() {
    return ApiClient._get(`${this.basePath}/client`).then((resp) => {
      let returnResponse = resp.data;
      if (!returnResponse) {
        logger.warn('API|Candidate: no clients found ');
        return resp;
      }
      return returnResponse;
    });
  },

  async getPractices() {
    return ApiClient._get(`${this.basePath}/practice`).then((resp) => {
      let returnResponse = resp.data;
      if (!returnResponse) {
        logger.warn('API|Candidate: no practices found ');
        return resp;
      }
      return returnResponse;
    });
  },

  async getDepartments() {
    return ApiClient._get(`${this.basePath}/org_department`).then((resp) => {
      let returnResponse = resp.data;
      if (!returnResponse) {
        logger.warn('API|Candidate: no departments found ');
        return resp;
      }
      return returnResponse;
    });
  },

  async createCandidate(payload) {
    return ApiClient._post(`${this.basePath}/savecandidate`, {
      data: payload,
    }).then((resp) => {
      let returnResponse = resp?.data;
      if (!returnResponse) {
        logger.warn('API|Candidate: not created ');
        return resp;
      }
      return returnResponse;
    });
  },

  async getAllCandidates(type, recordsPerPage) {
    return ApiClient._get(
      `${this.basePath}/candidates?type=${type}&page=1&per_page=${recordsPerPage}`
    ).then((resp) => {
      let returnResponse = resp?.data;
      if (!returnResponse) {
        logger.warn('API|Candidate: no hires found ');
        return resp;
      }
      return returnResponse;
    });
  },
  async getCandidateById(id) {
    return ApiClient._get(`${this.basePath}/candidate/${id}`).then((resp) => {
      let returnResponse = resp?.data;
      if (!returnResponse) {
        logger.warn('API|Candidate: no hires found ');
        return resp;
      }
      return returnResponse;
    });
  },
  async updateCandidate(payload) {
    return ApiClient._put(`${this.basePath}/updateCandidate`, {
      data: payload,
    }).then((resp) => {
      let returnResponse = resp?.data;
      if (!returnResponse) {
        logger.warn('API|Candidate: no hires found ');
        return resp;
      }
      return returnResponse;
    });
  },
};

export default Candidate;
