import React, { Component, Fragment } from "react";
import { ToastContainer, Slide } from "react-toastify";
import Layout from "components/layout/index";
import AddCertificate from "./views/add-certificate";
import SearchCertificate from "./views/search-certificate";
import Loader from "components/common/loader/index";
import withDrizzle from "components/providers/withDrizzle";
import "react-toastify/dist/ReactToastify.min.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slide: 2,
      title: "Create a certificate",
      subtitle: "Here you can fill the form to create new certifications"
    };
  }

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
        {!initialized ? (
          <Loader />
        ) : (
          <Fragment>
            {slide === 1 && <AddCertificate />}
            {slide === 2 && <SearchCertificate />}
          </Fragment>
        )}
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar
          newestOnTop={false}
          rtl={false}
          pauseOnVisibilityChange={false}
          draggable
          pauseOnHover={false}
          transition={Slide}
        />
      </Layout>
    );
  }
}

export default withDrizzle(App);
