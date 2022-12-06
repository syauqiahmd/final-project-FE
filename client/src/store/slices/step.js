import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instance } from "../../bin/axios";

export const fetchSteps = createAsyncThunk(
  "step/fetchSucces",
  async ({ projectid }) => {
    const { data } = await instance.get(`/Steps?ProjectId=${projectid}`);
    return data;
  }
);

const stepSlice = createSlice({
    name: "step",
    initialState: {
        loadingSteps: true,
        steps: [],
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchSteps.pending, (state) => {
            state.loadingSteps = true;
        })
        .addCase(fetchSteps.fulfilled, (state, action) => {
            state.loadingSteps = false;
            state.steps = action.payload;
        });
    },
});
  
  export default stepSlice.reducer;