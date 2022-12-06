import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instance } from "../../bin/axios";
// import axios from "axios";

// const initialState = { user: {} };

export const postLogin = createAsyncThunk(
  "login/fetchSuccess",
  async ({ form }) => {
    try {
      const { data } = await instance.post(`/public/login`, form);
      return data;
    } catch (err) {
      return 'error'
    }
  }
);

export const fetchUser = createAsyncThunk(
  "user/fetchSuccess",
  async ({ access_token }) => {
    // console.log(access_token);
    try {
      const { data } = await instance.get(`/public/profile`, {
        headers: {
          access_token: access_token
        }
      });
      // console.log(data);
      return data;
    } catch (err) {
      return 'error'
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    loadingUser: true,
    user: {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(postLogin.pending, (state) => {
        state.loadingUser = true;
      })
      .addCase(postLogin.fulfilled, (state, action) => {
        state.user = action.payload;
      });
    builder
      .addCase(fetchUser.pending, (state) => {
        state.loadingUser = true;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.user = action.payload;
      });
  },
  // reducers: {
  //   login: async (state, {payload}) => {
  //     try {
  //       // sent pay load to axios

  //       // const { data } = await axios.post(
  //       //   "http://localhost:4000/users/login",
  //       //   payload
  //       // );

  //       // handle success axios
  //     } catch (err) {
  //       console.log(err);
  //       //handle error if login failed
  //     }
  //   },
  //   register: async (state, action) => {
  //     try {
  //       // sent pay load to axios

  //       // const { data } = await axios.post(
  //       //   "http://localhost:4000/users/login",
  //       //   action.payload
  //       // );
        
  //       // handle success axios
  //     } catch (err) {
  //       console.log(err);
  //       //handle error if login failed
  //     }
  //   },
  // },
});

export const { login, register } = userSlice.actions;
export default userSlice.reducer;
