import Vue from "vue";
import Vuex from "vuex";

import auth from "./auth";
Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== "production",
  modules: {
    auth
  },
  state: {
    error: ""
  },
  getters: {
    error(state) {
      return state.error;
    }
  },
  mutations: {
    SET_ERROR(state, error) {
      state.error = error;
    }
  },
  actions: {
    setError({ commit }, error) {
      commit("SET_ERROR", error);
    }
  }
});
