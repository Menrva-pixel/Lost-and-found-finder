import CONFIG from './config';

const API_ENDPOINT = {
  LOST_ITEMS: `${CONFIG.BASE_URL}/lost-items`,
  FOUND_ITEMS: `${CONFIG.BASE_URL}/found-items`,
  DETAIL: (id) => `${CONFIG.BASE_URL}/lost-items/${id}`,
  UPLOAD: `${CONFIG.BASE_URL}/upload`,
};

export default API_ENDPOINT;
