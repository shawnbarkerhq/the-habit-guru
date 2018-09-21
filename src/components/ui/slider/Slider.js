import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import image1 from '../../../assets/images/architecture-art-bright.jpg';
import image2 from '../../../assets/images/abstract-art-circles3.jpg';
import image3 from '../../../assets/images/fog-foggy-jetty2.jpg';
class Slider extends Component {
  componentDidMount = () => {
    var slider = document.querySelectorAll('.slider');
    var instanceSlider = window.M.Slider.init(slider, {
      indicators: true,
      height: 500,
      transition: 600,
      interval: 7500
    });
    return instanceSlider;
  };

  render() {
    return (
      <section id="slider" className="slider">
        <ul className="slides">
          <li>
            <img src={image1} alt="" />
            <div className="caption center-align">
              <h2>Let's Get Started</h2>
              <h5 className="light grey-text text-lighten-3 hide-on-small-only">
                I will be sharing my experiences, habits, and routines to
                provide awareness of how habits can create happiness or
                distractions.
              </h5>
              <Link to="#about" className="btn thg-blue-bg btn-large">
                Learn More
              </Link>
            </div>
          </li>
          <li>
            <img src={image2} alt="" />
            <div className="caption left-align">
              <h2>How can I help</h2>
              <h5 className="light grey-text text-lighten-3 hide-on-small-only">
                My goal is to help you through this journey of awareness by
                helping you identify small changes you can make to reach a
                desired outcome.
              </h5>
              <Link to="#services" className="btn thg-blue-bg btn-large">
                Learn More
              </Link>
            </div>
          </li>
          <li>
            <img src={image3} alt="" />
            <div className="caption right-align">
              <h2>Baby Steps</h2>
              <h5 className="light grey-text text-lighten-3 hide-on-small-only">
                As I learn, grow, and become more aware of my own self I will
                also be documenting my changes to my habit loops to increase or
                descrease the desired effect.
              </h5>
              <Link to="#posts" className="btn thg-blue-bg btn-large">
                Learn More
              </Link>
            </div>
          </li>
        </ul>
      </section>
    );
  }
}

export default Slider;
