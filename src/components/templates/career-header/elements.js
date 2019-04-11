import styled from "styled-components";
import HeaderElements from "static/general/header-elements.svg";
import CommonTypography from "./node_modules/components/common/typography";

const Container = styled.div`
  height: 55vh;
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

  ${props => props.theme.media.phone`
    height: 100vh;
  `}
`;

const TextContainer = styled.div`
  width: 100%;
  padding-left: 120px;
  padding-right: 40%;
  height: 140px;
  display: flex;
  align-items: center;

  &::before {
    width: 5px;
    height: 140px;
    left: 100px;
    content: "";
    position: absolute;
    background-image: ${props => props.theme.color.gradient};

    ${props => props.theme.media.tablet`
      left: 20px;
    `}
  }

  ${props => props.theme.media.tablet`
    padding-left: 40px;
  `}

  ${props => props.theme.media.desktop`
    padding-right: 40px;
  `}

  ${props => props.theme.media.phone`
    flex-direction: column;
    height: 100%;
    justify-content: center;
  `}
`;

const Typography = styled(CommonTypography)`
  ${props => props.theme.media.phone`
    font-size: 1.25rem !important;
  `}
`;

const BadgeContainer = styled.div`
  height: 150px;
  margin-right: 20px;
  display: flex;
  align-items: center;

  ${props => props.theme.media.phone`
    width: 100%;
    height: 200px;
    margin-bottom: 20px;
  `}
`;

const Badge = styled.img`
  width: 100%;
  height: auto;
  margin-right: 20px;

  ${props => props.theme.media.phone`
    width: 200px;
    height: 200px;
  `}
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export {
  Container,
  TextContainer,
  Typography,
  BadgeContainer,
  Badge,
  InfoContainer
};
