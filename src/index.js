import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import App from 'App';
import drizzleOptions from './drizzle-options';
import { DrizzleProvider } from 'drizzle-react';

ReactDOM.render(
	<ThemeProvider theme={theme}>
		<DrizzleProvider options={drizzleOptions}>
			<App />
		</DrizzleProvider>
	</ThemeProvider>,
	document.getElementById('root')
);
