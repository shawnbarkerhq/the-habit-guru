import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navbar extends Component {
  render() {
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
                to={{ pathname: '/', hash: '#about' }}
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
                to={{ pathname: '/gallery' }}
                className="thg-blue"
                activeClassName="active"
              >
                Gallery
              </NavLink>
            </li>
            <li>
              <NavLink
                hash={{ pathname: '/', hash: '#contact' }}
                to="/"
                className="thg-blue"
                activeClassName="active"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
