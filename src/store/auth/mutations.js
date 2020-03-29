import ApiService from "@/common/api.service";
import UserService from "@/common/user.service";

export default {
  SET_USER(state, userData) {
    state.user = { token: userData.token, ...userData.user };
    UserService.saveUser(state.user);
    ApiService.setHeader();
  },
  CLEAR_USER() {
    UserService.destroyUser();
  }
};
