import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instance } from "../../bin/axios";

export const fetchProjects = createAsyncThunk(
  "projects/fetchSucces",
  async () => {
    const { data } = await instance.get("/public/projects");
    return data;
  }
);

export const fetchProjectById = createAsyncThunk(
  "projectById/fetchSucces",
  async ({ id }) => {
    const { data } = await instance.get(`/public/projects/${id}`);
    return data;
  }
);

const projectSlice = createSlice({
  name: "project",
  initialState: {
    loadingProjects: true,
    loadingProject: true,
    projects: [],
    project: {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProjects.pending, (state) => {
        state.loadingProjects = true;
      })
      .addCase(fetchProjects.fulfilled, (state, action) => {
        state.loadingProjects = false;
        state.projects = action.payload;
      });

    builder
      .addCase(fetchProjectById.pending, (state) => {
        state.loadingProject = true;
      })
      .addCase(fetchProjectById.fulfilled, (state, action) => {
        state.loadingProject = false;
        state.project = action.payload;
      });
  },
});

export default projectSlice.reducer;

// cara menggunakan di bagian component atau view

// const { projects } = useSelector(state => state.projects)
// const dispatch = useDispatch()

// useEffect (()=> { dispatch(fecthProject) },[])
