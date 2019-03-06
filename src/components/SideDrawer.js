import React from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";

class SideDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = () => {
    this.props.handleDrawerClose();
  };

  render() {
    const { classes, theme } = this.props;
    const open = this.props.open;

    const HospitalList = [
      "Hospital 1",
      "Hospital 2",
      "Hospital 3",
      "Hospital 4",
      "Hospital 5",
      "Hospital 6",
      "Hospital 7"
    ];

    return (
      <div>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper
          }}
        >
          <div className={classes.drawerHeader}>
            <Typography variant="h6" align="left">
              Hospitals
            </Typography>
            <IconButton onClick={this.handleChange}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </div>
          <Divider />
          <List>
            {HospitalList.map((text, index) => (
              <ListItem button key={text}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Drawer>
      </div>
    );
  }
}

SideDrawer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default SideDrawer;
