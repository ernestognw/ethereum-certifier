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
				Create Certificate
			</Option>
			<Option onClick={() => changeSlide(2)} active={slide === 2}>
				Browser Certificates
			</Option>
		</OptionsContainer>
	</Container>
);

export default Navbar;
