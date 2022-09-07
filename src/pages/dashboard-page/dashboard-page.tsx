import { FC, useState } from "react";
import { Link } from "react-router-dom";

export const DashboardPage: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="text-red-600 p-5">
      <div onClick={() => setIsOpen(!isOpen)}>This is homepage.</div>
      <Link to={"/login"}>To login page.</Link>
    </div>
  );
};
