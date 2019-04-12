import React, { Component } from 'react';
import Typography from 'components/common/typography';
import Button from 'components/common/button';
import { Container, TokenInput } from './elements';

class SearchCertificate extends Component {
	state = {
		tokenAddress: ''
	};

	handleInput = e => {
		const { target: { value: tokenAddress } } = e;
		this.setState({ tokenAddress });
	};

	getTokenData = () => {
		const { tokenAddress } = this.state;
		console.log('Getting Data');
		this.setState({ tokenAddress: '' });
	};

	render() {
		const { tokenAddress } = this.state;
		return (
			<Container>
				<Typography variant="headingTitle">Token Address</Typography>
				<TokenInput type="text" value={tokenAddress} onChange={this.handleInput} />
				<Button size="large" alignSelf="flex-end" onClick={this.getTokenData}>
					Search
				</Button>
			</Container>
		);
	}
}

export default SearchCertificate;
