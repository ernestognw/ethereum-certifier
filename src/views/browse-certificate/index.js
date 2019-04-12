import React, { Component, Fragment } from 'react';
import { toast } from 'react-toastify';
import { Card } from 'components/common/card';
import Loader from 'components/common/loader/index';
import Input from 'components/common/input';
import withDrizzle from 'components/providers/withDrizzle';
import RoundSearch from 'react-md-icon/dist/RoundSearch';
import { CardBody, Button, OptionsContainer, Option } from './elements';
import Certificate from './components/certificate/index';

class BrowseCertificates extends Component {
	constructor(props) {
		super(props);
		this.state = {
			searchInput: '',
			results: [],
			certificatesLength: '',
			tab: 1,
			searchResults: [],
			loading: true
		};
	}

	handleInput = event => {
		const { target } = event;
		const { value } = target;
		if (value.match(/[0-9]/g) && !value.includes(' ')) {
			this.setState({
				searchInput: value
			});
		} else if (!value) {
			this.setState({
				searchInput: '',
				searchResults: []
			});
		}
	};

	componentDidMount = async () => {
		const { context: { drizzle } } = this.props;

		try {
			const length = await drizzle.contracts.Certifications.methods.getCertificatesLength().call();

			const getCertifications = [];

			for (let i = 0; i < length; i++) {
				getCertifications.push(drizzle.contracts.Certifications.methods.certificates(i).call());
			}

			const results = await Promise.all(getCertifications);

			this.setState({
				certificatesLength: length,
				results,
				loading: false
			});
		} catch (err) {
			console.log(err);
			toast.error('An error has occurred');
		}
	};

	searchCertificate = async event => {
		event.preventDefault();
		const { searchInput, certificatesLength } = this.state;
		const { context: { drizzle } } = this.props;

		if (searchInput) {
			if (Number(searchInput) <= certificatesLength && Number(searchInput) > 0) {
				try {
					this.setState({ loading: true });
					const data = await drizzle.contracts.Certifications.methods.certificates(searchInput - 1).call();

					this.setState({
						searchResults: [data],
						loading: false
					});
				} catch (err) {
					toast.error('An error has occurred');
				}
			} else {
				toast.warning('That certificate ID does not exist');
			}
		}
	};

	render() {
		const { searchInput, results, certificatesLength, tab, searchResults, loading } = this.state;
		return (
			<Fragment>
				<Card>
					<form onSubmit={this.searchCertificate}>
						<CardBody>
							<Input
								leftIcon={<RoundSearch />}
								onChange={this.handleInput}
								value={searchInput}
								type="text"
								marginT="0"
								placeholder={`Search certificates by ID (${certificatesLength})`}
							/>
							<Button size="large">Search</Button>
						</CardBody>
					</form>
					<OptionsContainer>
						<Option active={tab === 1}>All</Option>
					</OptionsContainer>
				</Card>
				{loading ? (
					<Loader />
				) : (
					<Fragment>
						{searchResults.length > 0
							? searchResults.map((certificate, id) => <Certificate certificate={certificate} key={id} />)
							: results.map((certificate, id) => <Certificate certificate={certificate} key={id} />)}
					</Fragment>
				)}
			</Fragment>
		);
	}
}

export default withDrizzle(BrowseCertificates);
