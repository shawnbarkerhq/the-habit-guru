import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import PropTypes from 'prop-types';
import Spinner from '../../layout/Spinner';

class ContactList extends Component {
  render() {
    const { contacts } = this.props;
    if (contacts) {
      return (
        <div className="container ">
          {contacts.map(contact => (
            <div class="row">
              <div class="col s12 m6 offset-m3">
                <div class="card thg-blue-bg">
                  <div class="card-content white-text">
                    <span class="card-title">{contact.name}</span>
                    <p>{contact.email}</p>
                    <p>{contact.phone}</p>
                    <p>{contact.message}</p>
                  </div>
                  <div class="card-action">
                    <a href="#">This is a link</a>
                    <a href="#">This is a link</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      );
    } else {
      return <Spinner />;
    }
  }
}

ContactList.propTypes = {
  firestore: PropTypes.object.isRequired,
  contacts: PropTypes.array
};

export default compose(
  firestoreConnect([{ collection: 'contacts' }]),
  connect((state, props) => ({
    contacts: state.firestore.ordered.contacts
  }))
)(ContactList);
