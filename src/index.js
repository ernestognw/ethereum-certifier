import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import App from "App";
import drizzleOptions from "./drizzle-options";
import { DrizzleProvider } from "drizzle-react";

ReactDOM.render(
  <DrizzleProvider options={drizzleOptions}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </DrizzleProvider>,
  document.getElementById("root")
);
