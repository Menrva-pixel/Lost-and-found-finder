import CONFIG from './config';

const API_ENDPOINT = {
  ITEMS: `${CONFIG.BASE_URL}/items`,
  DETAIL: (id) => `${CONFIG.BASE_URL}/items/${id}`,
  UPLOAD: `${CONFIG.BASE_URL}/upload`,
};

export default API_ENDPOINT;
