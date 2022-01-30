<template>
  <h1>ToDo List</h1>
  <v-layout class="todo-layout__controller">
    <v-btn color="primary" @click="openAddDialog">
      Add Todo
      <v-icon>mdi-plus</v-icon>
    </v-btn>
  </v-layout>
  <todo-list @edit-todo="openEditDialog" />
  <v-dialog v-if="dialog" v-model="dialog">
    <todo-dialog :todo="editTodoItem" @close="closeDialog" />
  </v-dialog>
</template>

<script lang="ts">
  import TodoList from '@/components/todo/TodoList.vue'
  import TodoDialog from '@/components/todo/TodoDialog.vue'

  interface ToDo {
    id: number | null
    title: string
    content: string
  }

  export default {
    name: 'TodoLayout',
    components: {
      TodoList,
      TodoDialog,
    },
    data: () => ({
      dialog: false as boolean,
      editTodoItem: {
        id: null,
        title: '',
        content: '',
      } as ToDo,
    }),
    computed: {},
    methods: {
      openAddDialog(): void {
        this.editTodoItem = {
          id: null,
          title: '',
          content: '',
        }
        this.dialog = true
      },
      openEditDialog(editItem): void {
        this.editTodoItem = editItem
        this.dialog = true
      },
      closeDialog(): void {
        this.editTodoItem = {
          id: null,
          title: '',
          content: '',
        }
        this.dialog = false
      },
    },
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
