import React, {  ReactNode } from "react";

function MainLayout(
  {children}: Readonly<{
    children: ReactNode;
  }>
) {
  return <div className="mx-0 my-0 py-0 px-0  flex flex-row w-full ">{children}</div>;
}

export default MainLayout;
