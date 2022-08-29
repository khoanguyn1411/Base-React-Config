import { FC } from "react";
import { DashboardPage } from "@/pages";

interface IRoutes {
  path: string;
  component: FC;
  pageTitle: string;
  layout?: React.FC;
  pageKey: string;
}

const privateRoutes: readonly IRoutes[] = [
  {
    path: "/",
    component: DashboardPage,
    pageTitle: "Dashboard",
    pageKey: "dashboard",
  },
];

const publicRoutes: readonly IRoutes[] = [];

export const routesConfigs = {
  privateRoutes,
  publicRoutes,
};
