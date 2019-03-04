import React from "react";
import { Route } from "react-router-dom";
import DocDashBoardPage from "./components/pages/DocDashBoardPage";
import LoginPage from "./components/pages/LoginPage";

const App = () => (
  <div className="main_container">
    <Route path="/docdash" exact component={DocDashBoardPage} />
    <Route path="/login" exact component={LoginPage} />
  </div>
);

export default App;
