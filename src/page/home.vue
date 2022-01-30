<template>
  <v-app>
    <v-container>
      <todo-layout />
    </v-container>
  </v-app>
</template>

<script>
  import TodoLayout from '@/components/todo/TodoLayout.vue'

  export default {
    name: 'TodoHome',
    components: {
      TodoLayout,
    },
  }
</script>
