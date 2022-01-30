<template>
  <h1>ToDo List</h1>
  <v-layout class="todo-layout__controller">
    <v-btn color="primary" @click="addDialog = true">
      Add Todo
      <v-icon>mdi-plus</v-icon>
    </v-btn>
  </v-layout>
  <todo-list />
  <v-dialog v-if="addDialog" v-model="addDialog">
    <todo-add @close="addDialog = false" />
  </v-dialog>
</template>

<script lang="ts">
  import TodoList from '@/components/todo/TodoList.vue'
  import TodoAdd from '@/components/todo/TodoAdd.vue'

  export default {
    name: 'TodoLayout',
    components: {
      TodoList,
      TodoAdd,
    },
    data: () => ({
      addDialog: false as boolean,
    }),
    computed: {},
    methods: {},
  }
</script>

<style lang="scss" scoped>
  .todo-layout {
    &__controller {
      width: 100%;
      margin: 12px 0;
      justify-content: end;
    }
  }
</style>
