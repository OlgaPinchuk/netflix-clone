// Project files
import { Link } from "react-router-dom";

export default function NavBar({ user }) {
  // Properties
  const isAdmin = user.role && user.role === "admin";

  return (
    <nav className="nav-bar">
      <ul className="primary-navigation">
        <li className="nav-item">
          <Link to="/home">Home</Link>
        </li>
        {!isAdmin ? (
          <>
            <li className="nav-item">
              <a href="#series">Series</a>
            </li>
            <li className="nav-item">
              <a href="#movies">Movies</a>
            </li>
            <li className="nav-item">
              <a href="#documentaries">Documentaries</a>
            </li>
            <li className="nav-item">
              <a href="#popular">Popular</a>
            </li>
          </>
        ) : (
          <li className="nav-item">
            <Link to="/admin">Admin</Link>
          </li>
        )}
      </ul>
    </nav>
  );
}
