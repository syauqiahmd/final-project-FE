import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../bin/axios";

export const fetchReports = createAsyncThunk(
  "report/fetchSuccess",
  async () => {
    const { data } = await instance.get("/admin/report", {
      headers: {
        access_token: localStorage.getItem("access_token")
      }
    });
    return data;
  }
);

const reportSlice = createSlice({
  name: "report",
  initialState: {
    reports: [],
  },
  extraReducers: (builder) => {
    builder.addCase(fetchReports.fulfilled, (state, action) => {
      state.reports = action.payload;
    });
  },
});

export default reportSlice.reducer