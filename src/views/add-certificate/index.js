import React, { Component, Fragment } from "react";
import Header from "components/templates/header";
import Form from "./components/form";

class AddCertificate extends Component {
  render() {
    return (
      <Fragment>
        <Header
          primary="Add certificate"
          secondary="Here you can fill the form to create new certifications"
        />
        <Form />
      </Fragment>
    );
  }
}

export default AddCertificate;
