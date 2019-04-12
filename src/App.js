import React, { Component, Fragment } from "react";
import Layout from "components/layout/index";
import AddCertificate from "./views/add-certificate";
import Loader from "components/common/loader/index";
import withDrizzle from "components/providers/withDrizzle";

class App extends Component {
  render() {
    const {
      context: { initialized }
    } = this.props;
    return (
      <Fragment>
        <Layout>{!initialized ? <Loader /> : <AddCertificate />}</Layout>
      </Fragment>
    );
  }
}

export default withDrizzle(App);
