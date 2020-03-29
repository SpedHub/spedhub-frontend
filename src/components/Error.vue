<template>
  <v-alert
    v-if="error"
    v-model="alert"
    dense
    dismissible
    prominent
    type="error"
  >
    {{ error }}
  </v-alert>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Error",
  data: () => ({
    alert: false,
    text: "test"
  }),
  computed: {
    ...mapGetters(["error"])
  },
  watch: {
    error() {
      this.alert = true;
    },
    alert(newVal) {
      this.alert = newVal;
      !this.alert ? this.setError("") : null;
    }
  },
  methods: {
    ...mapActions(["setError"])
  }
};
</script>

<style scoped></style>
