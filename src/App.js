import React, { Component } from 'react';
import NavBar from './components/NavBar';
import PatientList from './components/PatientList'
import './App.css'

class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <PatientList />
      </div>
    );
  }
}

export default App;
