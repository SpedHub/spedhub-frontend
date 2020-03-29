<template>
  <navigation>
    <v-footer
      slot-scope="{ activeLinks, logout }"
      color="primary lighten-1"
      padless
    >
      <v-row justify="center" no-gutters>
        <v-btn
          v-for="link in activeLinks"
          :key="`${link.label}-nav-link`"
          :to="link.url"
          color="white"
          class="my-2"
          text
          rounded
          v-on="link.label === 'Logout' ? { click: logout } : null"
        >
          {{ link.label }}
        </v-btn>
        <v-col class="primary lighten-2 py-4 text-center white--text" cols="12">
          <strong>Vuetify</strong>
        </v-col>
      </v-row>
    </v-footer>
  </navigation>
</template>

<script>
import Navigation from "./Navigation";
export default {
  name: "AppFooter",
  components: {
    Navigation
  }
};
</script>

<style scoped></style>
