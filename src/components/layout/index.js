import React from 'react';
import { LayoutContent } from './elements';
import Navbar from './components/navbar';
import Header from 'components/templates/header';

const Layout = ({ children, title, subtitle, changeSlide, slide }) => (
	<LayoutContent>
		<Navbar changeSlide={changeSlide} slide={slide} />
		<Header primary={title} secondary={subtitle} />
		{children}
	</LayoutContent>
);

export default Layout;
