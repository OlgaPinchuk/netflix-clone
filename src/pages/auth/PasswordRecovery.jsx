// NPM packages
import { useState } from "react";
import { useHistory } from "react-router-dom";

// Project files
import InputFields from "components/InputFields";
import fields from "data/auth/fields-password-recovery.json";
import { recoverPassword } from "scripts/authentification";

export default function PasswordRecovery() {
  // Global state
  const history = useHistory();

  // Local state
  const [form, setForm] = useState({ email: "" });
  const [message, setMessage] = useState("");

  // Methods
  function onChange(key, value) {
    const field = { [key]: value };
    setForm({ ...form, ...field });
  }

  async function onSubmit(e) {
    e.preventDefault();
    setMessage("");
    const account = await recoverPassword(form.email);
    account.isReset ? onSuccess(account.payload) : onFailure(account.payload);
  }

  async function onSuccess(message) {
    setMessage(message);
    alert(message);
    history.push("/");
  }

  function onFailure(errorMessage) {
    setMessage(errorMessage);
  }

  return (
    <main className="page password-recovery-page">
      <div className="center-container">
        <form className="recovery-form" onSubmit={onSubmit}>
          <div className="recovery-form-container">
            <h1>Forgot Email/Password</h1>
            <p className="context-row">
              Would you like to reset your password?
            </p>
            <p className="context-row">
              We will send you an email with instructions on how to reset your
              password.
            </p>
            <div className="form-fields">
              <InputFields
                fields={fields}
                state={[form, setForm]}
                onChange={onChange}
              />
            </div>
            <small className="input-error">{message}</small>
            <button className="button recover-button">Email Me</button>
          </div>
        </form>
      </div>
    </main>
  );
}
