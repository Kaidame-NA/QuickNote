import { CssBaseline } from "@material-ui/core";
import ReactDOM from "react-dom";
import App from "./App";
import {BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Router>
    <CssBaseline />
    <App />
  </Router>, 
  document.getElementById("root")
);
