import React from 'react';
import { Container, LogoContainer, Logo, OptionsContainer, Option } from './elements';
import logo from 'static/brand/logo-white.svg';

const Navbar = ({ hideBg, hideNavbar, changeSlide, slide }) => (
	<Container hideNavbar={hideNavbar} hideBg={!hideBg}>
		<LogoContainer>
			<Logo src={logo} />
		</LogoContainer>
		<OptionsContainer>
			<Option onClick={() => changeSlide(1)} active={slide === 1}>
				Create a Certificate
			</Option>
			<Option onClick={() => changeSlide(2)} active={slide === 2}>
				Search a Certificate
			</Option>
		</OptionsContainer>
	</Container>
);

export default Navbar;
