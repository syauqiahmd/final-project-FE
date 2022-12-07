import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../bin/axios";

export const fetchTags = createAsyncThunk("tags/fetchSuccess", async () => {
  const { data } = await instance.get("/public/tags");
  return data;
});


const tagSlice = createSlice({
  name: "tag",
  initialState: {
    tags: [],
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTags.fulfilled, (state, action) => {
      state.tags = action.payload;
    });
  },
});

export default tagSlice.reducer;
