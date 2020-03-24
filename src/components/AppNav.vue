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
    <button v-else type="button" @click="logout">
      Logout
    </button>
  </div>
</template>

<script>
import { authComputed } from "../store/helpers";

export default {
  name: "AppNav",
  computed: {
    ...authComputed
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
    }
  }
};
</script>
<style scoped></style>
