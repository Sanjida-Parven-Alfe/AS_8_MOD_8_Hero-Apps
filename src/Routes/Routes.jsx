import React, { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Loader from "../components/Loader/Loader"; // তোমার Loader
import Root from "../pages/Root/Root";

// Lazy load pages
const Home = lazy(() => import("../pages/Home/Home"));
const AllApplications = lazy(() => import("../pages/allApplications/allApplications"));
const AppDetails = lazy(() => import("../pages/AppDetails/AppDetails"));
const Installation = lazy(() => import("../pages/Installation/Installation"));
const AppNotFound = lazy(() => import("../pages/errorPage/AppNotFound"));
const ErrorPage = lazy(() => import("../pages/errorPage/ErrorPage"));

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: (
      <Suspense fallback={<Loader />}>
        <ErrorPage />
      </Suspense>
    ),
    children: [
      {
        index: true,
        loader: () => fetch("/appsData.json"),
        Component: () => (
          <Suspense fallback={<Loader />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "all-applications",
        loader: () => fetch("/appsData.json"),
        Component: () => (
          <Suspense fallback={<Loader />}>
            <AllApplications />
          </Suspense>
        ),
      },
      {
        path: "all-applications/:id",
        Component: () => (
          <Suspense fallback={<Loader />}>
            <AppDetails />
          </Suspense>
        ),
      },
      {
        path: "installation",
        Component: () => (
          <Suspense fallback={<Loader />}>
            <Installation />
          </Suspense>
        ),
      },
      {
        path: "app-not-found",
        Component: () => (
          <Suspense fallback={<Loader />}>
            <AppNotFound />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "*",
    element: (
      <Suspense fallback={<Loader />}>
        <ErrorPage />
      </Suspense>
    ),
  },
]);
