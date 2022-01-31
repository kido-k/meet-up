<template>
  <v-form class="register-layout" @submit.prevent="register">
    <h1 class="register-layout__title">Register</h1>
    <v-card class="register-layout__card">
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
      <div class="register-layout__button">
        <v-btn color="primary" type="submit"> Register </v-btn>
      </div>
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
      register() {
        console.log('register api')
        this.$router.push('/')
      },
    },
  }
</script>

<style lang="scss">
  .register-layout {
    height: 480px;
    max-width: 960px;
    margin: 60px auto 0 auto;
    &__title {
      text-align: center;
    }
    &__card {
      padding: 40px !important;
    }
    &__button {
      width: 100%;
      text-align: right;
    }
  }
</style>
