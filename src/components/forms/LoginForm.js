import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import PropTypes from "prop-types";

export class LoginForm extends Component {
  state = {
    data: {
      email: "",
      password: ""
    },
    loading: false,
    errors: {}
  };

  onChange = e =>
    this.setState({
      data: {
        ...this.state.data,
        [e.target.name]: e.target.value
      }
    });

  onSubmit = () => {
    const errors = this.validate(this.state.data);
  };

  render() {
    const { classes } = this.props;
    const { data } = this.state;
    return (
      <div className={classes.root}>
        <form
          className={classes.container}
          noValidate
          autoComplete="off"
          submit={this.onSubmit}
        >
          <TextField
            id="standard-name"
            label="Name"
            className={classes.textField}
            value={this.state.data.email}
            onChange={this.onChange}
            margin="normal"
          />
          <TextField
            id="standard-password-input"
            label="Password"
            className={classes.textField}
            type="password"
            onChange={this.onChange}
            autoComplete="current-password"
            margin="normal"
          />
          <Button primary>Login</Button>
        </form>
      </div>
    );
  }
}

LoginForm.propTypes = {
  classes: PropTypes.object.isRequired
};

export default LoginForm;
