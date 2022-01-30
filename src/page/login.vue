<template>
  <v-app>
    <v-container>
      <login-layout />
    </v-container>
  </v-app>
</template>

<script lang="ts">
  import LoginLayout from '@/components/login/LoginLayout.vue'

  export default {
    name: 'LoginPage',
    components: {
      LoginLayout,
    },
    data: () => ({}),
  }
</script>

<style lang="scss" scoped></style>
