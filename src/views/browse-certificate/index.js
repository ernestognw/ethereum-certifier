import React, { Component, Fragment } from 'react';
import { toast } from 'react-toastify';
import Loader from 'components/common/loader/index';
import withDrizzle from 'components/providers/withDrizzle';
import Certificate from './components/certificate/index';
import SearchForm from './components/search-form';

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
			toast.error('An error has occurred');
		}
	};

	componentDidUpdate = (_, prevState) => {
		const { tab } = this.state;
		if (prevState.tab !== tab) {
			this.setState({
				searchInput: '',
				searchResults: []
			});
		}
	};

	handleInput = event => {
		const { target } = event;
		let { value, id } = target;

		if (id === 'course') {
			this.setState({ searchInput: value });
		} else {
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
		}
	};

	searchCertificate = async event => {
		event.preventDefault();
		const { searchInput, certificatesLength, results, tab } = this.state;
		const { context: { drizzle } } = this.props;

		if (searchInput && tab === 2) {
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
		} else if (searchInput && tab === 3) {
			const searchResults = results.filter(result => result.course === searchInput);
			if (searchResults.length > 0) {
				this.setState({ searchResults });
			} else {
				toast.error('We did not find any match');
			}
		}
	};

	changeTab = tab => this.setState({ tab });

	render() {
		const { searchInput, results, tab, searchResults, loading } = this.state;
		return (
			<Fragment>
				<SearchForm
					searchCertificate={this.searchCertificate}
					handleInput={this.handleInput}
					changeTab={this.changeTab}
					resultsLength={results.length}
					searchResultsLength={searchResults.length}
					searchInput={searchInput}
					tab={tab}
				/>
				{loading ? (
					<Loader />
				) : (
					<Fragment>
						{tab === 1 &&
							results.map((certificate, id) => <Certificate certificate={certificate} key={id} />)}
						{searchResults.length > 0 &&
							searchResults.map((certificate, id) => <Certificate certificate={certificate} key={id} />)}
					</Fragment>
				)}
			</Fragment>
		);
	}
}

export default withDrizzle(BrowseCertificates);
