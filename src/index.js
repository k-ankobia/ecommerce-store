import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Browser } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Browser>
        <App />
      </Browser>
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
