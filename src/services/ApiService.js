import Axios from 'axios';

const axios = Axios.create({
  //prod
  baseURL: 'http://62.76.92.8:8083'
  //dev
  // baseURL: `http://${window.location.hostname}:5000`
});

const handleError = (e) => {
  const networkError = { error: 'Ошибка соединения с сервером' };
  const { response } = e;
  return response ? response.data : networkError;
};

class AxiosService {
  login = async (data) => {
    try {
      const options = { method: 'post', url: '/users/login', data, withCredentials: true };
      const res = await axios(options);
      return res.data;
    } catch (e) {
      return handleError(e);
    };
  };

  logout = async () => {
    try {
      const options = { method: 'delete', url: '/users/logout', withCredentials: true };
      const res = await axios(options);
      return res.data;
    } catch (e) {
      return handleError(e);
    };
  };

  checkAuth = async () => {
    try {
      const options = { method: 'get', url: '/users/checkauth', withCredentials: true };
      const res = await axios(options);
      return res.data;
    } catch (e) {
      return handleError(e);
    };
  };

  getStatsByPeriod = async ({ from, to, id }) => {
    try {
      const url = `/api/period?id=${id}&from=${from}&to=${to}`;
      const options = { method: 'get', url, withCredentials: true };
      const res = await axios(options);
      return res.data;
    } catch (e) {
      return handleError(e);
    };
  };

  getIds = async () => {
    try {
      const options = { method: 'get', url: '/api/ids', withCredentials: true };
      const res = await axios(options);
      return res.data;
    } catch (e) {
      return handleError(e);
    };
  };

  getStats = async () => {
    try {
      const options = { method: 'get', url: '/api/stats' };
      const res = await axios(options);
      return res.data;
    } catch (e) {
      return handleError(e);
    };
  };
  
  getStatsById = async (id) => {
    try {
      const options = { method: 'get', url: `/api/stats/${id}` };
      const res = await axios(options);
      return res.data;
    } catch (e) {
      return handleError(e);
    };
  };
};

export { AxiosService as ApiService };