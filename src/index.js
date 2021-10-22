import React from "react";
import ReactDOM from "react-dom";
import "components/Router";
import App from "components/App";
import "./sass/style.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
