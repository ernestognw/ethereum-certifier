import React, { Component } from 'react';
import Input from 'components/common/input';
import { Card, CardFooter, CardBody, CardHeader } from 'components/common/card';
import withDrizzle from 'components/providers/withDrizzle';
import Button from 'components/common/button/index';
import RoundAccountCircle from 'react-md-icon/dist/RoundAccountCircle';
import RoundInsertPhoto from 'react-md-icon/dist/RoundInsertPhoto';
import RoundNotes from 'react-md-icon/dist/RoundNotes';
import RoundLink from 'react-md-icon/dist/RoundLink';
import BaselineTimeline from 'react-md-icon/dist/BaselineTimeline';
import { toast } from 'react-toastify';

const courses = [
	'Blockchain 101',
	'Blockchain For Business',
	'Hyperledger For Business',
	'Blockchain For Lawyers',
	'Ethereum Básico',
	'Ethereum Intermedio',
	'Hyperledger Básico',
	'Hyperledger Intermedio',
	'RSK'
];

class AddCertificate extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			generation: '',
			imageUrl: '',
			course: '',
			addressTo: ''
		};
	}

	createCertificate = async event => {
		event.preventDefault();
		const { context: { drizzle } } = this.props;

		try {
			const { name, generation, imageUrl, course, addressTo } = this.state;

			const result = await drizzle.contracts.Certifications.methods.createCertificate.cacheSend(
				name,
				Number(generation),
				imageUrl,
				course,
				addressTo,
				{ gas: 400000, gasPrice: '8000000000' }
			);

			this.setState({
				name: '',
				generation: '',
				imageUrl: '',
				course: '',
				addressTo: ''
			});

			toast.info('Transaction pending');
		} catch (err) {
			toast.error('An error has occurred');
		}
	};

	handleInput = event => {
		const { target } = event;
		this.setState({
			[target.name]: target.value
		});
	};

	render() {
		const { name, generation, imageUrl, course, addressTo } = this.state;
		return (
			<Card>
				<form onSubmit={this.createCertificate}>
					<CardHeader title="Certificate data" />
					<CardBody>
						<Input
							leftIcon={<RoundAccountCircle />}
							onChange={this.handleInput}
							value={name}
							name="name"
							type="text"
							placeholder="Full name"
							required
						/>
						<Input
							leftIcon={<BaselineTimeline />}
							onChange={this.handleInput}
							value={generation}
							name="generation"
							type="number"
							min="1"
							max="5"
							placeholder="Generation"
							required
						/>
						<Input
							leftIcon={<RoundInsertPhoto />}
							onChange={this.handleInput}
							value={imageUrl}
							name="imageUrl"
							type="text"
							placeholder="Image URL"
							required
						/>
						<Input
							leftIcon={<RoundNotes />}
							onChange={this.handleInput}
							value={course}
							name="course"
							type="text"
							placeholder="Course"
							required
							select={true}
							placeholderColor={course.length === 0}
						>
							<option value="">Select a course</option>
							{courses.map((course, index) => (
								<option value={course} key={index}>
									{course}
								</option>
							))}
						</Input>
						<Input
							leftIcon={<RoundLink />}
							onChange={this.handleInput}
							value={addressTo}
							name="addressTo"
							type="text"
							placeholder="Address del egresado"
							required
						/>
					</CardBody>
					<CardFooter align="right">
						<Button size="large">Create certificate</Button>
					</CardFooter>
				</form>
			</Card>
		);
	}
}

export default withDrizzle(AddCertificate);
