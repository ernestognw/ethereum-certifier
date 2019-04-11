import React, { Component } from "react";
import Layout from "components/layout/index";
import AddCertificate from "./views/add-certificate";
import { drizzleConnect } from "drizzle-react";
import Loader from "components/common/loader/index";

class App extends Component {
  render() {
    const { initialized } = this.props;
    return <Layout>{!initialized ? <Loader /> : <AddCertificate />}</Layout>;
  }
}

const mapStateToProps = state => ({
  initialized: state.drizzleStatus.initialized
});

export default drizzleConnect(App, mapStateToProps);
