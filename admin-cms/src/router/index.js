import { createBrowserRouter, redirect } from "react-router-dom";
import Layout from "../components/Layout";
import Login from "../views/Login";
import Home from "../views/Home";
import Register from "../views/RegisterForm";
import Report from "../views/Report";

const router = createBrowserRouter([
  {
    element: <Layout />,
    // loader: () => {
    //   if (!localStorage.getItem("access_token")) {
    //     return redirect("/login");
    //   }
    // },
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/report",
        element: <Report />,
      },
    ]
  },
  {
    path: "/login",
    element: <Login />,
    // loader: () => {
    //   if (localStorage.getItem("access_token")) {
    //     return redirect("/");
    //   }
    // },
  },
]);

export default router;
