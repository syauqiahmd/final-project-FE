import { createBrowserRouter} from "react-router-dom";
import Layout from "../components/Layout";
import Login from "../views/Login"
import Home from "../views/Home";
import Register from "../views/RegisterForm";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />
  }
]);

export default router;
