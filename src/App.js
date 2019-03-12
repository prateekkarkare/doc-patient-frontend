import React from "react";
import { Route } from "react-router-dom";
import DocDashBoardPage from "./components/pages/DocDashBoardPage";
import LoginPage from "./components/pages/LoginPage";
import LandingPage from "./components/pages/LandingPage";

const App = () => (
  <div className="main_container">
    <Route path="/docdash" exact component={DocDashBoardPage} />
    <Route path="/login" exact component={LoginPage} />
    <Route path="/" exact component={LandingPage} />
  </div>
);

export default App;
