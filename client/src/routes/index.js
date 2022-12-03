import { createBrowserRouter } from "react-router-dom";
import Layout from '../components/Layout';
import Home from '../views/Home'
import Projects from '../views/Projects'
import ProjectDetail from '../views/ProjectDetail'

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
        element: <Projects />,
      },
      {
        path: '/project/:id',
        element: <ProjectDetail />
      }
    ]
  },
]);

export default router;
