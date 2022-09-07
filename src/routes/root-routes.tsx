import { GlobalTypes } from "@/global";
import { Fragment } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { MainLayout } from "../components/layouts";
import { routesConfigs } from "./config";
import { CustomRoute } from "./custom-routes";

export const RootRoutes: GlobalTypes.FC = () => {
  return (
    <BrowserRouter>
      <CustomRoute>
        {routesConfigs.privateRoutes.map((route, index) => {
          const Component = route.component;
          const Layout: any =
            route.layout !== null ? route.layout || MainLayout : Fragment;

          return (
            <Route
              path={route.path}
              key={`privateRoute_${index}`}
              element={
                <Layout>
                  <Component />
                </Layout>
              }
            />
          );
        })}

        {routesConfigs.publicRoutes.map((route, index) => {
          const Component = route.component;
          const Layout: any =
            route.layout !== null ? route.layout || MainLayout : Fragment;
          return (
            <Route
              path={route.path}
              key={`publicRoute_${index}`}
              element={
                <Layout>
                  <Component />
                </Layout>
              }
            />
          );
        })}
      </CustomRoute>
    </BrowserRouter>
  );
};
