<template>
  <form @submit.prevent="handleRegister">
    <label for="username">
      Name:
      <input
        ref="username"
        id="username"
        v-model="user.username"
        type="text"
        name="name"
      />
    </label>
    <label for="email">
      Email:
      <input
        ref="email"
        id="email"
        v-model="user.email"
        type="email"
        name="email"
      />
    </label>
    <label for="password">
      Password:
      <input
        ref="password"
        id="password"
        v-model="user.password"
        type="password"
        name="password"
      />
    </label>
    <button type="submit" name="button">
      Register
    </button>
    <router-link :to="{ name: 'register' }">
      Already have an account? Login.
    </router-link>
  </form>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapGetters, mapActions } = createNamespacedHelpers("auth");

export default {
  name: "RegisterUser",
  data() {
    return {
      user: {
        username: "",
        email: "",
        password: ""
      }
    };
  },
  computed: {
    ...mapGetters(["loggedIn"])
  },
  created() {
    this.loggedIn && this.$router.push({ name: "dashboard" });
  },
  methods: {
    ...mapActions(["register"]),
    async handleRegister() {
      try {
        for (const property in this.user) {
          this.$refs[property].classList.remove("error");
        }
        await this.register(this.user);
        await this.$router.push({ name: "dashboard" });
      } catch (err) {
        const data = err.response.data;
        for (const property in data) {
          this.$refs[property]?.classList.add("error");
        }
      }
    }
  }
};
</script>

<style scoped lang="scss"></style>
