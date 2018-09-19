import React, { Component } from 'react';

class NewsletterSignUp extends Component {
  render() {
    return (
      <section
        id="newsletter-signup"
        className="section newsletter-signup black-text center scrollspy"
      >
        <div className="container">
          <div className="row">
            <h4 className="center thg-blue">Newsletter Signup</h4>
            <form>
              <div className="input-field col s12">
                <span>
                  <button
                    className="btn waves-effect waves-light prefix thg-blue-bg"
                    type="submit"
                    name="action"
                  >
                    <i className="fas fa-arrow-circle-right" />
                  </button>
                  <input
                    type="text"
                    name="email"
                    id="newsletter-input"
                    className="newsletter"
                    autoComplete="email"
                  />
                  <label htmlFor="newsletter-input">
                    <b>Sign up for our newsletter</b>
                  </label>
                </span>
              </div>
            </form>
          </div>
        </div>
      </section>
    );
  }
}

export default NewsletterSignUp;
