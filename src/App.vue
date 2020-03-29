<template>
  <v-app>
    <app-nav />
    <v-content>
      <router-view />
    </v-content>
    <error />
    <app-footer />
  </v-app>
</template>

<script>
import AppNav from "./components/Nav/AppNav";
import AppFooter from "./components/Nav/AppFooter";
import Error from "./components/Error";
export default {
  name: "App",
  components: {
    AppNav,
    AppFooter,
    Error
  }
};
</script>
