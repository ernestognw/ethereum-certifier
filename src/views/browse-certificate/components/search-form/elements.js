import styled from 'styled-components';
import { CardBody as CommonCardBody } from 'components/common/card';
import CommonButton from 'components/common/button';

const CardBody = styled(CommonCardBody)`
	flex-direction: row;
	display: flex;
	align-items: center;
	position: relative;
`;

const Button = styled(CommonButton)`
	margin-left: 5px;
	height: 39px;
	width: 120px;
`;

const Option = styled.div`
	padding: 10px 40px;
	text-align: center;
	cursor: pointer;
	font-size: ${props => props.theme.heading6};
	font-family: ${props => props.theme.font.medium};
	color: ${props => props.theme.color.default};
	border-bottom: 2px solid ${props => (props.active ? props.theme.color.secondary : 'transparent')};

	&:hover {
		border-bottom: 2px solid ${props => props.theme.color.secondary};
	}
`;

const OptionsContainer = styled.div`
	display: flex;

	${Option}:last-child {
		margin-right: 0;
	}
`;

const Results = styled.div`
	position: absolute;
	bottom: 0.6rem;
	right: 1.25rem;
	font-size: ${props => props.theme.heading6};
	font-family: ${props => props.theme.font.medium};
`;

export { CardBody, Button, Option, OptionsContainer, Results };
