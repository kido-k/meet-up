<template>
  <v-card class="todo-add" align-center>
    <v-text-field v-model="title" label="Title" />
    <v-textarea v-model="content" label="Todo" />
    <v-layout class="todo-add__button">
      <v-btn color="primary" @click="save"> Save </v-btn>
    </v-layout>
  </v-card>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  interface ToDo {
    id: number
    title: string
    content: string
  }

  export default defineComponent({
    name: 'TodoList',
    props: {
      todo: {
        type: Object as () => ToDo,
        default: () => ({}),
      },
    },
    emits: ['close'],
    data: () => ({
      id: null as number | null,
      title: '' as string,
      content: '' as string,
    }),
    computed: {},
    created() {
      if (this.todo.id) {
        this.id = this.todo.id
        this.title = this.todo.title
        this.content = this.todo.content
      }
    },
    methods: {
      save() {
        if (!this.id) {
          this.addTodo()
        } else {
          this.editTodo()
        }
      },
      addTodo(): void {
        this.$store.commit('addTodo', {
          title: this.title,
          content: this.content,
        })
        this.$emit('close')
      },
      editTodo(): void {
        this.$store.commit('editTodo', {
          id: this.id,
          title: this.title,
          content: this.content,
        })
        this.$emit('close')
      },
    },
  })
</script>

<style lang="scss" scoped>
  .todo-add {
    width: 600px;
    padding: 40px;
    &__button {
      justify-content: end;
      align-content: center;
    }
  }
</style>
