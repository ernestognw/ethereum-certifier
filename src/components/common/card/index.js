import React from "react";
import {
  Card,
  CardHeaderContainer,
  CardBody,
  CardFooter,
  HeaderTitle,
  HeaderSubtitle
} from "./elements";

const CardHeader = ({ title, subtitle }) => (
  <CardHeaderContainer>
    <HeaderTitle>{title}</HeaderTitle>
    <HeaderSubtitle>{subtitle}</HeaderSubtitle>
  </CardHeaderContainer>
);

export { Card, CardFooter, CardBody, CardHeader };
