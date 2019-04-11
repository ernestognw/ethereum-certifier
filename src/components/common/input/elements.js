import styled from "styled-components";

const Container = styled.div`
  position: relative;
  margin-top: 10px;
  width: 100%;
  ${props =>
    props.marginT &&
    `
    margin-top: ${props.marginT}px;
  `}

  ${props =>
    props.marginB &&
    `
    margin-top: ${props.marginB}px;
  `}
`;

const Label = styled.div`
  font-size: 0.875rem;
  color: ${props => props.theme.color.default};
  text-align: left;
  margin-bottom: 5px;
`;

const Message = styled.div`
  font-size: 0.75rem;
  font-family: "AmericaLight";
  color: ${props => props.theme.color.default};
  text-align: left;
  margin-bottom: 10px;
  margin-top: 10px;

  ${props =>
    props.success &&
    `
      color: ${props.theme.color.success} !important;
    `}
    
  ${props =>
    props.warning &&
    `
      color: ${props.theme.color.warning} !important;
    `}

  ${props =>
    props.error &&
    `
      color: ${props.theme.color.danger} !important;
    `}
`;

const PseudoInput = styled.input`
  background-color: #fff;
  font-family: "AmericaLight";
  font-size: 0.875rem;
  border-radius: 5px;
  width: 100% !important;
  border: 1px solid ${props => props.theme.grey.lightGrey};
  padding: .625rem .75rem;
  height: 100%;
  transition: all .2s cubic-bezier(.68,-.55,.265,1.55);

  &:focus {
    outline: none;
    border: 1px solid ${props => props.theme.color.secondary};
    ${props =>
      props.success &&
      `
        border: 1px solid ${props.theme.color.success} !important;
      `}
      
    ${props =>
      props.warning &&
      `
        border: 1px solid ${props.theme.color.warning} !important;
      `}

    ${props =>
      props.error &&
      `
        border: 1px solid ${props.theme.color.danger} !important;
      `}
  }


  ${props => props.theme.media.phone`
    width: auto;
  `}
`;

export { Container, PseudoInput, Label, Message };
