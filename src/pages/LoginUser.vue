<template>
  <form @submit.prevent="login">
    <label for="username">
      Username:
      <input id="username" v-model="username" type="text" name="username"/>
    </label>
    <label for="password">
      Password:
      <input id="password" v-model="password" type="password" name="password"/>
    </label>
    <button type="submit" name="button">
      Login
    </button>
    <p>{{ error }}</p>
    <router-link to="/register">
      Don't have a account? Register.
    </router-link>
  </form>
</template>

<script>
export default {
  name: "LoginUser",
  data() {
    return {
      username: "",
      password: "",
      error: null
    };
  },
  methods: {
    login() {
      this.$store
        .dispatch("login", {
          username: this.username,
          password: this.password
        })
        .then(() => {
          this.$router.push({ name: "dashboard" });
        })
        .catch(err => {
          this.error = err.response.data.non_field_errors[0];
        });
    }
  }
};
</script>

<style scoped></style>
