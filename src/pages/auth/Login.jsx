// NPM packages
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";

// Project files
import InputFields from "components/InputFields";
import Checkbox from "components/Checkbox";
import fields from "data/auth/fields-login.json";
import { useUser } from "state/UserProvider";
import { signIn } from "scripts/authentification";
import { getDocument } from "scripts/firestore";

import small from "assets/images/home-bg_small.jpg";
import medium from "assets/images/home-bg_medium.jpg";
import large from "assets/images/home-bg_large.jpg";

// Function length -1 (the component is too long)
export default function Login() {
  // Global state
  const { setUser, setIsLogged } = useUser();
  const history = useHistory();

  // Local state
  const [form, setForm] = useState({ email: "", password: "" });
  const [errorMessage, setErrorMessage] = useState("");

  // Methods
  async function onSubmit(event) {
    event.preventDefault();
    setErrorMessage("");
    const account = await signIn(form.email, form.password);

    account.isLogged ? onSuccess(account.payload) : onFailure(account.payload);
  }

  async function onSuccess(uid) {
    const document = await getDocument("users", uid);

    setUser(document);
    setIsLogged(true);
    history.push("/");
  }

  function onFailure(message) {
    setErrorMessage(message);
  }

  return (
    <main className="page login-page">
      <div className="login-wrapper">
        <div className="login-wrapper-background">
          <img
            className="bg-image"
            srcSet={`${small} 1000w, ${medium} 1500w, ${large} 1800w`}
            src={medium}
            alt="Netflix movies"
          />
        </div>
      </div>

      {/* Form */}
      {/* Nesting -1 */}
      {/* Why do we have 3 divs in a row, this is connected to the black border mentioned on the design and functionality category */}
      {/* This is why this component is 50+ lines long. Please take the time to refactor the JSX and CSS to make this one shorter */}
      <div className="login-form-wrapper">
        <div className="login-form-signup">
          <div className="login-form-main">
            <h1 className="login-page-title">Sign In</h1>
            <form className="login-form" onSubmit={onSubmit}>
              <InputFields
                fields={fields}
                state={[form, setForm]}
                errors={errorMessage}
              />
              <button className="button login-button">Sign In</button>
              <div className="login-form-help">
                <Checkbox label="Remember me" />
                <Link to="/recovery" className="help">
                  Need help?
                </Link>
              </div>
            </form>
            <div className="login-signup-now">
              New to Netflix?&nbsp;
              <Link to="/signup" className="help">
                Sign up now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
