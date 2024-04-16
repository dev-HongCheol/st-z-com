import React, { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};
const layout = ({ children }: LayoutProps) => {
  return <>{children}</>;
};

export default layout;
