// NPM packages
import { useCallback, useEffect, useState } from "react";
import { BrowserRouter, Switch } from "react-router-dom";

// Project files
import { useUser } from "state/UserProvider";
import { useAuth } from "state/AuthProvider";
import { getDocument } from "scripts/fireStore";
import Logged from "routes/Logged";
import Unlogged from "routes/Unlogged";

export default function App() {
  // Global state
  const { uid, setIsLogged, isLogged } = useAuth();
  const { setUser } = useUser();

  // Local state
  const [status, setStatus] = useState(0); // 0 pending, 1 ready, 2 error

  // Methods
  const fetchUser = useCallback(
    async (path, uid) => {
      if (uid === "no user") {
        setStatus(1);
      } else if (uid !== "") {
        const user = await getDocument(path, uid);

        setUser(user);
        setIsLogged(true);
        setStatus(1);
      }
    },
    [setIsLogged, setUser]
  );

  useEffect(() => {
    fetchUser("users", uid);
  }, [fetchUser, uid]);

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>{isLogged ? <Logged /> : <Unlogged />}</Switch>
      </BrowserRouter>
    </div>
  );
}
