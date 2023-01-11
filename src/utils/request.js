import axios from "axios";

export const _URL = "https://jsonplaceholder.typicode.com/";

export const getRequest = (url) => {
  const response = axios.get(`${_URL}` + url);
  return response;
};

export const postRequest = (url, data) => {
  const response = axios.post(`${_URL}` + url, data);
  return response;
};

export const patchRequest = (url, data) => {
  const response = axios.patch(`${_URL}` + url, data);
  return response;
};
