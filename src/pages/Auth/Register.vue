<template>
  <v-container>
    <v-row>
      <v-col>
        <authorization>
          <v-card
            slot-scope="{ user, config, register }"
            class="mx-auto mt-5"
            max-width="800"
          >
            <v-card-title>
              <h1 class="display-1">Register</h1>
            </v-card-title>
            <v-card-text>
              <v-form>
                <v-text-field
                  v-model="user.username.text"
                  label="Username"
                  :error-messages="user.username.errorMessages"
                  prepend-icon="mdi-account-circle"
                  @blur="config.$v.user.username.$touch()"
                />
                <v-text-field
                  v-model="user.email.text"
                  label="Email"
                  :error-messages="user.email.errorMessages"
                  prepend-icon="mdi-email"
                  @blur="config.$v.user.email.$touch()"
                />
                <v-text-field
                  v-model="user.password.text"
                  :type="config.passwordVisible ? 'text' : 'password'"
                  label="Password"
                  :error-messages="user.password.errorMessages"
                  prepend-icon="mdi-lock"
                  :append-icon="
                    config.passwordVisible ? 'mdi-eye' : 'mdi-eye-off'
                  "
                  @click:append="config.showPassword"
                  @blur="config.$v.user.password.$touch()"
                />
              </v-form>
            </v-card-text>
            <v-divider />
            <v-card-actions>
              <v-checkbox
                v-model="user.agreeToTerms.value"
                label="Agree to terms & conditions"
                :error-messages="user.agreeToTerms.errorMessages"
                @change="config.$v.user.agreeToTerms.$touch()"
              />
              <v-spacer />
              <v-btn
                color="success"
                :disabled="config.$v.$invalid"
                @click="register"
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
  name: "Register",
  components: {
    Authorization
  }
};
</script>

<style scoped lang="scss"></style>
