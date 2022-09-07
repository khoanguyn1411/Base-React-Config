import { GlobalTypes } from "@/global";
import { Outlet } from "react-router-dom";

export const AuthRequiredGuard: GlobalTypes.FC = () => {
  const isAuthorized = true;
  if (isAuthorized) {
    return <Outlet />;
  }
  return <div>No permission.</div>;
};
