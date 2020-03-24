<template>
  <form @submit.prevent="register">
    <label for="name">
      Name:
      <input id="name" v-model="username" type="text" name="name" />
    </label>
    <label for="email">
      Email:
      <input id="email" v-model="email" type="email" name="email" />
    </label>
    <label for="password">
      Password:
      <input id="password" v-model="password" type="password" name="password" />
    </label>
    <button type="submit" name="button">
      Register
    </button>
    <ul>
      <li v-for="(error, key, index) in errors" :key="index">
        {{ key }}: {{ error[0] }}
      </li>
    </ul>
    <router-link to="/login">
      Already have an account? Login.
    </router-link>
  </form>
</template>

<script>
export default {
  name: "RegisterUser",
  data() {
    return {
      username: "",
      email: "",
      password: "",
      errors: null
    };
  },
  methods: {
    register() {
      this.$store
        .dispatch("register", {
          username: this.username,
          email: this.email,
          password: this.password
        })
        .then(() => {
          this.$router.push({ name: "dashboard" });
        })
        .catch(err => {
          this.errors = err.response.data;
        });
    }
  }
};
</script>

<style scoped></style>
