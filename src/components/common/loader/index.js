import React from "react";
import { LoaderContainer, Container } from "./elements";

const Loader = ({ size }) => (
  <Container>
    <LoaderContainer className="lds-ring" size={size}>
      <div />
      <div />
      <div />
      <div />
    </LoaderContainer>
  </Container>
);

export default Loader;
