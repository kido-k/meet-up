<template>
  <v-card class="todo-add" align-center>
    <v-text-field v-model="title" label="Title" />
    <v-textarea v-model="content" label="Todo" />
    <v-layout class="todo-add__button">
      <v-btn color="primary" @click="addTodo"> Add </v-btn>
    </v-layout>
  </v-card>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    name: 'TodoList',
    emits: ['close'],
    data: () => ({
      title: '' as string,
      content: '' as string,
    }),
    computed: {},
    methods: {
      addTodo() {
        this.$store.commit('addTodo', {
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
