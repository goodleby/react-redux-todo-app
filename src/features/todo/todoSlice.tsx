import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';

export type ToDoType = {
  id: string;
  date: number;
  title: string;
};

const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    todos: [] as ToDoType[],
  },
  reducers: {
    addTodo: {
      reducer(state, action: PayloadAction<ToDoType>) {
        state.todos.push(action.payload);
      },
      prepare({ title }: { title: ToDoType['title'] }) {
        return {
          payload: {
            id: nanoid(),
            date: Date.now(),
            title,
          },
        };
      },
    },
    removeTodo(state, action: PayloadAction<ToDoType['id']>) {
      const todoId = action.payload;
      const index = state.todos.findIndex((item) => item.id === todoId);
      if (index >= 0) state.todos.splice(index, 1);
    },
    updateTodo(
      state,
      action: PayloadAction<{ id: ToDoType['id']; title: ToDoType['title'] }>
    ) {
      const { id, title } = action.payload;
      const todo = state.todos.find((item) => item.id === id);
      if (todo) {
        todo.title = title;
      }
    },
  },
});

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;

export const selectTodos = (state: RootState) => state.todo.todos;

export default todoSlice.reducer;
