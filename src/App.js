import React, { Component } from "react";
import Layout from "components/layout/index";
import AddCertificate from "./views/add-certificate";
import { DrizzleContext } from "drizzle-react";
import Loader from "components/common/loader/index";

class App extends Component {
  render() {
    return (
      <DrizzleContext.Consumer>
        {drizzleContext => {
          const { initialized } = drizzleContext;
          if (!initialized) {
            return <Loader />;
          }

          return (
            <Layout>
              <AddCertificate />;
            </Layout>
          );
        }}
      </DrizzleContext.Consumer>
    );
  }
}

export default App;
