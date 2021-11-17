// NPM packages
import { Route } from "react-router-dom";

// Project files
import Login from "pages/auth/Login";
import SignUp from "pages/auth/SignUp";
import PasswordRecovery from "pages/auth/PasswordRecovery";

export default function Unlogged() {
  return (
    <>
      <Route component={Login} exact path="/" />
      <Route component={Login} path="/login" />
      <Route component={SignUp} path="/signup" />
      <Route component={PasswordRecovery} path="/recovery" />
    </>
  );
}
