// NPM packages
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Project files
import Login from "pages/auth/Login";
import SignUp from "pages/auth/SignUp";
import PasswordRecovery from "pages/auth/PasswordRecovery";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path="/recovery" component={PasswordRecovery} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
