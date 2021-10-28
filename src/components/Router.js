import React from "react";
import Auth from "routes/Auth";
import Home from "routes/Home";
import NavBar from "./NavBar";
import NotFound from "routes/NotFound";
import Profile from "routes/Profile";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NewUser from "routes/NewUser";
import MadeWithLove from "./MadeWithLove";

const AppRouter = ({ isLoggedIn, userObj, refreshDisplayName }) => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      {isLoggedIn && <NavBar userObj={userObj} />}
      <Switch>
        <React.Fragment>
          {isLoggedIn ? (
            <React.Fragment>
              <div className="main">
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
              </div>
            </React.Fragment>
          ) : (
            <div className="logged-out">
              <Route exact path="/not-found" component={NotFound} />
              <Route exact path="/" component={Auth} />
            </div>
          )}
        </React.Fragment>
      </Switch>
      {isLoggedIn && (
        <React.Fragment>
          <div className="explore">
            <MadeWithLove />
          </div>
        </React.Fragment>
      )}
    </BrowserRouter>
  );
};

export default AppRouter;
