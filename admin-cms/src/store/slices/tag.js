import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../bin/axios";

export const fetchTags = createAsyncThunk("tags/fetchSuccess", async () => {
  const { data } = await instance.get("/public/tags");
  return data;
});

export const fetchTagById = createAsyncThunk(
  "tagById/fetchSuccess",
  async ({ id }) => {
    const { data } = await instance.get(`/Tags/${id}`);
    return data;
  }
);

const tagSlice = createSlice({
  name: "tag",
  initialState: {
    tags: [],
    tag: {},
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTags.fulfilled, (state, action) => {
      state.tags = action.payload;
    });

    builder.addCase(fetchTagById.fulfilled, (state, action) => {
      state.tag = action.payload;
    });
  },
});

export default tagSlice.reducer;
