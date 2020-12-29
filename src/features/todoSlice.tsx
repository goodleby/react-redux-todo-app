import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { ToDoOpts, ToDoType } from '../types/todo';

let todoIndex = 0;

export const todo = createSlice({
  name: 'todo',
  initialState: {
    todos: [] as ToDoType[],
  },
  reducers: {
    add(state, action: PayloadAction<ToDoOpts>) {
      const todo = action.payload;
      state.todos.push({ ...todo, id: todoIndex++ });
    },
    remove(state, action: PayloadAction<ToDoType['id']>) {
      const todoId = action.payload;
      const index = state.todos.findIndex((item) => item.id === todoId);
      if (index >= 0) state.todos.splice(index, 1);
    },
    update(
      state,
      action: PayloadAction<{
        todoId: ToDoType['id'];
        updatedTodo: ToDoOpts;
      }>
    ) {
      const { todoId: id, updatedTodo } = action.payload;
      const index = state.todos.findIndex((item) => item.id === id);
      if (index >= 0) state.todos[index] = { ...updatedTodo, id };
    },
  },
});

export const { add, remove, update } = todo.actions;

export const selectTodos = (state: RootState) => state.todo.todos;

export default todo.reducer;
