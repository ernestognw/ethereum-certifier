import React from "react";
import { LayoutContent } from "./elements";
import Navbar from "./components/navbar";

const Layout = ({ children }) => (
  <LayoutContent>
    <Navbar />
    {children}
  </LayoutContent>
);

export default Layout;
