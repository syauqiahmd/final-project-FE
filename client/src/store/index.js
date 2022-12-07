import { configureStore } from "@reduxjs/toolkit";
import projectReducer from "./slices/project";
import userReducer from "./slices/user";
import commentReducer from "./slices/comment";
import tagReducer from "./slices/tag"


const store = configureStore({
  reducer: {
    project: projectReducer,
    user: userReducer,
    comment: commentReducer,
    tag: tagReducer
  },
});

export default store;
