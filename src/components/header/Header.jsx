// NPM packages
import { Link } from "react-router-dom";

// Project files
import NavBar from "./NavBar";
import SecondaryNavigation from "./SecondaryNavigation";
import logo from "assets/images/logo.svg";
import { useAuth } from "state/AuthProvider";
import { useUser } from "state/UserProvider";

export default function Header() {
  // Global state
  const { isLogged } = useAuth();
  const { user } = useUser();

  return (
    <header className="netflix-header pinning-header">
      <div className="pinning-header-container">
        <div className="main-header menu-navigation">
          <Link className="svg-logo" to="/">
            <img src={logo} alt="Logo" />
          </Link>
          {isLogged && (
            <>
              <NavBar user={user}/>
              <SecondaryNavigation userName={user.name}/>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
