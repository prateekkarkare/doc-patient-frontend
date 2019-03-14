import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

import "assets/scss/material-react-kit.scss?v=1.4.0";
import "assets/css/material-dashboard-react.css?v=1.6.0";

// pages for this product
import LandingPage from "views/LandingPage/LandingPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import Admin from "layouts/Admin.js";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route path="/admin" component={Admin} />
      <Route path="/login-page" component={LoginPage} />
      <Route path="/profile-page" component={ProfilePage} />
      <Redirect from="/admin" to="/admin/dashboard" />
    </Switch>
  </Router>,
  document.getElementById("root")
);
