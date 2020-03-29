import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import ApiService from "./common/api.service";
import UserService from "./common/user.service";
import "./assets/scss/shared.scss";
import vuetify from "./plugins/vuetify";
import vuelidate from "./plugins/vuelidate";

Vue.config.productionTip = false;
ApiService.init();

new Vue({
  router,
  store,

  created() {
    const user = UserService.user();
    if (user) {
      this.$store.commit("auth/SET_USER", user);
    }
  },

  vuetify,
  vuelidate,
  render: h => h(App)
}).$mount("#app");
