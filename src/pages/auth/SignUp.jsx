// NPM packages
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";

// Project files
import InputFields from "components/InputFields";
import Footer from "components/Footer";
import Checkbox from "components/Checkbox";
import fields from "data/fields-signup.json";

export default function SignUp() {
  // Local state
  const [form, setForm] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  return (
    <main className="page signup-page">
      <div className="center-container">
        <form className="signup-form">
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
                errors={errors}
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
