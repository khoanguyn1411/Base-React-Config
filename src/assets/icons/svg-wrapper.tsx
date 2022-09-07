import classNames from "classnames";
import React from "react";

import { COLOR_MAPS_ICON, IconWrapperProps, SIZE_MAPS_ICON } from "./type";

export const SvgWrapper: React.FC<IconWrapperProps> = ({
  className,
  size = "default",
  customColor = "default",
  children,
  ...props
}) => {
  return (
    <svg
      className={classNames(
        "flex items-center justify-center",
        SIZE_MAPS_ICON[size],
        COLOR_MAPS_ICON[customColor],
        className
      )}
      {...props}
    >
      {children}
    </svg>
  );
};
