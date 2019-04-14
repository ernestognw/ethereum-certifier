import styled from 'styled-components';

const Container = styled.div`
	position: relative;
	margin-top: 10px;
	width: 100%;
	${props =>
		props.marginT &&
		`
    margin-top: ${props.marginT}px;
  `} ${props =>
			props.marginB &&
			`
    margin-top: ${props.marginB}px;
  `};
`;

const Label = styled.div`
	font-size: 0.875rem;
	color: ${props => props.theme.color.default};
	text-align: left;
	margin-bottom: 5px;
`;

const Message = styled.div`
	font-size: 0.75rem;
	font-family: 'AmericaLight';
	color: ${props => props.theme.color.default};
	text-align: left;
	margin-bottom: 10px;
	margin-top: 10px;

	${props =>
		props.success &&
		`
      color: ${props.theme.color.success} !important;
    `} ${props =>
			props.warning &&
			`
      color: ${props.theme.color.warning} !important;
    `} ${props =>
			props.error &&
			`
      color: ${props.theme.color.danger} !important;
    `};
`;

const PseudoInput = styled.input`
	background-color: #fff;
	font-family: 'AmericaLight';
	font-size: 0.875rem;
	border-radius: 5px;
	width: 100% !important;
	border: 1px solid ${props => props.theme.grey.lightGrey};
	padding: 0.625rem 0.75rem;
	height: 100%;
	transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);

	${props =>
		props.leftIcon &&
		`
    padding-left: 2.5rem;
    `};

	&:focus {
		outline: none;
		border: 1px solid ${props => props.theme.color.secondary};
		${props =>
			props.success &&
			`
        border: 1px solid ${props.theme.color.success} !important;
      `} ${props =>
				props.warning &&
				`
        border: 1px solid ${props.theme.color.warning} !important;
      `} ${props =>
				props.error &&
				`
        border: 1px solid ${props.theme.color.danger} !important;
      `};
	}

	${props => props.theme.media.phone`
    width: auto;
  `};
`;

const LeftIconContainer = styled.div`
	position: absolute;
	display: block;
	left: 0;
	padding: 0.625rem 0.75rem;
	color: ${props => props.theme.grey.lightDark};
	font-size: 20px;

	${props =>
		props.message &&
		`
    margin-top: 0px;
  `};

	${props =>
		props.active &&
		`
	svg {
		color: ${props.theme.color.secondary};
	}
`};
`;

export { Container, PseudoInput, Label, Message, LeftIconContainer };
