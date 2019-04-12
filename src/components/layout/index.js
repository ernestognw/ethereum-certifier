import React from "react";
import { LayoutContent, Container } from "./elements";
import Navbar from "./components/navbar";
import Header from "components/templates/header";

const Layout = ({ children, title, subtitle, changeSlide, slide }) => (
  <LayoutContent>
    <Navbar changeSlide={changeSlide} slide={slide} />
    <Header primary={title} secondary={subtitle} />
    <Container>{children}</Container>
  </LayoutContent>
);

export default Layout;
