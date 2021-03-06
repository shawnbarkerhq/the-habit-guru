import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firebaseConnect } from 'react-redux-firebase';
import PropTypes from 'prop-types';
import Alert from '../layout/Alert';
import { notifyUser } from '../../store/actions/notifyActions';

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

    const { firebase, notifyUser } = this.props;
    const { email, password } = this.state;
    firebase
      .login({
        email,
        password
      })
      .catch(err => notifyUser('Invalid login credientials', 'Great Job'));
  };
  render() {
    const { messageError, messageSuccess } = this.props.notify;
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
                    <Alert
                      messageSuccess={messageSuccess}
                      messageError={messageError}
                    />
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
                    <Alert
                      messageSuccess={messageSuccess}
                      messageError={messageError}
                    />
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

export default compose(
  firebaseConnect(),
  connect(
    (state, props) => ({
      notify: state.notify
    }),
    { notifyUser }
  )
)(Login);
