<script>
import { createNamespacedHelpers } from "vuex";
import { required, email, minLength } from "vuelidate/lib/validators";
const { mapGetters, mapActions } = createNamespacedHelpers("auth");

export default {
  name: "Authorization",
  validations: {
    user: {
      username: {
        text: { required, minLength: minLength(3) }
      },
      email: {
        text: { required, email }
      },
      password: {
        text: { required, minLength: minLength(3) }
      },
      agreeToTerms: {
        value: {
          checked(val) {
            return val;
          }
        }
      }
    }
  },
  data() {
    return {
      user: {
        username: {
          text: "",
          errorMessages: null
        },
        email: {
          text: "",
          errorMessages: null
        },
        password: {
          text: "",
          errorMessages: null
        },
        agreeToTerms: {
          value: false,
          errorMessages: null
        }
      },
      config: {
        passwordVisible: false,
        showPassword: this.showPassword,
        invalidLoginAttempt: null,
        $v: null
      }
    };
  },
  computed: {
    ...mapGetters(["loggedIn"]),
    usernameErrors() {
      const errors = [];
      if (!this.$v.user.username.text.$dirty) return errors;
      !this.$v.user.username.text.minLength &&
        errors.push("Username must be at least 3 characters long.");
      !this.$v.user.username.text.required &&
        errors.push("Username is required.");
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.user.email.text.$dirty) return errors;
      !this.$v.user.email.text.email && errors.push("Must be valid e-mail.");
      !this.$v.user.email.text.required && errors.push("E-mail is required.");
      return errors;
    },
    passwordErrors() {
      const errors = [];
      if (!this.$v.user.password.text.$dirty) return errors;
      !this.$v.user.password.text.minLength &&
        errors.push("Password must be at least 3 characters long.");
      !this.$v.user.password.text.required &&
        errors.push("Password is required.");
      return errors;
    },
    checkboxErrors() {
      const errors = [];
      if (!this.$v.user.agreeToTerms.value.$dirty) return errors;
      !this.$v.user.agreeToTerms.value.checked &&
        errors.push(
          "You must agree to the terms and conditions to sign up for an account."
        );
      return errors;
    },
    invalidLoginAttempt() {
      return this.$v.user.username.$invalid || this.$v.user.password.$invalid;
    }
  },
  watch: {
    usernameErrors: {
      immediate: true,
      handler() {
        this.user.username.errorMessages = this.usernameErrors;
      }
    },
    emailErrors: {
      immediate: true,
      handler() {
        this.user.email.errorMessages = this.emailErrors;
      }
    },
    passwordErrors: {
      immediate: true,
      handler() {
        this.user.password.errorMessages = this.passwordErrors;
      }
    },
    checkboxErrors: {
      immediate: true,
      handler() {
        this.user.agreeToTerms.errorMessages = this.checkboxErrors;
      }
    },
    invalidLoginAttempt: {
      immediate: true,
      handler() {
        this.config.invalidLoginAttempt = this.invalidLoginAttempt;
      }
    }
  },
  created() {
    this.loggedIn && this.$router.push({ name: "dashboard" });
    this.config.$v = this.$v;
  },
  methods: {
    ...mapActions(["register", "login"]),
    async handleRegister() {
      try {
        const {
          username: { text: username },
          email: { text: email },
          password: { text: password }
        } = this.user;
        const user = {
          username,
          email,
          password
        };

        await this.register(user);
        await this.$router.push({ name: "dashboard" });
      } catch (err) {
        const data = err.response.data;
        await this.$store.dispatch("setError", data.username[0]);
      }
    },
    async handleLogin() {
      try {
        const {
          username: { text: username },
          password: { text: password }
        } = this.user;
        const user = {
          username,
          password
        };

        await this.login(user);
        await this.$router.push({ name: "dashboard" });
      } catch (err) {
        const data = err.response.data;
        await this.$store.dispatch("setError", data.non_field_errors[0]);
      }
    },
    showPassword() {
      this.config.passwordVisible = !this.config.passwordVisible;
    }
  },
  render() {
    return this.$scopedSlots.default({
      user: this.user,
      config: this.config,
      login: this.handleLogin,
      register: this.handleRegister
    });
  }
};
</script>

<style scoped></style>
