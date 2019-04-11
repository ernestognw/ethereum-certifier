import React from "react";
import { Container, LogoContainer, Logo } from "./elements";
import logo from "static/brand/logo-white.svg";

const Navbar = ({ hideBg, children, hideNavbar }) => (
  <Container hideNavbar={hideNavbar} hideBg={!hideBg}>
    <LogoContainer>
      <Logo src={logo} />
    </LogoContainer>
    {children}
  </Container>
);

export default Navbar;
