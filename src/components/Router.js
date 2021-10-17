import React from "react";
import Auth from "routes/Auth";
import Home from "routes/Home";
import NavBar from "./NavBar";
import NotFound from "routes/NotFound";
import Profile from "routes/Profile";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

const AppRouter = ({ isLoggedIn }) => {
  return (
    <Router>
      {isLoggedIn && <NavBar />}
      <Switch>
        {isLoggedIn ? (
          <React.Fragment>
            <Route exact path="/not-found" component={NotFound} />
            <Route exact path="/" component={Home} />
            <Route exact path="/profile" component={Profile} />
            <Redirect from="*" to="/not-found" />
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Route exact path="/not-found" component={NotFound} />
            <Route exact path="/" component={Auth} />
            <Redirect from="*" to="/not-found" />
          </React.Fragment>
        )}
      </Switch>
    </Router>
  );
};

export default AppRouter;
