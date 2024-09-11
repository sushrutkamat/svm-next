import Image from "next/image";
import React, { FunctionComponent, PropsWithChildren } from "react";
import logo from "../../../public/svm.jpeg";

const Navbar: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return (
    <div className="bg-white max-w-full min-h-48 m-6 rounded-md drop-shadow-xl">
      {children}
      <div className="w-full">TODO: Nav buttons</div>
    </div>
  );
};

export default Navbar;
