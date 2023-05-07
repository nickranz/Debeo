import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App1";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./db.js"
import "./functions.js"
// import {addTeam} from '<./functions.js>/function.test.js';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
