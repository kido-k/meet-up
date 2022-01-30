<template>
  <v-table class="todo-list">
    <template #default>
      <thead>
        <tr>
          <th v-for="(header, index) in headers" :key="index" class="text-left">
            {{ header }}
          </th>
        </tr>
      </thead>
      <tbody v-if="items.length > 0">
        <tr v-for="item in items" :key="item.id">
          <td v-for="(header, index) in headers" :key="index">
            {{ item[header] }}
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
    computed: {
      headers() {
        return this.$store.state.todoHeader
      },
      items() {
        return this.$store.state.todoList
      },
    },
    methods: {},
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
