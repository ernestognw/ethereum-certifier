import React from 'react';
import { CardBody as Body, CardHeader } from 'components/common/card';
import Typography from 'components/common/typography';
import { Image, Card, DataContainer } from './elements';

const Certificate = ({ certificate }) => (
	<Card marginT="50">
		<Image url={certificate.imageUrl} />
		<DataContainer>
			<CardHeader title={certificate.fullName} />
			<Body>
				<Typography variant="heading">Certificate ID</Typography>
				<Typography marginB="20">#{certificate.certificateId}</Typography>
				<Typography variant="heading">Course</Typography>
				<Typography marginB="20">{certificate.course}</Typography>
				<Typography variant="heading">Generation</Typography>
				<Typography marginB="20">{certificate.generation}</Typography>
				<Typography variant="heading">Address</Typography>
				<Typography marginB="20">{certificate.certificateOwner}</Typography>
			</Body>
		</DataContainer>
	</Card>
);

export default Certificate;
