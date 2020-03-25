import Vue from "vue";
import axios from "axios";
import UserService from "@/common/user.service";
import { API_URL } from "@/common/config";

const _errorsHandler = () => {
  axios.interceptors.response.use(
    response => response,
    async error => {
      if (error.response.status === 401) {
        await Vue.$store.dispatch("logout");
      }
      return Promise.reject(error);
    }
  );
};

const ApiService = {
  init() {
    axios.defaults.baseURL = API_URL;
    _errorsHandler();
  },

  setHeader() {
    axios.defaults.headers.common[
      "Authorization"
    ] = `Token ${UserService.userToken()}`;
  },

  query(resource, params) {
    return axios.get(resource, params).catch(error => {
      throw new Error(`[RWV ApiService ${error}`);
    });
  },

  get(resource, slug = "") {
    return axios.get(`${resource}/${slug}`).catch(error => {
      throw new Error(`[RWV ApiService ${error}`);
    });
  },

  async post(resource, params) {
    return axios.post(`${resource}`, params);
  },

  update(resource, slug, params) {
    return axios.put(`${resource}`, params);
  },

  put(resource, params) {
    return axios.put(`${resource}`, params);
  },

  delete(resource) {
    return axios.delete(resource).catch(error => {
      throw new Error(`[RWV] ApiService ${error}`);
    });
  }
};

export default ApiService;
