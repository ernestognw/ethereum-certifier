import React, { Component } from "react";
import { newContextComponents } from "drizzle-react-components";
import Typography from "components/common/typography";
import Container from "./elements";

const { AccountData, ContractData, ContractForm } = newContextComponents;

class Form extends Component {
  state = { dataKey: null };

  componentDidMount = async () => {
    try {
      const { drizzle } = this.props;
      const contract = drizzle.contracts.Certifications;

      // get and save the key for the variable we are interested in
      console.log(contract.methods);
      const dataKey = await contract.methods["certificates(uint256)"](0).call();
      console.log(dataKey);
      this.setState({ dataKey });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    const { drizzle, drizzleState } = this.props;
    return (
      <Container>
        <Typography variant="headingTitle">Account Data</Typography>
        <AccountData
          drizzle={drizzle}
          drizzleState={drizzleState}
          accountIndex={0}
          units="ether"
          precision={3}
        />
        <Typography marginT="30" variant="headingTitle">
          Certification 0
        </Typography>
        <ContractData
          contract="Certifications"
          method="certificates"
          methodArgs={[0]}
          drizzle={drizzle}
          drizzleState={drizzleState}
        />
        <Typography marginT="30" variant="headingTitle">
          Create Certificate
        </Typography>
        <ContractForm
          contract="Certifications"
          method="createCertificate"
          labels={["name", "image url", "course", "address"]}
          drizzle={drizzle}
          drizzleState={drizzleState}
        />
      </Container>
    );
  }
}

export default Form;
