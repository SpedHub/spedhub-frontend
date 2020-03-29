<template>
  <navigation>
    <v-app-bar slot-scope="{ activeLinks, logout }" app color="primary" dark>
      <v-toolbar-title>Vuetify</v-toolbar-title>
      <v-spacer />
      <div>
        <v-btn
          v-for="link in activeLinks"
          :key="`${link.label}-nav-link`"
          :to="link.url"
          text
          rounded
          v-on="link.label === 'Logout' ? { click: logout } : null"
        >
          {{ link.label }}
        </v-btn>
      </div>
    </v-app-bar>
  </navigation>
</template>

<script>
import Navigation from "./Navigation";

export default {
  name: "AppNav",
  components: {
    Navigation
  }
};
</script>
<style scoped></style>
