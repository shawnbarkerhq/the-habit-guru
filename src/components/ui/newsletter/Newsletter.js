import React, { Component } from 'react';
import { firestoreConnect } from 'react-redux-firebase';
import PropTypes from 'prop-types';
class NewsletterSignUp extends Component {
  state = {
    email: ''
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const newEmail = this.state;

    const { firestore } = this.props;

    firestore
      .add({ collection: 'newsletter' }, newEmail)
      .then(() => this.setState({ email: '' }))
      .catch(err => console.log(err));
  };
  render() {
    return (
      <section
        id="newsletter-signup"
        className="section newsletter-signup white-text center scrollspy thgblue"
      >
        <div className="container">
          <div className="row">
            <h4 className="center white-text">Habits Direct to You</h4>
            <form onSubmit={this.onSubmit}>
              <div className="input-field col s12">
                <span>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    className="newsletter"
                    autoComplete="email"
                    onChange={this.onChange}
                    value={this.state.email}
                  />
                  <label htmlFor="email">
                    <p>Sign up for our newsletter</p>
                  </label>
                </span>
              </div>
              <input
                type="submit"
                className="waves-effect waves-light btn thg-red-bg"
                name="submit"
                id="submit"
                value="Submit"
              />
            </form>
          </div>
        </div>
      </section>
    );
  }
}

NewsletterSignUp.propTypes = {
  firestore: PropTypes.object.isRequired
};

export default firestoreConnect()(NewsletterSignUp);
