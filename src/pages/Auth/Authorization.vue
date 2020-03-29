<script>
import { createNamespacedHelpers } from "vuex";
const { mapGetters, mapActions } = createNamespacedHelpers("auth");

export default {
  name: "Authorization",
  data() {
    return {
      user: {
        username: {
          text: "",
          rules: [
            value => !!value || "Username is required.",
            value =>
              value.length > 3 || "Username should have a least two signs."
          ]
        },
        email: {
          text: "",
          rules: [
            value => !!value || "Email is required.",
            value =>
              value.indexOf("@") !== 0 || "Email should have a username.",
            value => value.includes("@") || "Email should include @ symbol.",
            value =>
              value.indexOf(".") - value.indexOf("@") > 1 ||
              "Email should contain a valid domain.",
            value =>
              value.indexOf(".") <= value.length - 3 ||
              "Email should contain a valid domain extension."
          ]
        },
        password: {
          text: "",
        }
      },
      passwordVisible: false
    };
  },
  computed: {
    ...mapGetters(["loggedIn"])
  },
  created() {
    this.loggedIn && this.$router.push({ name: "dashboard" });
  },
  methods: {
    ...mapActions(["register", "login"]),
    async handleRegister() {
      try {
        await this.register(this.user);
        await this.$router.push({ name: "dashboard" });
      } catch (err) {
        const data = err.response.data;
        console.log(data);
      }
    },
    async handleLogin() {
      try {
        await this.login(this.user);
        await this.$router.push({ name: "dashboard" });
      } catch (err) {
        const data = err.response.data;
        console.log(data);
      }
    },
    showPassword() {
      this.passwordVisible = !this.passwordVisible;
    }
  },
  render() {
    return this.$scopedSlots.default({
      user: this.user,
      passwordVisible: this.passwordVisible,
      showPassword: this.showPassword,
      login: this.handleLogin,
      register: this.handleRegister
    });
  }
};
</script>

<style scoped></style>
