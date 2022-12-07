import { configureStore } from "@reduxjs/toolkit";
import projectReducer from "./slices/project";
import tagReducer from "./slices/tag";
import reportReducer from "./slices/report";


const store = configureStore({
  reducer: {
    project: projectReducer,
    tag: tagReducer,
    report: reportReducer
  },
});

export default store;
