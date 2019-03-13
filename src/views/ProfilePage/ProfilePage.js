import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import Healing from "@material-ui/icons/Healing";
import History from "@material-ui/icons/History";
import DirectionsWalk from "@material-ui/icons/DirectionsWalk";
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import NavPills from "components/NavPills/NavPills.js";
import Parallax from "components/Parallax/Parallax.js";

import profile from "assets/img/Faces/prateek.jpg";

import profilePageStyle from "assets/jss/material-kit-react/views/profilePage.js";

class ProfilePage extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );

    return (
      <div>
        <Header
          color="transparent"
          brand="Doc Connect"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 200,
            color: "white"
          }}
          {...rest}
        />
        <Parallax tiny filter image={require("assets/img/profile_bg.jpg")} />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div>
            <div className={classes.container}>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={4}>
                  <div className={classes.profile}>
                    <div>
                      <img src={profile} alt="..." className={imageClasses} />
                    </div>
                    <div className={classes.name}>
                      <h3 className={classes.title}>Prateek Karkare</h3>
                      <h6>Toota Ghutna</h6>
                    </div>
                  </div>
                </GridItem>
              </GridContainer>
              <div className={classes.description}>
                <p>
                  Mai toh raste se jaa rha tha mai to bhelpuri khaa rha tha.
                  raste se jaa rha tha bhelpuri khaa rha tha ladki ghuma rha
                  tha. Tera ghutna toota toh mai kya karu.
                </p>
              </div>
              <GridContainer justify="center">
                <GridItem
                  xs={12}
                  sm={12}
                  md={12}
                  className={classes.navWrapper}
                >
                  <NavPills
                    alignCenter
                    color="primary"
                    tabs={[
                      {
                        tabButton: "Procedures",
                        tabIcon: Healing,
                        tabContent: "Test1"
                      },
                      {
                        tabButton: "History",
                        tabIcon: History,
                        tabContent: "Test2"
                      },
                      {
                        tabButton: "Recovery",
                        tabIcon: DirectionsWalk,
                        tabContent: "Test3"
                      }
                    ]}
                  />
                </GridItem>
              </GridContainer>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(profilePageStyle)(ProfilePage);
