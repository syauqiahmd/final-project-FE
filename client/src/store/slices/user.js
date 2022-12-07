import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instance } from "../../bin/axios";

export const fetchUser = createAsyncThunk("users/fetchSuccess", async (access_token) => {
  const { data } = await instance({
    method: "get",
    url: "/public/profile",
    headers: {
      "access_token": access_token
    },
  });
  return data;
});

const initialState = { user: {}, isLogin: false };

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginStatus(state) {
      if (localStorage.access_token) {
        state.isLogin = true;
      } else {
        state.isLogin = false;
      }
    },
    logoutUser(state) {
      state.user = {};
      state.isLogin = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.loadingUser = true;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.user = action.payload;
      });
  },
});

export const { loginStatus, logoutUser } = userSlice.actions;

export default userSlice.reducer;
