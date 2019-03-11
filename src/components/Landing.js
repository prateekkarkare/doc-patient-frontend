import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import Parallax from "./Parallax.js";

import landingPageStyle from "../assets/jss/views/landingPageStyle.js";

// Sections for this page
//import ProductSection from "./Sections/ProductSection.jsx";
//import TeamSection from "./Sections/TeamSection.jsx";
//import WorkSection from "./Sections/WorkSection.jsx";

const dashboardRoutes = [];

class LandingPage extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <Parallax filter image={require("../assets/img/handshake.jpg")} />
      </div>
    );
  }
}

export default withStyles(landingPageStyle)(LandingPage);
