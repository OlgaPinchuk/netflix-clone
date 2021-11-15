// NPM Packages
import { useState } from "react";
import { useHistory } from "react-router-dom";

// Project files
import SearchBar from "./SeachBar";
import userIcon from "assets/images/icons/user-icon.png";
import { useAuth } from "state/AuthProvider";
import { logout } from "scripts/authentification";

export default function SecondaryNavigation() {
  // Global state
  const { setIsLogged } = useAuth();
  const history = useHistory();

  // Local state
  const [isOpened, setIsOpened] = useState(false);

  // Methods
  async function onLogout() {
    const account = await logout();

    console.log("Home.jsx account", account);
    setIsLogged(false);
    history.push("/");
  }

  return (
    <div className="secondary-navigation">
      <SearchBar />
      <div className={`account-dropdown ${isOpened ? "open" : ""}`}>
        <button
          className="account-dropdown-button"
          onClick={() => setIsOpened(!isOpened)}
        >
          <div className="profile">
            <img src={userIcon} alt="User Profile" className="profile-icon" />
          </div>
          <span className={`caret ${isOpened ? "open" : ""}`}></span>
        </button>
        {isOpened && (
          <div className="account-dropdown-sections">
            <div className="account-name">Name</div>
            <div className="sub-menu">
              <a className="sub-menu-link" href="#">
                Help center
              </a>
              <button className="sign-out" onClick={onLogout}>
                Sign out
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
