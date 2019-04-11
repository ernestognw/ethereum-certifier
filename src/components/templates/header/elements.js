import styled from "styled-components";
import HeaderElements from "static/general/header-elements.svg";
import CommonTypography from "components/common/typography";

const Container = styled.div`
  min-height: 300px;
  height: 200px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: -66px;
  z-index: -100;
  background-image: url(${HeaderElements});
  background-color: ${props => props.theme.color.default};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  ${props => props.theme.media.tablet`
    flex-direction: column;
    justify-content: center;
    padding: 10%; 
    height: 35vh;
  `}
`;

const TextContainer = styled.div`
  width: 100%;
  padding-top: 66px;
  padding-left: 120px;
  height: 140px;
  display: flex;
  flex-direction: column;
  display: flex;
  flex-direction: column;
  justify-content: center;

  &::before {
    width: 5px;
    height: 140px;
    margin-left: -20px;
    content: "";
    position: absolute;
    background-image: ${props => props.theme.color.gradient};
  }

  ${props => props.theme.media.tablet`
    padding-left: 40px;
  `}

  ${props => props.theme.media.phone`
    padding-left: 20px;
  `}
`;

const Typography = styled(CommonTypography)`
  ${props => props.theme.media.phone`
    font-size: 1.75rem !important;
  `}
`;

export { Container, TextContainer, Typography };
