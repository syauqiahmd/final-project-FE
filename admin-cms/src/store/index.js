import { configureStore } from "@reduxjs/toolkit";
import projectReducer from "./slices/project";
import userReducer from "./slices/user";

const store = configureStore({
  reducer: {
    project: projectReducer,
    user: userReducer,
  },
});

export default store;
