import React, { Component, Fragment } from "react";
import Layout from "components/layout/index";
import AddCertificate from "./views/add-certificate";
import Loader from "components/common/loader/index";
import withDrizzle from "components/providers/withDrizzle";

class App extends Component {
  state = {
    slide: 1,
    title: "Create a certificate",
    subtitle: "Here you can fill the form to create new certifications"
  };

  changeSlide = slide => {
    this.setState({ slide });

    let title;
    let subtitle;

    if (slide === 1) {
      title = "Create a certificate";
      subtitle = "Here you can fill the form to create new certifications";
    } else if (slide === 2) {
      title = "Search a certificate";
      subtitle = "Here you can find a certificate by the address";
    }

    this.setState({ title, subtitle });
  };

  render() {
    const {
      context: { initialized }
    } = this.props;
    const { slide, title, subtitle } = this.state;

    return (
      <Layout
        title={title}
        subtitle={subtitle}
        slide={slide}
        changeSlide={this.changeSlide}
      >
        {slide === 1 && (
          <Fragment>{!initialized ? <Loader /> : <AddCertificate />}</Fragment>
        )}
      </Layout>
    );
  }
}

export default withDrizzle(App);
