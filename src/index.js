import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import DrizzleProvider from "components/providers/withDrizzle/provider";
import theme from "./theme";
import App from "App";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <DrizzleProvider>
      <App />
    </DrizzleProvider>
  </ThemeProvider>,
  document.getElementById("root")
);
