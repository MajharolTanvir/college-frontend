import React, { ReactNode } from "react";
import Navbar from "./Navbar";

const RootLayouts = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default RootLayouts;
