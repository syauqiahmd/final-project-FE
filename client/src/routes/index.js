import { createBrowserRouter } from "react-router-dom";
import Layout from '../components/Layout';
import Home from '../views/Home'
import Projects from '../views/Projects'
import ProjectDetail from '../views/ProjectDetail'
import Login from '../views/Login'

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
  {
    path: '/login',
    element: <Login />
  }
]);

export default router;