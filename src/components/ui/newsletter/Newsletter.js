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
        className="section newsletter-signup black-text center scrollspy"
      >
        <div className="container">
          <div className="row">
            <h4 className="center thg-blue">Newsletter Signup</h4>
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
                    <b>Sign up for our newsletter</b>
                  </label>
                </span>
              </div>
              <input
                type="submit"
                className="waves-effect waves-light btn thg-blue-bg"
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
