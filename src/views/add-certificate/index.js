import React, { Component, Fragment } from "react";
import Header from "components/templates/header";
import Form from "./components/form";

class AddCertificate extends Component {
  render() {
    return (
      <Fragment>
        <Header
          primary="Añade un certificado para egresados"
          secondary="Utiliza este formulario para crear un certificado en la Blockchain"
        />
        <Form />
      </Fragment>
    );
  }
}

export default AddCertificate;
