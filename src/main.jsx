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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFoundPage />,
    children: [{ index: true, element: <Index /> }],
  },
  {
    path: "/phoneApp",
    element: <Root />,
    errorElement: <NotFoundPage />,
    children: [{ index: true, element: <PhoneApp /> }],
  },
  {
    path: "/DesktopApp",
    element: <Root />,
    errorElement: <NotFoundPage />,
    children: [{ index: true, element: <DesktopApp /> }],
  },
  {
    path: "/WebApp",
    element: <Root />,
    errorElement: <NotFoundPage />,
    children: [{ index: true, element: <WebApp /> }],
  },
  {
    path: "/Design",
    element: <Root />,
    errorElement: <NotFoundPage />,
    children: [{ index: true, element: <Design /> }],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
