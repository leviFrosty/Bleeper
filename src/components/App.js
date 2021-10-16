import AppRouter from "./Router";
import React, { useState } from "react";
import fbase from "fbInstance";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="App">
      <AppRouter isLoggedIn={isLoggedIn} />
    </div>
  );
}

export default App;
