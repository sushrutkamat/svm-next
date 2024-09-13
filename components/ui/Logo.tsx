import Image from "next/image";
import React, { FunctionComponent, PropsWithChildren } from "react";
import logo from "../../../public/svm.jpeg";

const Logo: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return <div className="max-w-full min-h-12 m-10">{children}</div>;
};

export default Logo;
