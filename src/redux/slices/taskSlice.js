import { createSlice } from "@reduxjs/toolkit";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";

const taskSlice = createSlice({
  name: "task",
  initialState: [],
  reducers: {
    addTask(state, action) {
      const { name, desc, category } = action.payload;
      state.push({ id: uuidv4(), name, desc, category, completed: false });
    },
    updateTask(state, action) {
      const { id, name, desc, category } = action.payload;
      const index = state.findIndex((task) => task.id === id);
      state[index].name = name;
      state[index].desc = desc;
      state[index].category = category;
    },
    removeTask(state, action) {
      const index = state.findIndex((task) => task.id === action.payload);
      state.splice(index, 1);
    },
    setTaskStatus(state, action) {
      const index = state.findIndex((task) => task.id === action.payload.id);
      state[index].completed = action.payload.completed;
    },
  },
});

export const { addTask, updateTask, removeTask, setTaskStatus } =
  taskSlice.actions;
export default taskSlice.reducer;
