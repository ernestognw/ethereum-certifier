import React from "react";
import { DrizzleContext } from "drizzle-react";

function withDrizzle(Component) {
  return function WrapperComponent(props) {
    return (
      <DrizzleContext.Consumer>
        {state => <Component {...props} context={state} />}
      </DrizzleContext.Consumer>
    );
  };
}

export default withDrizzle;
