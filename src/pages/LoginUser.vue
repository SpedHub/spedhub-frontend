<template>
  <form @submit.prevent="handleLogin">
    <label for="username">
      Username:
      <input
        ref="username"
        id="username"
        v-model="user.username"
        type="text"
        name="username"
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
      Login
    </button>
    <router-link :to="{ name: 'login' }">
      Don't have a account? Register.
    </router-link>
  </form>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapGetters, mapActions } = createNamespacedHelpers("auth");
export default {
  name: "LoginUser",
  data() {
    return {
      user: {
        username: "",
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
    ...mapActions(["login"]),
    async handleLogin() {
      try {
        for (const property in this.user) {
          this.$refs[property].classList.remove("error");
        }
        await this.login(this.user);
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

<style scoped lang="scss">
</style>
