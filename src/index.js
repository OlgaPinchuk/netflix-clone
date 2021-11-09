// NPM packages
import React from "react";
import ReactDOM from "react-dom";

// Project files
import App from "./App";
import { UserProvider } from "./state/UserProvider";
import { AuthProvider } from "state/AuthProvider";
import { ContentProvider } from "state/ContentProvider";
import "./styles/style.css";

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <UserProvider>
        <ContentProvider>
        <App />
        </ContentProvider>
      </UserProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
