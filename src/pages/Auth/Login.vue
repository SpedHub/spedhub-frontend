<template>
  <v-container>
    <v-row>
      <v-col>
        <authorization>
          <v-card
            slot-scope="{ user, passwordVisible, showPassword, login }"
            class="mx-auto mt-5"
          >
            <v-card-title>
              <h1 class="display-1">Login</h1>
            </v-card-title>
            <v-card-text>
              <v-form>
                <v-text-field
                  v-model="user.username.text"
                  label="Username"
                  prepend-icon="mdi-account-circle"
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
              <v-btn color="success" :to="{ name: 'register' }">Register</v-btn>
              <v-spacer />
              <v-btn color="info" @click="login">Login</v-btn>
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
