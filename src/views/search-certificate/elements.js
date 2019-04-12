import styled from "styled-components";
import { CardBody as CommonCardBody } from "components/common/card";
import CommonButton from "components/common/button";

const CardBody = styled(CommonCardBody)`
  flex-direction: row;
  display: flex;
  align-items: center;
`;

const Button = styled(CommonButton)`
  margin-left: 5px;
  height: 39px;
  width: 120px;
`;

export { CardBody, Button };
