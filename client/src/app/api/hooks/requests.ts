import axios from 'axios';
const API_URL = 'http://localhost:8000/v1';

import QueryParamsType from '../../../helpers/param'

async function httpGetHospitals(queryParams: QueryParamsType) {
  try {
    const response = await axios.get(`${API_URL}/hospitals`, {
      params: queryParams
    });
    
    // Access the data directly from the response object
    return response.data;
  } catch (error) {
    console.error('Error fetching hospitals:', error);
    return []; // Return an empty array or handle the error as needed
  }
}

export {
  httpGetHospitals
};
