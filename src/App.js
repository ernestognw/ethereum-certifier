import React, { Component, Fragment } from 'react';
import { ToastContainer, Slide, toast } from 'react-toastify';
import Layout from 'components/layout/index';
import AddCertificate from './views/add-certificate';
import BrowseCertificate from './views/browse-certificate';
import Loader from 'components/common/loader/index';
import withDrizzle from 'components/providers/withDrizzle';
import 'react-toastify/dist/ReactToastify.min.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			slide: 1,
			title: 'Create a certificate',
			subtitle: 'Here you can fill the form to create new certifications',
			transactionHash: '',
			transactions: [],
			transactionsConfirmed: []
		};
	}

	componentDidUpdate = (prevProps, prevState) => {
		const { context: { drizzleState } } = this.props;
		const { transactions, transactionsConfirmed } = this.state;

		if (
			prevProps.context.drizzleState &&
			drizzleState.transactions !== prevProps.context.drizzleState.transactions
		) {
			const transactions = Object.keys(drizzleState.transactions).map(key => {
				return {
					...drizzleState.transactions[key],
					key
				};
			});
			this.setState({ transactions });
		}

		if (prevState.transactions !== transactions) {
			transactions.forEach(transaction => {
				const finded = transactionsConfirmed.find(transac => transac.key === transaction.key);
				if (!finded && transaction.status === 'success') {
					toast.success(`Transaction ${transaction.key} success`);
					this.setState({ transactionsConfirmed: [...transactionsConfirmed, transaction] });
				} else if (transaction.status === 'error') {
					toast.error(`Transaction ${transaction.key} went wrong`);
				}
			});
		}
	};

	changeSlide = slide => {
		this.setState({ slide });

		let title;
		let subtitle;

		if (slide === 1) {
			title = 'Create a certificate';
			subtitle = 'Fill the form to create new certifications';
		} else if (slide === 2) {
			title = 'Browse certificates';
			subtitle = 'Explore Blockchain Academy Professionals';
		}

		this.setState({ title, subtitle });
	};

	render() {
		const { context: { initialized } } = this.props;
		const { slide, title, subtitle } = this.state;

		return (
			<Layout title={title} subtitle={subtitle} slide={slide} changeSlide={this.changeSlide}>
				{!initialized ? (
					<Loader />
				) : (
					<Fragment>
						{slide === 1 && <AddCertificate />}
						{slide === 2 && <BrowseCertificate />}
					</Fragment>
				)}
				<ToastContainer
					position="top-right"
					autoClose={3000}
					hideProgressBar
					newestOnTop={false}
					rtl={false}
					pauseOnVisibilityChange={false}
					draggable
					pauseOnHover={false}
					transition={Slide}
				/>
			</Layout>
		);
	}
}

export default withDrizzle(App);
