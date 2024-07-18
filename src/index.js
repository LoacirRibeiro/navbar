import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Home from "./pages/home/Home";
import Sobre from "./pages/sobre/Sobre";
import NavBar from "./conponents/NavBar";
import Contato from "./pages/contato/Contato";
import ErrorPage from "./routes/Errorpage";
import './App.css'

const AppLayout = () => {
  return(
    <>
      <NavBar />
      <Outlet />
    </>
  )
}

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "sobre",
        element: <Sobre />
      },
      {
        path: 'contato',
        element: <Contato />
      }
    ]
  }
  
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);