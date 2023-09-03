import React, { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const RootLayouts = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen">{children}</div>
      <Footer />
    </div>
  );
};

export default RootLayouts;
