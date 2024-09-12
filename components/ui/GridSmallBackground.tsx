import React, { FunctionComponent, PropsWithChildren } from "react";
const GridSmallBackground: FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  return (
    <div className="h-full w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-start justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-1 flex items-center justify-center dark:bg-black bg-slate-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="z-50 w-full">{children}</div>
    </div>
  );
};

export default GridSmallBackground;
