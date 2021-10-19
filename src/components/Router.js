import React from "react";
import Auth from "routes/Auth";
import Home from "routes/Home";
import NavBar from "./NavBar";
import NotFound from "routes/NotFound";
import Profile from "routes/Profile";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

const AppRouter = ({ isLoggedIn, userObj }) => {
  return (
    <Router>
      {isLoggedIn && <NavBar userObj={userObj} />}
      <Switch>
        {isLoggedIn ? (
          <React.Fragment>
            <Route exact path="/profile">
              <Profile userObj={userObj} />
            </Route>
            <Route exact path="/not-found" component={NotFound} />
            <Route exact path="/">
              <Home userObj={userObj} />
            </Route>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Route exact path="/not-found" component={NotFound} />
            <Route exact path="/" component={Auth} />
          </React.Fragment>
        )}
      </Switch>
    </Router>
  );
};

export default AppRouter;
