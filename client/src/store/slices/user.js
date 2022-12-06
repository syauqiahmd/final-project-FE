import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instance } from "../../bin/axios";

export const fetchUser = createAsyncThunk("users/fetchSucces", async () => {
  const { data } = await instance({
    method: "get",
    url: "/public/profile",
    headers: {
      access_token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjcwMjU3MjA5fQ.uhYPefjJbpajCv60ufnF6tpOcqbKSpFIZblK2OmHoRM",
    },
  });
  return data;
});

const initialState = { user: {}, isLogin: false };

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginStatus(state, action) {
      if (localStorage.access_token) {
        state.isLogin = true;
      } else {
        state.isLogin = false;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUser.fulfilled, (state, actions) => {
      state.user = actions.payload;
      state.isLogin = true;
    });
  },
});

export const { loginStatus } = userSlice.actions;

export default userSlice.reducer;
