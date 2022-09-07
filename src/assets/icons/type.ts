import { ReactNode } from "react";

export const COLOR_MAPS_ICON = {
  default: "text-black",
  success: "text-white",
  transparent: "text-transparent",
} as const;
export const SIZE_MAPS_ICON = {
  small: "w-4 h-4",
  default: "w-5 h-5",
  large: "w-8 h-8",
} as const;

export interface IconWrapperProps extends React.SVGProps<SVGSVGElement> {
  children: ReactNode;
  size?: keyof typeof SIZE_MAPS_ICON;
  customColor?: keyof typeof COLOR_MAPS_ICON;
}

export type IconProps = Omit<IconWrapperProps, "children">;
