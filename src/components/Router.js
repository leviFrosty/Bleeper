import React from "react";
import Auth from "routes/Auth";
import Home from "routes/Home";
import NavBar from "./NavBar";
import NotFound from "routes/NotFound";
import Profile from "routes/Profile";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NewUser from "routes/NewUser";
import MadeWithLove from "./MadeWithLove";

const AppRouter = ({ isLoggedIn, userObj, refreshDisplayName }) => {
  return (
    <Router>
      {isLoggedIn && <NavBar userObj={userObj} />}
      <div className="main">
        <Switch>
          {isLoggedIn ? (
            <div className="loggedin__container">
              <Route exact path="/new-user">
                <NewUser
                  userObj={userObj}
                  refreshDisplayName={refreshDisplayName}
                />
              </Route>
              <Route exact path="/profile">
                <Profile
                  userObj={userObj}
                  refreshDisplayName={refreshDisplayName}
                />
              </Route>
              <Route exact path="/not-found" component={NotFound} />
              <Route exact path="/">
                <Home userObj={userObj} />
              </Route>
            </div>
          ) : (
            <div className="loggedout__container">
              <Route exact path="/not-found" component={NotFound} />
              <Route exact path="/" component={Auth} />
            </div>
          )}
        </Switch>
      </div>
      <div className="explore">
        <MadeWithLove />
      </div>
    </Router>
  );
};

export default AppRouter;
