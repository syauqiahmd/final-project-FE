import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instance } from "../../bin/axios";
// import axios from "axios";

// const initialState = { user: {} };

export const postLogin = createAsyncThunk(
  "comments/fetchSucces",
  async ({ form }) => {
    try {
      const { data } = await instance.get(`/Users?email=${form.email}&password=${form.password}`);
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
