import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  projects: [],
  project: {},
};

const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    fecthProject: (state, { payload }) => {
      //fetching data axios
      // state.projects = data from axios
    },
    fetchProjectById: (state, { payload }) => {
      //fetching data axios
      // state.project = data from axios
    },
    resetProjectById: (state) => {
      state.project = {};
    },
  },
});

export const { fecthProject, fetchProjectById, resetProjectById } =
  projectSlice.actions;
export default projectSlice.reducer;

// cara menggunakan di bagian component atau view

// const { projects } = useSelector(state => state.projects)
// const dispatch = useDispatch()

// useEffect (()=> { dispatch(fecthProject) },[])