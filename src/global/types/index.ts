import React, { ReactNode } from "react";

export type FCPropsWithChildren<T> = React.FC<T & { children: ReactNode }>;
export type FCChildren = React.FC<{ children: ReactNode }>;
export type FC<P = {}> = React.FC<P>;
