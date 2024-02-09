import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/route.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <CartProvider>
    <RouterProvider router={router} />
    <Toaster />
  </CartProvider>
);
