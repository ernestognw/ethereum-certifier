import styled from "styled-components";
import { Card as CommonCard } from "components/common/card";

const Image = styled.div`
  background-image: url(${props => props.url});
  width: 300px;
  background-position: center;
  background-size: cover;
`;

const Card = styled(CommonCard)`
  display: flex;
  flex-direction: row;
`;

const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export { Image, Card, DataContainer };
