import React from "react";
import ReactDOM from "react-dom";
// Step 1. Import react-router functions
import { BrowserRouter } from "react-router-dom";
import App from "./components/App";

//Step 2. Changed to have router coordinate what is displayed
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);