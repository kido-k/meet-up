<template>
  <v-form class="login-layout" @submit.prevent="login">
    <h1 class="login-layout__title">Login</h1>
    <v-card class="login-layout__card">
      <v-text-field
        v-model="mailAddress"
        label="mail address"
        type="email"
        clearable
      />
      <v-text-field
        v-model="password"
        label="password"
        type="password"
        clearable
      />
      <div class="login-layout__login">
        <v-btn color="primary" type="submit"> Login </v-btn>
      </div>
      <router-link :to="{ name: 'register' }"> create new user </router-link>
    </v-card>
  </v-form>
</template>

<script lang="ts">
  export default {
    data: () => ({
      mailAddress: '' as string,
      password: '' as string,
    }),
    methods: {
      login() {
        console.log('login api')
        this.$router.push('/')
      },
    },
  }
</script>

<style lang="scss">
  .login-layout {
    height: 480px;
    max-width: 960px;
    margin: 60px auto 0 auto;
    &__title {
      text-align: center;
    }
    &__card {
      padding: 40px !important;
    }
    &__login {
      width: 100%;
      text-align: right;
    }
  }
</style>
