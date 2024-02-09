import { createBrowserRouter } from "react-router-dom";
import Cart from "../pages/cart/Cart";
import Home from "../pages/home/Home";
import Layout from "./Layout";
import NotFoundPage from "../components/shared/NotFoundPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

export default router;
