import { configureStore } from "@reduxjs/toolkit";
import projectReducer from "./slices/project";
import userReducer from "./slices/user";
import commentReducer from "./slices/comment";

const store = configureStore({
  reducer: {
    project: projectReducer,
    user: userReducer,
    comment: commentReducer
  },
});

export default store;
