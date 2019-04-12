import React, { Component } from "react";
import Input from "components/common/input";
import { Card, CardFooter, CardBody, CardHeader } from "components/common/card";
import withDrizzle from "components/providers/withDrizzle";
import Button from "components/common/button/index";
import RoundAccountCircle from "react-md-icon/dist/RoundAccountCircle";
import RoundInsertPhoto from "react-md-icon/dist/RoundInsertPhoto";
import RoundNotes from "react-md-icon/dist/RoundNotes";
import RoundLink from "react-md-icon/dist/RoundLink";
import { toast } from "react-toastify";

class AddCertificate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      imageUrl: "",
      course: "",
      addressTo: ""
    };
  }

  createCertificate = async event => {
    event.preventDefault();
    const {
      context: { drizzle }
    } = this.props;

    try {
      const { name, imageUrl, course, addressTo } = this.state;

      await drizzle.contracts.Certifications.methods.createCertificate.cacheSend(
        name,
        imageUrl,
        course,
        addressTo,
        { gas: 400000, gasPrice: "8000000000" }
      );

      this.setState({
        name: "",
        imageUrl: "",
        course: "",
        addressTo: ""
      });

      toast.success("Certified registered correctly");
    } catch (err) {
      toast.error("An error has occurred");
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
      <Card>
        <form onSubmit={this.createCertificate}>
          <CardHeader title="Certificate data" />
          <CardBody>
            <Input
              leftIcon={<RoundAccountCircle />}
              onChange={this.handleInput}
              value={name}
              name="name"
              type="text"
              placeholder="Full name"
              required
            />
            <Input
              leftIcon={<RoundInsertPhoto />}
              onChange={this.handleInput}
              value={imageUrl}
              name="imageUrl"
              type="text"
              placeholder="Image URL"
              required
            />
            <Input
              leftIcon={<RoundNotes />}
              onChange={this.handleInput}
              value={course}
              name="course"
              type="text"
              placeholder="Course"
              required
            />
            <Input
              leftIcon={<RoundLink />}
              onChange={this.handleInput}
              value={addressTo}
              name="addressTo"
              type="text"
              placeholder="Address del egresado"
              required
            />
          </CardBody>
          <CardFooter align="right">
            <Button size="large" color="primary">
              Create certificate
            </Button>
          </CardFooter>
        </form>
      </Card>
    );
  }
}

export default withDrizzle(AddCertificate);
