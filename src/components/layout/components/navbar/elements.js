import styled from 'styled-components';

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
	transition: all 0.3s ease;
	background-position-y: 0px;

	${props =>
		props.hideBg &&
		`
    background-position-y: -66px;
    background-color: ${props.theme.color.default};
  `} ${props =>
			props.hideNavbar &&
			`
    opacity: 0;
    margin-top: -66px;
  `} ${props => props.theme.media.desktop`
    padding: 0 40px;
  `};
`;

const LogoContainer = styled.div`
	width: 120px;
	height: 37px;
`;

const Logo = styled.img`height: 100%;`;

const Option = styled.div`
	padding: 20px 0;
	text-align: center;
	width: 200px;
	cursor: pointer;
	font-size: ${props => props.theme.heading6};
	font-family: ${props => props.theme.font.medium};
	color: ${props => props.theme.grey.light};
	border-bottom: 3.5px solid ${props => (props.active ? props.theme.color.info : 'transparent')};

	&:hover {
		border-bottom: 3.5px solid ${props => props.theme.color.info};
	}
`;

const OptionsContainer = styled.div`
	display: flex;

	${Option}:last-child {
		margin-right: 0;
	}
`;

export { Container, LogoContainer, Logo, OptionsContainer, Option };
