const BASE_URL = process.env.NODE_ENV === 'development'
  ? 'http://localhost:3333' : 'https://reservation-api.ibrahimozdogan.com';
const ENDPOINTS = {
  SAVE_RESERVATION: `${BASE_URL}/v1/save-reservation`,
};

export default ENDPOINTS;
