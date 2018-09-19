import React, { Component } from 'react';

import cartoonMe from '../img/prayer-pose.png';

class About extends Component {
  render() {
    return (
      <section id="about" className="about">
        <div className="row">
          <div className="col s12">
            <div className="card-panel grey lighten-5 z-depth-1">
              <div className="row valign-wrapper">
                <div className="col s12 offset-s2 m10 l8 offset-l2">
                  <h5>
                    About
                    <span className="thg-blue"> Joshua</span>
                  </h5>
                  <p className="black-text">The Habit Guru</p>

                  <p className="">
                    Focusing on analytics and technology as a counterpart to
                    community and service, Shawn finds new ways of creating and
                    implementing efficiencies that challenge a long-lasting
                    tradition of how to operate a restaurant, retail outlet, or
                    bar/nightclub. He has developed many programs and web
                    applications to automate tasks to create more time with the
                    guest.
                  </p>

                  <span className="blue-text text-darken-4">
                    <em>read more...</em>
                  </span>
                </div>
                <div className="col s2 l4 hide-on-med-and-down">
                  <img
                    src={cartoonMe}
                    alt="Joshua Tree Barker"
                    className="responsive-img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
