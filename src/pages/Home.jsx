// NPM packages
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <h1>User Home Page</h1>
      <Link to="/admin">Admin</Link>
    </>
  );
}
