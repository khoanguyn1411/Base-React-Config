import { GlobalTypes } from "@/global";
import { AuthRequiredGuard } from "@/guard";
import { NotFoundPage } from "@/pages";
import { dashboardRoutes } from "@/pages/dashboard-page/routes";
import { loginRoutes } from "@/pages/login-page/routes";
import { FC } from "react";
import { BrowserRouter, RouteObject, useRoutes } from "react-router-dom";
import { CustomRoute } from "./custom-routes";

const routes: RouteObject[] = [
  {
    element: <AuthRequiredGuard />,
    children: [...loginRoutes],
  },
  { children: [...dashboardRoutes] },
  { path: "*", element: <NotFoundPage /> },
];

const RootComponent: FC = () => useRoutes(routes);
export const RootRoutes: GlobalTypes.FC = () => {
  return (
    <BrowserRouter>
      <CustomRoute>
        <RootComponent />
      </CustomRoute>
    </BrowserRouter>
  );
};
