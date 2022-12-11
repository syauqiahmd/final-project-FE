import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../bin/axios";

export const fetchProjects = createAsyncThunk(
  "projects/fetchSucces",
  async () => {
    const { data } = await instance.get("/admin/projects", {
      headers: {
        access_token: localStorage.getItem("access_token")
      }
    });
    return data;
  }
);

export const fetchProjectById = createAsyncThunk(
  "projectById/fetchSucces",
  async ({ id }) => {
    const { data } = await instance.get(`/admin/projects/${id}`, {
      headers: {
        access_token: localStorage.getItem("access_token")
      }
    });
    return data;
  }
);

const projectSlice = createSlice({
  name: "project",
  initialState: {
    projects: [],
    project: {},
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProjects.fulfilled, (state, action) => {
      state.projects = action.payload;
    });

    builder.addCase(fetchProjectById.fulfilled, (state, action) => {
      state.project = action.payload;
    });
  },
});

export default projectSlice.reducer;

// cara menggunakan di bagian component atau view

// const { projects } = useSelector(state => state.projects)
// const dispatch = useDispatch()

// useEffect (()=> { dispatch(fecthProject) },[])
