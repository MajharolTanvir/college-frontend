import React, { ReactNode } from "react";
import Navbar from "./Navbar";

const RootLayouts = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen">{children}</div>
    </div>
  );
};

export default RootLayouts;
