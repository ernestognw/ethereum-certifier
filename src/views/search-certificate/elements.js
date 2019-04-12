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

const TokenInput = styled.input`
	width: 100%;
	border-radius: 6px;
	border: 1px solid ${props => props.theme.grey.lightGrey};
	margin-top: 40px;
	margin-bottom: 40px;
	height: 40px;
	padding: 5px;

	&:focus {
		outline: none;
		border: 1px solid ${props => props.theme.color.primary};
	}
`;

export { Container, TokenInput };
