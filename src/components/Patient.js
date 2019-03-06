import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const Patient = props => {
  return (
    <div>
      <Card>
        <CardMedia
          style={{ height: 0, paddingTop: "56.25%" }}
          image={props.patient.fields.title}
          title={props.patient.fields.title}
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            {props.patient.fields.title}
          </Typography>
          <Typography component="p">
            {props.patient.fields.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            component={Link}
            to={"/" + props.patient.fields.patientID}
            size="small"
            color="primary"
          >
            Go To Patient {props.patient.fields.patientID}
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default Patient;
