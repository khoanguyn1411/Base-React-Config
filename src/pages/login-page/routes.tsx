import { lazy } from "react";
import { RouteObject } from "react-router-dom";

const LoginPage = lazy(() =>
  import("./login-page").then((module) => ({
    default: module.LoginPage,
  }))
);

export const loginRoutes: RouteObject[] = [
  {
    path: "/login",
    element: <LoginPage />,
  },
];
