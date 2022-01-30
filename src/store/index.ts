import { createStore } from 'vuex'

interface ToDo {
  id: number
  title: string
  content: string
}

export interface State {
  todoHeader: Array<string>
  todoList: Array<ToDo>
}

export const store = createStore<State>({
  state: {
    todoHeader: ['id', 'title', 'content'],
    todoList: [],
  },
  mutations: {
    addTodo(state, { title, content }) {
      let max = 0
      if (state.todoList.length > 0) max = state.todoList.slice(-1)[0].id
      state.todoList.push({ id: max + 1, title: title, content })
    },
    changeTodo(state, { id, title, content }) {
      const todo = state.todoList.find((todo) => todo === id) as ToDo
      todo.title = title || ''
      todo.content = content || ''
    },
    deleteTodo(state, { id }) {
      const index = state.todoList.findIndex((todo) => todo === id) as number
      state.todoList.splice(index, 1)
    },
  },
  actions: {},
})

export default store
