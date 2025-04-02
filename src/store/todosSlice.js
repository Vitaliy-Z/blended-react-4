import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: { items: [], currentTodo: null },
  reducers: {
    addTodos(state, action) {
      state.items.push(action.payload);
    },
    deleteTodos(state, action) {
      state.items = state.items.filter(el => el.id !== action.payload);
    },
    setCurrentTodo(state, action) {
      state.currentTodo = action.payload
        ? state.items.find(el => el.id === action.payload)
        : null;
    },
    updateTodos(state, action) {
      state.items = state.items.map(el =>
        el.id === state.currentTodo.id ? { ...el, text: action.payload } : el,
      );
    },
  },
});

export const { addTodos, deleteTodos, setCurrentTodo, updateTodos } =
  todoSlice.actions;
export const selectTodos = state => state.todos.items;
export const selectEditTodo = state => state.todos.currentTodo;
export default todoSlice.reducer;
