import React, { Component, Fragment } from "react";
import { toast } from "react-toastify";
import { Card, CardBody as Body, CardHeader } from "components/common/card";
import Typography from "components/common/typography";
import Input from "components/common/input";
import withDrizzle from "components/providers/withDrizzle";
import RoundSearch from "react-md-icon/dist/RoundSearch";
import { CardBody, Button, OptionsContainer, Option } from "./elements";

class BrowseCertificates extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: "",
      results: [],
      certificatesLength: "",
      tab: 1
    };
  }

  handleInput = event => {
    const { target } = event;
    const { certificatesLength } = this.state;
    if (target.value === 0) {
      target.value = 1;
    }
    if (target.value <= certificatesLength && target.value >= 1) {
      this.setState({
        searchInput: target.value
      });
    }
  };

  componentDidMount = async () => {
    const {
      context: { drizzle }
    } = this.props;

    try {
      const length = await drizzle.contracts.Certifications.methods
        .getCertificatesLength()
        .call();

      const getCertifications = [];

      for (let i = 0; i < length; i++) {
        getCertifications.push(
          drizzle.contracts.Certifications.methods.certificates(i).call()
        );
      }

      const results = await Promise.all(getCertifications);

      this.setState({
        certificatesLength: length,
        results
      });
    } catch (err) {
      console.log(err);
      toast.error("An error has occurred");
    }
  };

  searchCertificate = async event => {
    event.preventDefault();
    const { searchInput } = this.state;
    const {
      context: { drizzle }
    } = this.props;

    try {
      const data = await drizzle.contracts.Certifications.methods
        .certificates(searchInput - 1)
        .call();

      this.setState({
        results: [data]
      });
    } catch (err) {
      toast.error("An error has occurred");
    }
  };

  render() {
    const { searchInput, results, certificatesLength, tab } = this.state;
    return (
      <Fragment>
        <Card>
          <form onSubmit={this.searchCertificate}>
            <CardBody>
              <Input
                leftIcon={<RoundSearch />}
                onChange={this.handleInput}
                value={searchInput}
                type="number"
                marginT="0"
                placeholder={`Search certificates by ID (${certificatesLength})`}
              />
              <Button>Search</Button>
            </CardBody>
          </form>
          <OptionsContainer>
            <Option active={tab === 1}>All</Option>
          </OptionsContainer>
        </Card>
        {results.length > 0 &&
          results.map((certificate, id) => (
            <Card marginT="50" key={id}>
              <CardHeader title={certificate.fullName} />
              <Body>
                <Typography variant="heading">Photo</Typography>
                <Typography marginB="20">{certificate.imageUrl}</Typography>
                <Typography variant="heading">Course</Typography>
                <Typography marginB="20">{certificate.course}</Typography>
                <Typography variant="heading">Address</Typography>
                <Typography marginB="20">
                  {certificate.certificateOwner}
                </Typography>
              </Body>
            </Card>
          ))}
      </Fragment>
    );
  }
}

export default withDrizzle(BrowseCertificates);
