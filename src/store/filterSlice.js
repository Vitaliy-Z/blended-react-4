import { createSelector, createSlice } from '@reduxjs/toolkit';
import { selectTodos } from './todosSlice';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    addFilter: (_, action) => action.payload,
  },
});
export const { addFilter } = filterSlice.actions;
export const selectFilter = state => state.filter;
export const selectVisibleTodos = createSelector(
  [selectTodos, selectFilter],
  (todos, filter) =>
    todos.filter(el => el.text.toLowerCase().includes(filter.toLowerCase())),
);
export default filterSlice.reducer;
