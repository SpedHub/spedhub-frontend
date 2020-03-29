<template>
  <v-app>
    <app-nav />
    <v-content>
      <router-view />
    </v-content>
    <app-footer />
  </v-app>
</template>

<script>
import AppNav from "./components/Nav/AppNav";
import AppFooter from "./components/Nav/AppFooter";
export default {
  name: "App",
  components: {
    AppNav,
    AppFooter
  }
};
</script>
