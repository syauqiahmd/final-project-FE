import { createBrowserRouter, redirect } from "react-router-dom";
import Layout from '../components/Layout';
import Home from '../views/Home'
import Projects from '../views/Projects'
import ProjectDetail from '../views/ProjectDetail'
import Login from '../views/Login'
import PageNotFound from "../views/PageNotFound";
import NewProject from "../views/NewProject";

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
      },
      
      {
        path: '/new-project',
        loader: () => {
          if(!localStorage.getItem('access_token')){
            return redirect('/login')
          }
          return null
        },
        element: <NewProject />
      }
    ]
  },
  {
    path: '/login',
    loader: () => {
      if(localStorage.getItem('access_token')){
        return redirect('/')
      }
      return null
    },
    element: <Login />
  },
	{
    path: '*',
    element: <PageNotFound />
  },
]);

export default router;
