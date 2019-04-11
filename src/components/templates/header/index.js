import React from "react";
import { Container, TextContainer, Typography } from "./elements";

const Header = ({ primary, secondary }) => (
  <Container>
    <TextContainer>
      <Typography variant="heading2" font="mediumItalic" greyColor="light">
        {primary}
      </Typography>
      <Typography
        variant="heading2"
        marginT="20"
        greyColor="lightGrey"
        fontSize="1.25rem"
      >
        {secondary}
      </Typography>
    </TextContainer>
  </Container>
);

export default Header;
