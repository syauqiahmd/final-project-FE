import { createBrowserRouter, redirect } from "react-router-dom";
import Layout from '../components/Layout';
import Home from '../views/Home'
import Projects from '../views/Projects'
import ProjectDetail from '../views/ProjectDetail'
import Login from '../views/Login'
import PageNotFound from "../views/PageNotFound";
import NewProject from "../views/NewProject";
import EditProject from "../views/EditProject";
import FavProject from "../views/FavProject";
import Register from "../views/Register";

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
      },
      {
        path: '/favorite-project',
        loader: () => {
          if(!localStorage.getItem('access_token')){
            return redirect('/login')
          }
          return null
        },
        element: <FavProject />
      },
      {
        path: '/edit-project/:id',
        loader: () => {
          if(!localStorage.getItem('access_token')){
            return redirect('/login')
          }
          return null
        },
        element: <EditProject />
      },
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
    path: '/register',
    loader: () => {
      if(localStorage.getItem('access_token')){
        return redirect('/')
      }
      return null
    },
    element: <Register />
  },
	{
    path: '*',
    element: <PageNotFound />
  },
]);

export default router;