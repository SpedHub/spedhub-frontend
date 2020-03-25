<template>
  <div id="nav">
    <router-link to="/">
      Home
    </router-link>
    <router-link v-if="loggedIn" to="/dashboard">
      Dashboard
    </router-link>
    <router-link v-if="!loggedIn" to="/login">
      Login
    </router-link>
    <button v-else type="button" @click="handleLogout">
      Logout
    </button>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapGetters, mapActions } = createNamespacedHelpers("auth");

export default {
  name: "AppNav",
  computed: {
    ...mapGetters(["loggedIn"])
  },
  methods: {
    ...mapActions(["logout"]),
    handleLogout() {
      this.logout();
    }
  }
};
</script>
<style scoped></style>
