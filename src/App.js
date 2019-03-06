import React from "react";
import { Route } from "react-router-dom";
import DocDashBoardPage from "./components/pages/DocDashBoardPage";
import LoginPage from "./components/pages/LoginPage";
import PatientViewPage from "./components/pages/PatientViewPage";

const App = () => (
  <div className="main_container">
    <Route path="/docdash" exact component={DocDashBoardPage} />
    <Route path="/login" exact component={LoginPage} />
    <Route path="/1" exact component={PatientViewPage} />
  </div>
);

export default App;
