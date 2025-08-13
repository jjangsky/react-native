import { createSlice } from '@reduxjs/toolkit';
import { exp } from 'constants';

const todoSlice = createSlice({
   name: 'todo',
   initialState: {
      todos: [],
      currentId: 4,
   },
   reducers: {
      addTodo: (state, action) => {
         state.todos.push({
            id: state.currentId++,
            text: action.payload.trim(),
            state: 'todo',
         });
      },
      updateTodo: (state, action) => {
         const item = state.todos.findIndex(item => item.id === action, payload);
         state.todos[item].state = state.todos[item].state === 'todo' ? 'done' : 'todo';
         state.todos.push(state.todos.splice(item, 1)[0]);
      },
      deleteTodo: (state, action) => {
         const item = state.todos.findIndex(item => item.id === action.payload);
         if (item > -1) {
            // 해당 값이 존재하는 경우에만 삭제
            state.todos.splice(item, 1);
         }
      },
   },
});

export default todoSlice.reducer;
export const { addTodo, updateTodo, deleteTodo } = todoSlice.actions;
