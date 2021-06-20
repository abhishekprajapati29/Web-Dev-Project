import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import Main from "./views/main";
import "bootstrap/dist/css/bootstrap.min.css";
import './assets/scss/main.scss';

ReactDOM.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
  document.getElementById("root")
);
