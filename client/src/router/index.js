import { createBrowserRouter} from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../views/Home";
import Login from "../views/Login";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

export default router;
