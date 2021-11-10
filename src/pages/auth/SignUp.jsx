// NPM packages
import { useState } from "react";
import { useHistory } from "react-router-dom";

// Project files
import InputFields from "components/InputFields";
// import Footer from "components/Footer";
import Checkbox from "components/Checkbox";
import fields from "data/auth/fields-signup.json";
import { createAccount } from "scripts/authentification";
import { createDocumentWithId } from "scripts/fireStore";
import { useUser } from "state/UserProvider";

export default function SignUp() {
  // Global state
  const { setUser, setIsLogged } = useUser();
  const history = useHistory();

  // Local state
  const [form, setForm] = useState({
    firstName: "",
    surname: "",
    email: "",
    password: "",
  });
  // const [errors, setErrors] = useState({});

  const [errorMessage, setErrorMessage] = useState("");

  // Methods
  async function onSubmit(event) {
    event.preventDefault();
    setErrorMessage("");
    const account = await createAccount(form.email, form.password);

    account.isCreated ? onSuccess(account.payload) : onFailure(account.payload);
  }

  async function onSuccess(uid) {
    const newUser = { name: `${form.firstName} ${form.surname}`};

    await createDocumentWithId("users", uid, newUser);
    setUser(newUser);
    setIsLogged(true);
    history.push("/");
  }

  function onFailure(message) {
    setErrorMessage(message);
  }

  return (
    <main className="page signup-page">
      <div className="center-container">
        <form className="signup-form" onSubmit={onSubmit}>
          <div className="signup-form-container">
            <h1>Create a password to start your membership</h1>
            <p className="context-row">
              Just a few more steps and you're finished!
            </p>
            <p className="context-row">We hate paperwork, too.</p>
            <div className="form-fields">
              <InputFields
                fields={fields}
                state={[form, setForm]}
                errors={errorMessage}
              />
            </div>
            <div className="signup-form-help">
              <Checkbox label="Please do not email me Netflix special offers." />
            </div>
            <button className="button signup-button">Register</button>
          </div>
        </form>
      </div>
    </main>
  );
}
