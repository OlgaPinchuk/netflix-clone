// NPM packages
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";

// Project files
import Header from "components/Header";
import InputFields from "components/InputFields";
import Footer from "components/Footer";
import Checkbox from "components/Checkbox";
import fields from "data/fields-login.json";
import small from "assets/images/home-bg_small.jpg";
import medium from "assets/images/home-bg_medium.jpg";
import large from "assets/images/home-bg_large.jpg";

export default function Login() {
  // Local state
  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});

  // TODO: fields validation
  function validateEmail() {
    const emailRegex = /\S+@\S+\.\S+/;
    setErrors({ ...errors, email: emailRegex.test(form.email) });
  }

  function validatePassword() {
    setForm({ ...errors, password: form.password.length > 3 });
  }

  return (
    <div className="page login-page">
      <div className="login-wrapper">
        <div className="login-wrapper-background">
          <img
            className="bg-image"
            srcSet={`${small} 1000w, ${medium} 1500w, ${large} 1800w`}
            src={medium}
            alt="Netflix movies"
          />
        </div>
        <Header />
      </div>

      {/* Form */}
      <div className="login-form-wrapper">
        <div className="login-form-signup">
          <div className="login-form-main">
            <h1 className="login-page-title">Sign In</h1>
            <form className="login-form">
              <InputFields
                fields={fields}
                state={[form, setForm]}
                errors={errors}
              />
              <button className="button login-button">Sign In</button>
              <div className="login-form-help">
                <Checkbox label="Remember me"/>
                <Link to="/recover" className="help">
                  Need help?
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
