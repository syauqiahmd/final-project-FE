import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const baseUrl = "http://localhost:4000";

const initialState = {
  projects: [],
  project: {},
};

const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    fecthProject: async (state, { payload }) => {
      try {
        //fetching data axios
        const { data } = axios.get(`${baseUrl}/Projects`);
        // state.projects = data from axios
        state.projects = data;
      } catch (err) {
        console.log(err);
      }
    },
    fetchProjectById: (state, { payload }) => {
      try {
        //fetching data axios
        const { data } = axios.get(`${baseUrl}/Projects/${payload.id}`);
        // state.projects = data from axios
        state.project = data;
      } catch (err) {
        console.log(err);
      }
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
