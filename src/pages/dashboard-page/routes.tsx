import { MainLayout } from "@/components/layouts";
import { lazy } from "react";
import { RouteObject } from "react-router-dom";

const DashboardPage = lazy(() =>
  import("./dashboard-page").then((module) => ({
    default: module.DashboardPage,
  }))
);

export const dashboardRoutes: RouteObject[] = [
  {
    path: "/",
    element: <MainLayout />,
    children: [{ index: true, element: <DashboardPage /> }],
  },
];
