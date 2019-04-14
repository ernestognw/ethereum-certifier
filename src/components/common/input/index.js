import React, { Component } from 'react';
import { Container, PseudoInput, Label, Message, LeftIconContainer } from './elements';

class Input extends Component {
	state = {
		active: false
	};

	toggleActive = () => {
		const { active } = this.state;
		this.setState({ active: !active });
	};

	render() {
		const { ...props } = this.props;
		const { active } = this.state;
		return (
			<Container
				marginT={props.marginT}
				marginB={props.marginB}
				onFocus={this.toggleActive}
				onBlur={this.toggleActive}
			>
				{props.label && <Label font="light">{props.label}</Label>}
				{props.leftIcon && (
					<LeftIconContainer message={props.message} active={active}>
						{props.leftIcon}
					</LeftIconContainer>
				)}
				<PseudoInput
					id={props.id}
					type={props.type}
					required={props.required}
					value={props.value}
					onChange={props.onChange}
					success={props.success}
					warning={props.warning}
					error={props.error}
					name={props.name}
					leftIcon={props.leftIcon}
					placeholder={props.placeholder}
				/>
				{props.message && (
					<Message success={props.success} warning={props.warning} error={props.error}>
						{props.message}
					</Message>
				)}
			</Container>
		);
	}
}

export default Input;
