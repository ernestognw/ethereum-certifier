import styled from "styled-components";

const LayoutContent = styled.div`
  padding-top: 66px;
`;

const Container = styled.div`
  width: 100%;
  padding: 30px 90px;
  display: flex;
  flex-direction: column;

  ${props => props.theme.media.desktop`
    padding: 90px 40px;
    h4 {
      text-align: center;
    }
  `}
`;

export { LayoutContent, Container };
