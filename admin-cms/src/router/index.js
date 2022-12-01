import { createBrowserRouter} from "react-router-dom";
import Layout from "../components/Layout";
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
]);

export default router;
