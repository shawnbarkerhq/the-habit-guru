import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import image from '../../assets/images/architecture-art-bright.jpg';
import me from '../../assets/images/prayer-pose.png';

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
              <img src={image} alt="sky around back" />
            </div>
            <Link to="/#home">
              <img src={me} className="circle" alt="Joshua Tree Barker" />
            </Link>
            <Link to="/about">
              <span className="name white-text">Joshua "Tree" Barker</span>
            </Link>
            <Link to="/contact">
              <span className="email white-text">thehabitguru@gmail.com</span>
            </Link>
          </div>
        </li>
        <li>
          <Link to="/">
            <i className="fas fa-tachometer-alt" />
            Home
          </Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/posts">Posts</Link>
        </li>
        <li>
          <Link to="/gallery">Gallery</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
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
