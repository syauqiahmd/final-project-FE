import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = { user: {} };

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: async (state, {payload}) => {
      try {
        // sent pay load to axios

        // const { data } = await axios.post(
        //   "http://localhost:4000/users/login",
        //   payload
        // );

        // handle success axios
      } catch (err) {
        console.log(err);
        //handle error if login failed
      }
    },
    register: async (state, action) => {
      try {
        // sent pay load to axios

        // const { data } = await axios.post(
        //   "http://localhost:4000/users/login",
        //   action.payload
        // );
        
        // handle success axios
      } catch (err) {
        console.log(err);
        //handle error if login failed
      }
    },
  },
});

export const { login, register } = userSlice.actions;
export default userSlice.reducer;
