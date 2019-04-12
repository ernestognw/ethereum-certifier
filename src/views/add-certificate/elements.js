import styled from 'styled-components';

const Container = styled.div`
	width: 100%;
	padding: 90px;
	display: flex;
	flex-direction: column;

	${props => props.theme.media.desktop`
    padding: 90px 40px;
    h4 {
      text-align: center;
    }
  `};
`;

export default Container;
