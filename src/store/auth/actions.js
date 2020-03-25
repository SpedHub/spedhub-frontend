import ApiService from "@/common/api.service";

export default {
  async register({ commit }, credentials) {
    const user = await ApiService.post("/auth/register", credentials);
    commit("SET_USER", user);
  },
  async login({ commit }, credentials) {
    const { data } = await ApiService.post("auth/login", credentials);
    commit("SET_USER", data);
  },
  logout({ commit }) {
    commit("CLEAR_USER");
  }
};
