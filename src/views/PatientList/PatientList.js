import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  }
};

function PatientList(props) {
  const { classes } = props;
  const tableData = [
    ["Patient A", "Pune", "Arthroscopy", "3", "1"],
    ["Patient B", "Pune", "Arthroscopy", "2", "1"],
    ["Patient C", "Pune", "Arthroscopy", "1", "1"],
    ["Patient D", "Pune", "Arthroscopy", "4", "1"],
    ["Patient E", "Pune", "Arthroscopy", "5", "1"],
    ["Patient F", "Pune", "Arthroscopy", "2", "1"]
  ];
  const numRows = tableData.length;
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>
              Ongoing Patient Engagements
            </h4>
            <p className={classes.cardCategoryWhite}>
              You currently have {numRows} active engagements
            </p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={[
                "Name",
                "Place",
                "Procedure",
                "Followups Done",
                "Followups Scheduled"
              ]}
              tableData={tableData}
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}

export default withStyles(styles)(PatientList);
