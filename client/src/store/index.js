import { configureStore } from "@reduxjs/toolkit";
import projectReducer from "./slices/project";
import userReducer from "./slices/user";
import commentReducer from "./slices/comment";
import stepReducer from "./slices/step"

const store = configureStore({
  reducer: {
    project: projectReducer,
    user: userReducer,
    comment: commentReducer,
    step: stepReducer
  },
});

export default store;
