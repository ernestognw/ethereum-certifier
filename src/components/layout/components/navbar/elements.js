import styled from "styled-components";

const Container = styled.nav`
  height: 66px;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 120px;
  z-index: 200;
  transition: all .3s ease;
  background-position-y: 0px;

  ${props =>
    props.hideBg  &&
    `
    background-position-y: -66px;
    background-color: ${props.theme.color.default};
  `}

  ${props => 
    props.hideNavbar && 
    `
    opacity: 0;
    margin-top: -66px;
  `}

  ${props => props.theme.media.desktop`
    padding: 0 40px;
  `}
`;

const LogoContainer = styled.div`
  width: 120px;
  height: 37px;
`;

const Logo = styled.img`
  height: 100%;
`;

export { Container, LogoContainer, Logo };
