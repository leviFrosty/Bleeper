import React from "react";
import Auth from "routes/Auth";
import Home from "routes/Home";
import NavBar from "./NavBar";
import Profile from "components/Profile";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

const AppRouter = ({ isLoggedIn }) => {
  return (
    <Router>
      {isLoggedIn && <NavBar />}
      <Switch>
        {isLoggedIn ? (
          <React.Fragment>
            <Route exact path="/" component={Home} />
            <Route exact path="/profile" component={Profile} />
          </React.Fragment>
        ) : (
          <Route exact path="/" component={Auth} />
        )}
      </Switch>
    </Router>
  );
};

export default AppRouter;
