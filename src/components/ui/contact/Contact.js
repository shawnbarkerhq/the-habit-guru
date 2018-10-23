import React, { Component } from 'react';
import { firestoreConnect } from 'react-redux-firebase';
import PropTypes from 'prop-types';
class Contact extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    description: ''
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const newContact = this.state;

    const { firestore } = this.props;

    firestore
      .add({ collection: 'contacts' }, newContact)
      .then(() =>
        this.setState({ name: '', email: '', phone: '', message: '' })
      )
      .catch(err => console.log(err));
  };

  render() {
    return (
      <section
        id="contact"
        className="section section-contact center scrollspy"
      >
        <div className="container">
          <div className="row">
            <div className="col s12 m6 offset-m3">
              <div className="card-panel z-depth-5">
                <h4>
                  <span className="thg-red">Contact</span>
                  <span className="thg-thin-font">Us</span>
                </h4>
                <form onSubmit={this.onSubmit}>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="name"
                    autoComplete="name"
                    required
                    onChange={this.onChange}
                    value={this.state.name}
                  />
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="email"
                    autoComplete="email"
                    required
                    onChange={this.onChange}
                    value={this.state.email}
                  />
                  <input
                    id="phone"
                    type="text"
                    name="phone"
                    placeholder="phone"
                    autoComplete="tel"
                    onChange={this.onChange}
                    value={this.state.phone}
                  />
                  <input
                    placeholder="Message"
                    name="message"
                    label="message"
                    info="Please leave a message"
                    required
                    onChange={this.onChange}
                    value={this.state.message}
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

Contact.propTypes = {
  firestore: PropTypes.object.isRequired
};

export default firestoreConnect()(Contact);
