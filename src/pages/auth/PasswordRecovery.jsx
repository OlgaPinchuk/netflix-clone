// NPM packages
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";

// Project files
import InputFields from "components/InputFields";
import Footer from "components/Footer";
import Checkbox from "components/Checkbox";
import fields from "data/fields-password-recovery.json";

export default function PasswordRecovery() {
  // Local state
  const [form, setForm] = useState({
    email: "",
  });
  const [errors, setErrors] = useState({});

  return (
    <main className="page password-recovery-page">
      <div className="center-container">
        <form className="recovery-form">
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
                errors={errors}
              />
            </div>
            <button className="button recover-button">Email Me</button>
          </div>
        </form>
      </div>
    </main>
  );
}
