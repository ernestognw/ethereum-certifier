import React from 'react';
import LoaderContainer from './elements';

const Loader = ({ size }) => (
  <LoaderContainer className="lds-ring" size={size}>
    <div />
    <div />
    <div />
    <div />
  </LoaderContainer>
);

export default Loader;
