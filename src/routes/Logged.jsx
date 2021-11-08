import { Route } from "react-router-dom";

// Project files
import { useUser } from "state/UserProvider";
import Home from "pages/Home";
import Login from "pages/auth/Login";
import SignUp from "pages/auth//SignUp";
import Admin from "pages/admin/Admin";

export default function Logged() {
  const { user } = useUser();
  console.log(user.role);

  return (
    <>
      {user.role === "admin" && <Route component={Admin} path="/admin" />}
      <Route exact path="/" component={Home} />
      <Route component={Login} path="/login" />
      <Route component={SignUp} path="/signup" />
    </>
  );
}
