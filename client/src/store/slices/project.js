import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  projects: [],
  project: {},
};

const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    fecthProject: (state, action) => {
        //fetching data axios
      
    },
    fetchProjectById: (state, action) => {
        //fetching data axios
        
    },
    resetProjectById: (state) => {
        state.project = {}
    }
  },
});

export const { fecthProject, fetchProjectById, resetProjectById } = projectSlice.actions;
export default projectSlice.reducer;
