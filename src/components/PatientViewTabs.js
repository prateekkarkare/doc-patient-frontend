import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import CustomizedTable from "./tables/Table.js";
import LetterAvatars from "./Avatar";

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper
  }
});

class PatientViewTabs extends React.Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    const procedures = ["One", "Two", "Three", "Four", "Five", "Six"];

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons="auto"
          >
            {procedures.map(currentProcedure => (
              <Tab label={currentProcedure} />
            ))}
            <LetterAvatars initials="K" />
          </Tabs>
        </AppBar>
        {value === 0 && (
          <TabContainer>
            <CustomizedTable />
          </TabContainer>
        )}
        {value === 1 && <TabContainer>Procedure Two</TabContainer>}
        {value === 2 && <TabContainer>Procedure Three</TabContainer>}
        {value === 3 && <TabContainer>Procedure Four</TabContainer>}
        {value === 4 && <TabContainer>Procedure Five</TabContainer>}
        {value === 5 && <TabContainer>Procedure Six</TabContainer>}
        {value === 6 && <TabContainer>Procedure Seven</TabContainer>}
      </div>
    );
  }
}

PatientViewTabs.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PatientViewTabs);