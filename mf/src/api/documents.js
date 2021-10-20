import ApiClient from './client';
import logger from '../utils/logger';

const Document = {
  namespace: 'document',
  basePath: '/api/preonboarding',

  async getAllDocuments() {
    return ApiClient._get(`${this.basePath}/documentList`).then((resp) => {
      let returnResponse = resp?.data;
      if (!returnResponse) {
        logger.warn('API|Candidate: no hires found ');
      }
      return returnResponse;
    });
  },
  async removeDocuments(docName) {
    return ApiClient._get(
      `${this.basePath}/removeDocument?documentName=` + docName
    ).then((resp) => {
      let returnResponse = resp?.data;
      if (!returnResponse) {
        logger.warn('API|Document: no hires found ');
      }
      return returnResponse;
    });
  },
  async addDocument(payload) {
    return ApiClient._post(`${this.basePath}/addDocument`, {
      data: payload,
    }).then((resp) => {
      let returnResponse = resp?.data;
      if (!returnResponse) {
        logger.warn('API|Document: not created ');
      }
      return returnResponse;
    });
  },
  async sendInvite(payload) {
    return ApiClient._post(`${this.basePath}/sendInvite`, {
      data: payload,
    }).then((resp) => {
      let returnResponse = resp?.data;
      if (!returnResponse) {
        logger.warn('API|Document: not created ');
      }
      return returnResponse;
    });
  },
  async getDocsById(id) {
    return ApiClient._get(
      `${this.basePath}/getAllCandidateDocs?candidateId=${id}`
    ).then((resp) => {
      let returnResponse = resp?.data;
      if (!returnResponse) {
        logger.warn('API|Document: no hires found ');
      }
      return returnResponse;
    });
  },
  async candidateWelcome() {
    return ApiClient._get(`${this.basePath}/welcome`).then((resp) => {
      let returnResponse = resp?.data;
      if (!returnResponse) {
        logger.warn('API|Document: no hires found ');
      }
      return returnResponse;
    });
  },
};

export default Document;
