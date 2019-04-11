import React, { Component } from "react";
import { LayoutContent } from "./elements";
import Navbar from "./components/navbar";

class Layout extends Component {
  componentDidMount = () => {
    document.documentElement.scrollTop = 0;
  };
  render() {
    const { children } = this.props;
    return (
      <LayoutContent>
        <Navbar />
        {children}
      </LayoutContent>
    );
  }
}

export default Layout;
