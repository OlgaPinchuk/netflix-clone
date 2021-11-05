// NPM packages
import React from "react";
import ReactDOM from "react-dom";

// Project files
import App from "./App";
import { UserProvider } from "./state/UserProvider";
import "./styles/style.css";

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
