import AppRouter from "./Router";
import React, { useState } from "react";
import { authService } from "fbInstance";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);
  return (
    <div className="App">
      <AppRouter isLoggedIn={isLoggedIn} />
    </div>
  );
}

export default App;
