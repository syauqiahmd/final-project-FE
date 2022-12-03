import { createBrowserRouter } from "react-router-dom";
import Layout from '../components/Layout';
import Home from '../views/Home'
import Project from '../views/Project'

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/projects",
        element: <Project />,
      },
    ]
  },
]);

export default router;
