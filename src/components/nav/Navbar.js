import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firebaseConnect } from 'react-redux-firebase';
import PropTypes from 'prop-types';
class Navbar extends Component {
  state = {
    isAuthenticated: false
  };

  static getDerivedStateFromProps(props, state) {
    const { auth } = props;

    if (auth.uid) {
      return { isAuthenticated: true };
    } else {
      return { isAuthenticated: false };
    }
  }
  onClickScroll = e => {
    document.getElementById('contact').scrollIntoView();
  };
  onLogoutClick = e => {
    e.preventDefault();

    const { firebase } = this.props;
    firebase.logout();
  };
  render() {
    const { isAuthenticated } = this.state;
    const { auth } = this.props;
    return (
      <nav className="navbar white navbar-center" id="navbar-center">
        <div className="nav-wrapper">
          <NavLink
            to="/"
            className="brand-logo thg-title-font thg-blue"
            activeClassName="active"
          >
            The
            <span className="thg-red">Habit</span>
            <span className="thg-thin-font">Guru</span>
          </NavLink>
          <NavLink
            to="/"
            data-target="slide-out"
            className="sidenav-trigger black-text"
          >
            <i className="fas fa-bars" />
          </NavLink>
          <ul className="hide-on-med-and-down">
            <li>
              <NavLink
                to="/about"
                className="thg-blue"
                activeClassName="active"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/posts"
                className="thg-blue"
                activeClassName="active"
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/gallery"
                className="thg-blue"
                activeClassName="active"
              >
                Gallery
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                className="thg-blue"
                activeClassName="active"
                onClick={this.onClickScroll}
              >
                Contact
              </NavLink>
            </li>
            {isAuthenticated ? (
              <div className="nav-wrapper">
                <li>
                  <NavLink
                    to="/quotes"
                    className="thg-blue"
                    activeClassName="active"
                  >
                    Quotes
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard"
                    className="thg-blue"
                    activeClassName="active"
                  >
                    {auth.email}
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard"
                    className="thg-blue"
                    activeClassName="active"
                    onClick={this.onLogoutClick}
                  >
                    Logout
                  </NavLink>
                </li>
              </div>
            ) : null}
          </ul>
        </div>
      </nav>
    );
  }
}

Navbar.propTypes = {
  firebase: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

export default compose(
  firebaseConnect(),
  connect((state, props) => ({
    auth: state.firebase.auth
  }))
)(Navbar);
