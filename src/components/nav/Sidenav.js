import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Sidenav extends Component {
  componentDidMount = () => {
    var elems = document.querySelectorAll('.sidenav');
    var instances = window.M.Sidenav.init(elems);
    return instances;
  };

  render() {
    return (
      <ul id="slide-out" className="sidenav">
        <li>
          <div className="user-view">
            <div className="background">
              <img
                src="https://via.placeholder.com/350x150"
                alt="sky around back"
              />
            </div>
            <Link to="/#home">
              <img
                src="https://via.placeholder.com/350x150"
                className="circle"
                alt="Joshua Tree Barker"
              />
            </Link>
            <Link to="/#about">
              <span className="name white-text">Joshua "Tree" Barker</span>
            </Link>
            <Link to="/#contact">
              <span className="email white-text">thehabitguru@gmail.com</span>
            </Link>
          </div>
        </li>
        <li>
          <Link to="/dashboard">
            <i className="material-icons">dashboard</i> Dashboard
          </Link>
        </li>
        <li>
          <Link to="/#about">About</Link>
        </li>
        <li>
          <Link to="/feed">Posts</Link>
        </li>
        <li>
          <Link to="/#gallery">Gallery</Link>
        </li>
        <li>
          <Link to="/#contact">Contact</Link>
        </li>
        <li>
          <div className="/divider" />
        </li>
        <li>
          <Link className="subheader" to="">
            Account Controls
          </Link>
        </li>
        <li>
          <Link to="/logout" className="waves-effect">
            Log Out
          </Link>
        </li>
      </ul>
    );
  }
}

export default Sidenav;
