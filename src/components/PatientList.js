import React, {Component} from 'react'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Patient from '../components/Patient'


class PatientList extends Component {
  state = {
    patient: [
      {
        fields: {
          title: 'Patient 1',
          description: 'Description 1'
        }
      },
      {
        fields: {
          title: 'Patient 2',
          description: 'Description 2'
        }
      }
    ],
    searchString: ''
  }

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

  render () {
    return (
      <div>
        <div>
          <TextField style={{padding: 24}}
            id="searchInput"
            placeholder="Search for Patients"
            margin="normal"/>
          <Grid container spacing={24} style={{padding: 24}}>
            {this.state.patient.map(currentPatient => (
              <Grid item xs={12} sm={6} lg={4} xl={3}>
                <Patient patient={currentPatient}/>  
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    )
  }
}

export default PatientList;