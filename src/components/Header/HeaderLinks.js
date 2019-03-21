/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { LocalHospital, Person, People, Email } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinkStyle.js";
import { Icon } from "@material-ui/core";

function HeaderLinks({ ...props }) {
  const { classes } = props;
  return (
    <List className={classes.list}>
      {/*<ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="I am a"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={People}
          dropdownList={[
            <Link to="/login-page" className={classes.dropdownLink}>
              Doctor
            </Link>,
            <Link to="/profile-page" className={classes.dropdownLink}>
              Patient
            </Link>
          ]}
        />
      </ListItem>*/}
      <ListItem className={classes.listItem}>
        <Button
          href="/admin/dashboard"
          color="transparent"
          target=""
          className={classes.navLink}
        >
          {" "}
          <LocalHospital className={classes.icon} /> Doctor
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="/profile-page"
          color="transparent"
          target=""
          className={classes.navLink}
        >
          {" "}
          <Person className={classes.icon} /> Patient
        </Button>
      </ListItem>
    </List>
  );
}

export default withStyles(headerLinksStyle)(HeaderLinks);
