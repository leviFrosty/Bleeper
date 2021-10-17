import AppRouter from "./Router";
import React, { useEffect, useState } from "react";
import { auth } from "fbInstance";
import { onAuthStateChanged } from "firebase/auth";
import NavBar from "./NavBar";

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(auth.currentUser);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, []);
  return (
    <div className="App">
      {init ? <AppRouter isLoggedIn={isLoggedIn} /> : "Initializing..."}
    </div>
  );
}

export default App;
