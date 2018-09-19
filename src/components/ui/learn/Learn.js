import React, { Component } from 'react';

class Learn extends Component {
  render() {
    return (
      <section id="learn">
        <div className="row">
          <div className="col s12 m6 l6 learn-full hoverable">
            <div className="learn-card center">
              <h4>How I can help you</h4>
              <p>My goal is to help you</p>
              <a className="waves-effect waves-light btn thg-blue-bg">
                <i className="fas fa-cloud left" />
                Learn More
              </a>
            </div>
          </div>
          <div className="col s12 m6 l6 learn-full  hoverable">
            <div className="learn-card2 center">
              <h4>Habits 101</h4>
              <p>Understanding your habits</p>
              <a className="waves-effect waves-light btn thg-blue-bg">
                <i className="fas fa-cloud left" />
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Learn;
