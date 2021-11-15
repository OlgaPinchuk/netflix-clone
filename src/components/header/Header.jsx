// NPM packages
import { Link } from "react-router-dom";

// Project files
import NavBar from "./NavBar";
import SecondaryNavigation from "./SecondaryNavigation";
import logo from "assets/images/logo.svg";
import { useAuth } from "state/AuthProvider";

export default function Header() {
  // Global state
  const { isLogged } = useAuth();

  return (
    <header className="netflix-header pinning-header">
      <div className="pinning-header-container">
        <div className="main-header menu-navigation">
          <Link className="svg-logo" to="/">
            <img src={logo} alt="Logo" />
          </Link>
          {isLogged && (
            <>
              <NavBar />
              <SecondaryNavigation />
            </>
          )}
        </div>
      </div>
    </header>
  );
}
