import React from "react";
import { render } from "react-dom";
import ColorProvider from "./components/ColorProvider";
import App from "./App";

render(
  <ColorProvider>
    <App />
  </ColorProvider>,
  document.getElementById("root")
);