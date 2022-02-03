import React from "react";
import reactDom from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import "antd/dist/antd.css";
import store from "../src/app/store";
import { Provider } from "react-redux";

reactDom.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById("root")
);
