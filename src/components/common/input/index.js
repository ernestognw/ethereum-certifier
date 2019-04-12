import React, { Component } from "react";
import {
  Container,
  PseudoInput,
  Label,
  Message,
  LeftIconContainer
} from "./elements";

class Input extends Component {
  render() {
    const { ...props } = this.props;
    return (
      <Container marginT={props.marginT} marginB={props.marginB}>
        {props.label && <Label font="light">{props.label}</Label>}
        {props.leftIcon && (
          <LeftIconContainer message={props.message}>
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
          <Message
            success={props.success}
            warning={props.warning}
            error={props.error}
          >
            {props.message}
          </Message>
        )}
      </Container>
    );
  }
}

export default Input;
