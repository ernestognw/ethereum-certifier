import React, { Component, Fragment } from "react";
import Header from "components/templates/header";
import { DrizzleContext } from "drizzle-react";
import Form from "./components/form";

class AddCertificate extends Component {
  render() {
    return (
      <DrizzleContext.Consumer>
        {drizzleContext => {
          const { drizzle, drizzleState } = drizzleContext;
          return (
            <Fragment>
              <Header
                primary="Add certificate"
                secondary="Here you can fill the form to create new certifications"
              />
              <Form drizzle={drizzle} drizzleState={drizzleState} />
            </Fragment>
          );
        }}
      </DrizzleContext.Consumer>
    );
  }
}

export default AddCertificate;
