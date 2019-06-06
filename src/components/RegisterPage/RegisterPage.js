import React, { Component } from 'react';
import {connect} from 'react-redux';

class RegisterPage extends Component {
  state = {
    username: '',
    password: '',
    firstname: '',
    lastname: '',
    email_id: '',
  };

  registerUser = (event) => {
    event.preventDefault();

    if (this.state.username && this.state.password && this.state.firstname && this.state.lastname && this.state.email_id) {
      this.props.dispatch({
        type: 'REGISTER',
        payload: {
          username: this.state.username,
          password: this.state.password,
          firstname: this.state.firstname,
          lastname: this.state.lastname,
          email_id: this.state.email_id
        },
      });
    } else {
      this.props.dispatch({type: 'REGISTRATION_INPUT_ERROR'});
    }
  } // end registerUser

  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }

  render() {
    return (
      <div>
        {this.props.errors.registrationMessage && (
          <h2
            className="alert"
            role="alert"
          >
            {this.props.errors.registrationMessage}
          </h2>
        )}
        <form onSubmit={this.registerUser}>
          <h1>Register User</h1>
          <div>
            <label htmlFor="username">
              Username:
              <input
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.handleInputChangeFor('username')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="password">
              Password:
              <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleInputChangeFor('password')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="firstname">
              First Name:
              <input
                type="text"
                name="firstname"
                value={this.state.firstname}
                onChange={this.handleInputChangeFor('firstname')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="lastname">
              Last Name:
              <input
                type="text"
                name="lastname"
                value={this.state.lastname}
                onChange={this.handleInputChangeFor('lastname')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="email_id">
              Email :
              <input
                type="text"
                name="email_id"
                value={this.state.email_id}
                onChange={this.handleInputChangeFor('email_id')}
              />
            </label>
          </div>
          <div>
            <input
              className="register"
              type="submit"
              name="submit"
              value="Register"
            />
          </div>
        </form>
        <center>
          <button
            type="button"
            className="link-button"
            onClick={() => {this.props.dispatch({type: 'SET_TO_LOGIN_MODE'})}}
          >
            Login
          </button>
        </center>
      </div>
    );
  }
}

// Instead of taking everything from state, we just want the error messages.
// if you wanted you could write this code like this:
// const mapStateToProps = ({errors}) => ({ errors });
const mapStateToProps = state => ({
  errors: state.errors,
});

export default connect(mapStateToProps)(RegisterPage);

