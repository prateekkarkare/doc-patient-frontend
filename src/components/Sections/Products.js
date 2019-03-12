import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import LiveHelp from "@material-ui/icons/LiveHelp";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Security from "@material-ui/icons/Security";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import productStyle from "assets/jss/material-kit-react/views/LandingPageSections/productStyle.js";

class ProductSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>Let's talk product</h2>
            <h5 className={classes.description}>
              This is the paragraph where we can write more details about the
              product. Keep user engaged by providing meaningful information.
              Remember that by this time, the user is curious, otherwise he
              wouldn't scroll to get here. We can add a button if we want the
              user to see more.
            </h5>
          </GridItem>
        </GridContainer>
        <div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Live Help"
                description="Details about the features might go here. I dont know hwat feature need to be highlighted here"
                icon={LiveHelp}
                iconColor="info"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Verified Users"
                description="Verified doctors and blah bhlashda lsdhalsd hasld asldihyaidsfbajsf dgasilfilasfnlk h flashif alsfhalnsf alsfias lfhasflassf"
                icon={VerifiedUser}
                iconColor="success"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Secure"
                description="Ekdum secure platgorm sdafhjasl fhlaishf aslihfdals fdhlasid alsihbfaskjfhasjl flsahfalsfasfas"
                icon={Security}
                iconColor="danger"
                vertical
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(productStyle)(ProductSection);
