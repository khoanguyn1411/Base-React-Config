import classNames from "classnames";
import { FC, useState } from "react";

export const DashboardPage: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="text-red-600">
      <div
        className={classNames(
          "w-10 h-10 bg-red-600 duration-500 transition-all",
          { "ml-40": isOpen }
        )}
        onClick={() => setIsOpen(!isOpen)}
      ></div>
    </div>
  );
};
