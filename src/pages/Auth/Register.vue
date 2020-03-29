<template>
  <v-container>
    <v-row>
      <v-col>
        <authorization>
          <v-card
            slot-scope="{ user, passwordVisible, showPassword, register }"
            class="mx-auto mt-5"
          >
            <v-card-title>
              <h1 class="display-1">Register</h1>
            </v-card-title>
            <v-card-text>
              <v-form v-model="formValidity">
                <v-text-field
                  v-model="user.username.text"
                  label="Username"
                  prepend-icon="mdi-account-circle"
                />
                <v-text-field
                  v-model="user.email.text"
                  label="Email"
                  :rules="user.email.rules"
                  prepend-icon="mdi-email"
                />
                <v-text-field
                  v-model="user.password"
                  :type="passwordVisible ? 'text' : 'password'"
                  label="Password"
                  prepend-icon="mdi-lock"
                  :append-icon="passwordVisible ? 'mdi-eye' : 'mdi-eye-off'"
                  @click:append="showPassword"
                />
              </v-form>
            </v-card-text>
            <v-divider />
            <v-card-actions>
              <v-checkbox
                v-model="agreeToTerms"
                :rules="agreeToTermsRules"
                label="Agree to terms & conditions"
              />
              <v-spacer />
              <v-btn color="success" @click="register" :disabled="!formValidity"
                >Register</v-btn
              >
              <v-btn color="info" :to="{ name: 'login' }">
                Login
              </v-btn>
            </v-card-actions>
          </v-card>
        </authorization>
      </v-col>
    </v-row>
  </v-container>

</template>

<script>
import Authorization from "./Authorization";

export default {
  name: "RegisterUser",
  components: {
    Authorization
  },
  data: () => ({
    agreeToTerms: false,
    agreeToTermsRules: [
      value =>
        !!value ||
        "You must agree to the terms and conditions to sign up for an account"
    ],
    formValidity: false
  })
};
</script>

<style scoped lang="scss"></style>
