// Project files
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="nav-bar">
      <ul className="primary-navigation">
        <li className="nav-item">
          <Link to="/">Home</Link>
        </li>
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
      </ul>
    </nav>
  );
}
