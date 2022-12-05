import { configureStore } from "@reduxjs/toolkit";
import projectReducer from "./slices/project";
import tagReducer from "./slices/tag";

const store = configureStore({
  reducer: {
    project: projectReducer,
    tag: tagReducer,
  },
});

export default store;
