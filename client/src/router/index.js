import { createBrowserRouter} from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../views/Home";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

export default router;
