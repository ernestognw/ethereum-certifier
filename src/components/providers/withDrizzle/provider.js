import React, { Component } from "react";
import drizzleOptions from "./drizzle-options";
import { DrizzleContext } from "drizzle-react";
import { Drizzle } from "drizzle";

const drizzle = new Drizzle(drizzleOptions);

class DrizzleProvider extends Component {
  render() {
    const { children } = this.props;
    return (
      <DrizzleContext.Provider drizzle={drizzle}>
        {children}
      </DrizzleContext.Provider>
    );
  }
}

export default DrizzleProvider;
