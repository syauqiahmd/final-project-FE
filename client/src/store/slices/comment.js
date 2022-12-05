import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instance } from "../../bin/axios";

export const fetchComments = createAsyncThunk(
  "comments/fetchSucces",
  async ({ projectid }) => {
    console.log(projectid);
    const { data } = await instance.get(`/Comments?ProjectId=${projectid}`);
    return data;
  }
);

export const insertComments = createAsyncThunk(
  "comments/insertSucces",
  async ({ comment, projectid }) => {
    // handle socket io here, send comment field to params of socket.emit to server and save to database
  }
);

const commentSlice = createSlice({
  name: "comment",
  initialState: {
    loadingComment: true,
    comments: [],
    error: false,
    errorMessage: "",
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchComments.pending, (state) => {
        state.loadingComment = true;
      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.comments = action.payload;
      });
  },
});

export default commentSlice.reducer;
