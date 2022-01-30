<template>
  <v-table class="todo-list">
    <template #default>
      <thead>
        <tr>
          <th v-for="(header, index) in headers" :key="index" class="text-left">
            {{ header }}
          </th>
          <th style="width: 24px"><!-- delete button --></th>
        </tr>
      </thead>
      <tbody v-if="items.length > 0">
        <tr v-for="item in items" :key="item.id">
          <td
            v-for="(header, index) in headers"
            :key="index"
            @click="editTodo(item)"
          >
            {{ item[header] }}
          </td>
          <td>
            <v-btn icon flat @click.stop="deleteTodo(item)">
              <v-icon>mdi-delete</v-icon>
            </v-btn>
          </td>
        </tr>
      </tbody>
      <tbody v-else class="no-data">
        <p class="no-data__label">no data</p>
      </tbody>
    </template>
  </v-table>
</template>

<script lang="ts">
  export default {
    name: 'TodoList',
    emits: ['edit-todo'],
    computed: {
      headers() {
        return this.$store.state.todoHeader
      },
      items() {
        return this.$store.state.todoList
      },
    },
    methods: {
      editTodo(item) {
        this.$emit('edit-todo', item)
      },
      deleteTodo(item): void {
        this.$store.commit('deleteTodo', {
          id: item.id,
        })
      },
    },
  }
</script>

<style lang="scss" scoped>
  .todo-list {
    border: thin solid #ececec;
  }
  .no-data {
    width: 100%;
    height: 40px;
    text-align: center;
    &__label {
      display: block;
      margin: 8px 0 0 0;
    }
  }
</style>
