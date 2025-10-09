import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import ErrorPage from "../pages/errorPage/ErrorPage";
import Home from "../pages/Home/Home";
import AllApplications from "../pages/allApplications/allApplications";
import Installation from "../pages/Installation/Installation";
import AppDetails from "../pages/AppDetails/AppDetails";
import AppNotFound from "../pages/errorPage/AppNotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        loader: () => fetch("/appsData.json"),
        Component: Home,
      },
      {
        path: "all-applications",
        loader: () => fetch("/appsData.json"),
        Component: AllApplications,
      },
      {
        path: "all-applications/:id",
        Component: AppDetails,
      },
      {
        path: "installation",
        Component: Installation,
      },
      {
        path: "*",
        Component: AppNotFound,
      },
    ],
  },
]);
