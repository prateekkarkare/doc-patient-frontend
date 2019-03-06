import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
//import TextField from "@material-ui/core/TextField";
import Patient from "../components/Patient";

class PatientList extends Component {
  state = {
    patient: [
      {
        fields: {
          patientID: "1",
          title: "Patient 1",
          description: "Description 1"
        }
      },
      {
        fields: {
          patientID: "2",
          title: "Patient 2",
          description: "Description 2"
        }
      }
    ],
    searchString: ""
  };

  /* constructor(props) {
    super(props)
    //this.getPatients()
  }

  onSearchInputChange = (event) => {
    if (event.target.value) {
      this.setState({searchString: event.target.value})
    } else {
      this.setState({searchString: ''})
    }
    //this.getPatients()
  }*/

  render() {
    return (
      <div>
        <Grid container spacing={24} style={{ padding: 24 }}>
          {this.state.patient.map(currentPatient => (
            <Grid
              item
              xs={12}
              sm={6}
              lg={4}
              xl={3}
              key={currentPatient.fields.patientID}
            >
              <Patient patient={currentPatient} />
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
}

export default PatientList;
