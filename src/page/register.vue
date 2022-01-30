<template>
  <v-app>
    <v-container>
      <register-layout />
    </v-container>
  </v-app>
</template>

<script lang="ts">
  import RegisterLayout from '@/components/register/RegisterLayout.vue'

  export default {
    name: 'RegisterPage',
    components: {
      RegisterLayout,
    },
    data: () => ({}),
  }
</script>

<style lang="scss" scoped></style>
