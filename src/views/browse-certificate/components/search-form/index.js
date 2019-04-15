import React from 'react';
import { Card } from 'components/common/card';
import Input from 'components/common/input';
import RoundSearch from 'react-md-icon/dist/RoundSearch';
import { CardBody, Button, OptionsContainer, Option, Results } from './elements';

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

const SearchForm = ({
	searchCertificate,
	handleInput,
	searchInput,
	tab,
	changeTab,
	resultsLength,
	searchResultsLength
}) => (
	<Card>
		{(tab === 2 || tab === 3) && (
				<form onSubmit={searchCertificate}>
					<CardBody>
						{tab === 2 && (
							<Input
								leftIcon={<RoundSearch />}
								onChange={handleInput}
								value={searchInput}
								type="text"
								marginT="0"
								id="id"
								placeholder={`Search certificates by ID`}
							/>
						)}
						{tab === 3 && (
							<Input
								marginT="0"
								leftIcon={<RoundSearch />}
								onChange={handleInput}
								value={searchInput}
								name="course"
								type="text"
								id="course"
								placeholder="Course"
								required
								select={true}
							>
								<option value="">Select a course</option>
								{courses.map((course, index) => (
									<option value={course} key={index}>
										{course}
									</option>
								))}
							</Input>
						)}
						<Button size="large">Search</Button>
					</CardBody>
				</form>
			)}
		<OptionsContainer>
			<Option active={tab === 1} onClick={() => changeTab(1)}>
				All
			</Option>
			<Option active={tab === 2} onClick={() => changeTab(2)}>
				By ID
			</Option>
			<Option active={tab === 3} onClick={() => changeTab(3)}>
				By course
			</Option>
		</OptionsContainer>
		<Results>{tab === 1 ? resultsLength : searchResultsLength} results</Results>
	</Card>
);

export default SearchForm;
