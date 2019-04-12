import React, { Component, Fragment } from "react";
import { toast } from "react-toastify";
import { Card } from "components/common/card";
import Typography from "components/common/typography";
import Input from "components/common/input";
import withDrizzle from "components/providers/withDrizzle";
import RoundSearch from "react-md-icon/dist/RoundSearch";
import { CardBody, Button } from "./elements";

class SearchCertificate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: "",
      results: [],
      certificatesLength: ""
    };
  }

  handleInput = event => {
    const { target } = event;
    const { certificatesLength } = this.state;
    if (target.value < certificatesLength && target.value >= 0) {
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
      const data = await drizzle.contracts.Certifications.methods
        .getCertificatesLength()
        .call();

      this.setState({
        certificatesLength: data
      });
    } catch (err) {
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
        .certificates(searchInput)
        .call();

      this.setState({
        results: [data]
      });
    } catch (err) {
      toast.error("An error has occurred");
    }
  };

  render() {
    const { searchInput, results, certificatesLength } = this.state;
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
        </Card>
        {results.length > 0 &&
          results.map((certificate, id) => (
            <Fragment key={id}>
              <Typography>{certificate.fullName}</Typography>
              <Typography>{certificate.imageUrl}</Typography>
              <Typography>{certificate.course}</Typography>
              <Typography>{certificate.certificateOwner}</Typography>
            </Fragment>
          ))}
      </Fragment>
    );
  }
}

export default withDrizzle(SearchCertificate);
