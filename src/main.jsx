import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";

import Root from "./pages/Root";
import Index from "./pages/Index";
import PhoneApp from "./pages/PhoneApp";
import DesktopApp from "./pages/DesktopApp";
import WebApp from "./pages/WebApp";
import Design from "./pages/Design";

import NotFoundPage from "./pages/NotFoundPage";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Blog from "./pages/Blog";
import OneBlog from "./pages/OneBlog";
import OneProduct from "./pages/OneProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFoundPage />,
    children: [{ index: true, element: <Index /> }],
  },
  {
    path: "/phoneapp",
    element: <Root />,
    errorElement: <NotFoundPage />,
    children: [{ index: true, element: <PhoneApp /> }],
  },
  {
    path: "/deskapp",
    element: <Root />,
    errorElement: <NotFoundPage />,
    children: [{ index: true, element: <DesktopApp /> }],
  },
  {
    path: "/webapp",
    element: <Root />,
    errorElement: <NotFoundPage />,
    children: [{ index: true, element: <WebApp /> }],
  },
  {
    path: "/design",
    element: <Root />,
    errorElement: <NotFoundPage />,
    children: [{ index: true, element: <Design /> }],
  },
  {
    path: "/blog",
    element: <Root />,
    errorElement: <NotFoundPage />,
    children: [{ index: true, element: <Blog /> }],
  },
  {
    path: "/oneblog",
    element: <Root />,
    errorElement: <NotFoundPage />,
    children: [{ index: true, element: <OneBlog /> }],
  },
  {
    path: "/oneproduct",
    element: <Root />,
    errorElement: <NotFoundPage />,
    children: [{ index: true, element: <OneProduct /> }],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
