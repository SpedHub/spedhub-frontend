<template>
  <v-container>
    <div class="home">
      <h1>Welcome to the SpedHub</h1>
      <div v-if="!loggedIn">
        To use this app you'll need to
        <v-btn text color="primary" to="/login">
          Login
        </v-btn>
        or
        <v-btn text color="primary" to="/register">
          Register
        </v-btn>
      </div>
    </div>
  </v-container>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapGetters } = createNamespacedHelpers("auth");

export default {
  name: "Home",
  computed: {
    ...mapGetters(["loggedIn"])
  }
};
</script>

<style scoped></style>
