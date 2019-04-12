import React, { Component } from 'react';
import Typography from 'components/common/typography';
import Container from './elements';
import { drizzleConnect } from 'drizzle-react';
import { LoadingContainer, ContractForm, ContractData, AccountData } from 'drizzle-react-components';

class AddCertificate extends Component {
	componentDidMount = () => {
		console.log(this.props);
	};
	render() {
		return (
			<LoadingContainer>
				<Container>
					<Typography variant="headingTitle">Account Data</Typography>
					<AccountData accountIndex={0} units="ether" precision={3} />
					<Typography marginT="30" variant="headingTitle">
						Certification 0
					</Typography>
					<ContractData contract="Certifications" method="certificates" methodArgs={[0]} />
					<Typography marginT="30" variant="headingTitle">
						Create Certificate
					</Typography>
					<ContractForm
						contract="Certifications"
						method="createCertificate"
						labels={['name', 'image url', 'course', 'address']}
					/>
				</Container>
			</LoadingContainer>
		);
	}
}

const mapStateToProps = state => ({ state });

export default drizzleConnect(AddCertificate, mapStateToProps);
