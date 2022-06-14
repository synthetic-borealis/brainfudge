import React, { FunctionComponent } from "react";
import { Outlet } from "react-router-dom";

const Layout: FunctionComponent = () => {
  return (
    <div>
      <h1>Nav thingy</h1>
      <Outlet />
    </div>
  );
};

export default Layout;
