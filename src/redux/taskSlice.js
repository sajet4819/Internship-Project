import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "tasks",
  initialState: { list: [] },
  reducers: {
    addTask: (state, action) => {
      state.list.push(action.payload);
      localStorage.setItem("tasks", JSON.stringify(state.list));
    },
    deleteTask: (state, action) => {
      state.list = state.list.filter((task) => task.id !== action.payload);
      localStorage.setItem("tasks", JSON.stringify(state.list));
    },
    toggleTask: (state, action) => {
      const task = state.list.find((task) => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
      localStorage.setItem("tasks", JSON.stringify(state.list));
    },
  },
});

export const { addTask, deleteTask, toggleTask } = taskSlice.actions;
export default taskSlice.reducer;
