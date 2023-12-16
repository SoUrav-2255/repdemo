import { StrictMode } from "react";
import ReactDOM from "react-dom";
import WebFont from "webfontloader";
import App from "./App";

WebFont.load({
  google: {
    families: [
      "Poppins",
      "Coiny:400",
      "Changa One:400",
      "Alatsi:400",
      "Archivo Black:400",
    ],
  },
});

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
