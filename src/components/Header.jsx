// NPM packages
import { Link } from "react-router-dom";

// Project files
import logo from "assets/images/logo.svg";

export default function Header() {
  return (
    <header className="login-header">
      <Link className="svg-logo" to="/">
        <img src={logo} alt="Logo" />
      </Link>
    </header>
  );
}
