<template>
  <v-container>
    <v-row>
      <v-col>
        <authorization>
          <v-card slot-scope="{ user, config, login }" class="mx-auto mt-5">
            <v-card-title>
              <h1 class="display-1">Login</h1>
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
              <v-btn color="success" :to="{ name: 'register' }">Register</v-btn>
              <v-spacer />
              <v-btn
                color="info"
                :disabled="config.invalidLoginAttempt"
                @click="login"
                >Login</v-btn
              >
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
  name: "LoginUser",
  components: {
    Authorization
  }
};
</script>

<style scoped lang="scss"></style>
