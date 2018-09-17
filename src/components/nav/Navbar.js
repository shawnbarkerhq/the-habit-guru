import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar white navbar-center" id="navbar-center">
        <div className="nav-wrapper">
          <a
            to="/"
            className="brand-logo thg-title-font thg-blue"
            activeClassName="active"
          >
            The
            <span className="thg-red">Habit</span>
            <span className="thg-thin-font">Guru</span>
          </a>
          <a
            to="/"
            data-target="slide-out"
            className="sidenav-trigger black-text"
          >
            <i className="material-icons">menu</i>
          </a>
          <ul className="hide-on-med-and-down">
            <li>
              <a
                to={{ pathname: '/', hash: '#about' }}
                className="thg-blue"
                activeClassName="active"
              >
                About
              </a>
            </li>
            <li>
              <a to="/all-blogs" className="thg-blue" activeClassName="active">
                Blog
              </a>
            </li>
            <li>
              <a
                to={{ pathname: '/gallery' }}
                className="thg-blue"
                activeClassName="active"
              >
                Gallery
              </a>
            </li>
            <li>
              <a
                hash={{ pathname: '/', hash: '#contact' }}
                to="/"
                className="thg-blue"
                activeClassName="active"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
