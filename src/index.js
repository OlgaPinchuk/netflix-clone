// NPM packages
import React from "react";
import ReactDOM from "react-dom";

// Project files
import App from "./App";
import { UserProvider } from "./state/UserProvider";
import { AuthProvider } from "state/AuthProvider";
import { TitleProvider } from "state/TitleProvider";
import "./styles/style.css";

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <UserProvider>
        <TitleProvider>
        <App />
        </TitleProvider>
      </UserProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
