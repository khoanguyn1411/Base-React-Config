import { GlobalTypes } from "@/global";
import { Outlet } from "react-router-dom";

export const MainLayout: GlobalTypes.FC = () => {
  return (
    <div>
      <h1>This is main layout.</h1>
      <Outlet />
    </div>
  );
};
