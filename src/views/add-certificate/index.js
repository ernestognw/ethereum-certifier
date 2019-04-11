import React, { Component, Fragment } from "react";
import Typography from "components/common/typography";
import Header from "components/templates/header";
import Container from "./elements";
import { drizzleConnect } from "drizzle-react";
import {
  LoadingContainer,
  ContractForm,
  ContractData,
  AccountData
} from "drizzle-react-components";

class AddCertificate extends Component {
  componentDidMount = () => {
    console.log(this.props);
  };
  render() {
    return (
      <LoadingContainer>
        <Fragment>
          <Header
            primary="Add certificate"
            secondary="Here you can fill the form to create new certifications"
          />
          <Container>
            <Typography variant="headingTitle">Account Data</Typography>
            <AccountData accountIndex={0} units="ether" precision={3} />
            <Typography marginT="30" variant="headingTitle">
              Certification 0
            </Typography>
            <ContractData
              contract="Certifications"
              method="certificates"
              methodArgs={[0]}
            />
            <Typography marginT="30" variant="headingTitle">
              Create Certificate
            </Typography>
            <ContractForm
              contract="Certifications"
              method="createCertificate"
              labels={["name", "image url", "course", "address"]}
            />
          </Container>
        </Fragment>
      </LoadingContainer>
    );
  }
}

const mapStateToProps = state => ({ state });

export default drizzleConnect(AddCertificate, mapStateToProps);
