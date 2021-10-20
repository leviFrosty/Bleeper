import AppRouter from "./Router";
import React, { useEffect, useState } from "react";
import { auth } from "fbInstance";
import { onAuthStateChanged, reload } from "firebase/auth";

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userObj, setUserObj] = useState(null);

  const refreshDisplayName = () => {
    reload(userObj);
    setUserObj({});
    const user = auth.currentUser;
    setUserObj(user);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserObj(user);
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, []);
  return (
    <div className="App">
      {init ? (
        <AppRouter
          isLoggedIn={isLoggedIn}
          userObj={userObj}
          refreshDisplayName={refreshDisplayName}
        />
      ) : (
        "Initializing..."
      )}
    </div>
  );
}

export default App;
