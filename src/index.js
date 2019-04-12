import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import App from "App";
import drizzleOptions from "./drizzle-options";
import { DrizzleContext } from "drizzle-react";
import { Drizzle, generateStore } from "drizzle";

const drizzleStore = generateStore(drizzleOptions);
const drizzle = new Drizzle(drizzleOptions, drizzleStore);

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <DrizzleContext.Provider drizzle={drizzle}>
      <App />
    </DrizzleContext.Provider>
  </ThemeProvider>,
  document.getElementById("root")
);
