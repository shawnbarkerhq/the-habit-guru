import React, { Component } from 'react';
import { firestoreConnect } from 'react-redux-firebase';
import PropTypes from 'prop-types';

import image from '../../../assets/images/prayer-pose.png';

class Help extends Component {
  state = {
    problem: '',
    impact: '',
    category: '',
    name: '',
    email: '',
    phone: ''
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const newHelp = this.state;

    const { firestore } = this.props;

    firestore
      .add({ collection: 'help' }, newHelp)
      .then(() =>
        this.setState({
          problem: '',
          impact: '',
          category: '',
          name: '',
          email: '',
          phone: ''
        })
      )
      .catch(err => console.log(err));
  };

  render() {
    return (
      <section id="help" className="section section-help center scrollspy">
        <div className="container">
          <div className="row">
            <div className="col s12 m6 offset-m3">
              <div className="card-panel z-depth-5">
                <h4>
                  <span className="thg-red">How can I Help</span>
                </h4>
                <div className="img-holder">
                  <img
                    src={image}
                    alt="Josh prayer"
                    className="circle responsive-img"
                  />
                </div>

                <form onSubmit={this.onSubmit} className="help-form">
                  <input
                    id="problem"
                    type="text"
                    name="problem"
                    placeholder="Describe the challenge you are having*"
                    autoComplete="problem"
                    className="help-input"
                    required
                    onChange={this.onChange}
                    value={this.state.problem}
                  />
                  <input
                    id="impact"
                    type="text"
                    name="impact"
                    placeholder="How is this impacting you*"
                    autoComplete="impact"
                    className="help-input"
                    required
                    onChange={this.onChange}
                    value={this.state.impact}
                  />
                  <input
                    id="category"
                    type="text"
                    name="category"
                    placeholder="Category"
                    autoComplete="category"
                    className="help-input"
                    onChange={this.onChange}
                    value={this.state.category}
                  />
                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Full Name*"
                    autoComplete="name"
                    className="help-input"
                    required
                    onChange={this.onChange}
                    value={this.state.name}
                  />
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Your Email*"
                    autoComplete="email"
                    className="help-input"
                    required
                    onChange={this.onChange}
                    value={this.state.email}
                  />
                  <input
                    id="phone"
                    type="text"
                    name="phone"
                    placeholder="Your Phone Number"
                    autoComplete="tel"
                    className="help-input"
                    onChange={this.onChange}
                    value={this.state.phone}
                  />
                  <input
                    type="submit"
                    value="Submit"
                    className="btn blue-grey"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

Help.propTypes = {
  firestore: PropTypes.object.isRequired
};

export default firestoreConnect()(Help);
