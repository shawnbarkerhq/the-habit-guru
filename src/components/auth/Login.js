import React, { Component } from 'react';
// import { compose } from 'redux';
// import { connect } from 'react-redux';
import { firebaseConnect } from 'react-redux-firebase';
import PropTypes from 'prop-types';
import Spinner from '../layout/Spinner';

class Login extends Component {
  state = {
    email: '',
    password: ''
  };
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();

    const { firebase } = this.props;
    const { email, password } = this.state;
    firebase
      .login({
        email,
        password
      })
      .catch(err => alert('Invalid login credientials'));
  };
  render() {
    return (
      <div className="row">
        <div className="col m6 offset-m3">
          <div className="card">
            <div className="card-content">
              <span className="card-title center-align">
                <i className="fas fa-user" /> Login
              </span>
              <form onSubmit={this.onSubmit}>
                <div className="row">
                  <div className="input-field col s12">
                    <i className="fas fa-envelope prefix" />
                    <input
                      id="email"
                      type="email"
                      className="validate"
                      name="email"
                      value={this.state.email}
                      onChange={this.onChange}
                    />
                    <label htmlFor="email">Email</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <i className="fas fa-key prefix" />
                    <input
                      id="password"
                      type="password"
                      className="validate"
                      name="password"
                      value={this.state.password}
                      onChange={this.onChange}
                    />
                    <label htmlFor="password">Password</label>
                  </div>
                </div>
                <div className="card-action">
                  <input
                    type="submit"
                    className="waves-effect waves-light btn"
                    name="submit"
                    id="submit"
                    value="Submit"
                  />
                  <a href="#">This is a link</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  firebase: PropTypes.object.isRequired
};

export default firebaseConnect()(Login);
