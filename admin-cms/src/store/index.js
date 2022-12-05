import { configureStore } from "@reduxjs/toolkit";
import projectReducer from "./slices/project";

const store = configureStore({
  reducer: {
    project: projectReducer,
  },
});

export default store;
