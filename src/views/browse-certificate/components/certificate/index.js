import React from "react";
import { Card, CardBody as Body, CardHeader } from "components/common/card";
import Typography from "components/common/typography";

const Certificate = ({ certificate }) => (
  <Card marginT="50">
    <CardHeader title={certificate.fullName} />
    <Body>
      <Typography variant="heading">Photo</Typography>
      <Typography marginB="20">{certificate.imageUrl}</Typography>
      <Typography variant="heading">Course</Typography>
      <Typography marginB="20">{certificate.course}</Typography>
      <Typography variant="heading">Address</Typography>
      <Typography marginB="20">{certificate.certificateOwner}</Typography>
    </Body>
  </Card>
);

export default Certificate;
