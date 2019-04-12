import React from "react";
import { LayoutContent } from "./elements";
import Navbar from "./components/navbar";

const Layout = ({ children }) => (
  <LayoutContent>
    <Navbar hideBg />
    {children}
  </LayoutContent>
);

export default Layout;
