import React, { Component } from "react";
import Input from "components/common/input";
import { Card, CardFooter, CardBody, CardHeader } from "components/common/card";
import withDrizzle from "components/providers/withDrizzle";
import Button from "components/common/button/index";
import Container from "./elements";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      imageUrl: "",
      course: "",
      addressTo: ""
    };
  }

  componentDidMount = async () => {
    const {
      context: { drizzle }
    } = this.props;

    console.log(drizzle.contracts.Certifications.methods);

    const data = await drizzle.contracts.Certifications.methods
      .certificates(0)
      .call();
    console.log(data);
  };

  createCertificate = event => {
    event.preventDefault();
    const {
      context: { drizzle }
    } = this.props;
    const { name, imageUrl, course, addressTo } = this.state;

    const state = drizzle.store.getState();

    const stackId = drizzle.contracts.Certifications.methods.createCertificate.cacheSend(
      name,
      imageUrl,
      course,
      addressTo,
      { gas: 200000, gasPrice: "8000000000" }
    );

    if (state.transactionStack[stackId]) {
      const txHash = state.transactionStack[stackId];

      return state.transactions[txHash].status;
    }
  };

  handleInput = event => {
    const { target } = event;
    this.setState({
      [target.name]: target.value
    });
  };

  render() {
    const { name, imageUrl, course, addressTo } = this.state;
    return (
      <Container>
        <Card>
          <form onSubmit={this.createCertificate}>
            <CardHeader title="Create Certificate" />
            <CardBody>
              <Input
                onChange={this.handleInput}
                value={name}
                name="name"
                type="text"
                label="Nombre completo del Egresado"
                required
              />
              <Input
                onChange={this.handleInput}
                value={imageUrl}
                name="imageUrl"
                type="text"
                label="Link a su fotografía"
                required
              />
              <Input
                onChange={this.handleInput}
                value={course}
                name="course"
                type="text"
                label="Curso"
                required
              />
              <Input
                onChange={this.handleInput}
                value={addressTo}
                name="addressTo"
                type="text"
                label="Address del egresado"
                required
              />
            </CardBody>
            <CardFooter align="right">
              <Button size="large" color="primary">
                Click
              </Button>
            </CardFooter>
          </form>
        </Card>
      </Container>
    );
  }
}

export default withDrizzle(Form);
