import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import PropTypes from 'prop-types';
import Spinner from '../../layout/Spinner';

class EmailList extends Component {
  render() {
    const { emails } = this.props;
    if (emails) {
      return (
        <div className="container">
          <table className="striped centered responsive-table">
            <thead>
              <tr>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {emails.map(email => (
                <tr key={email.id}>
                  <td>{email.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    } else {
      return <Spinner />;
    }
  }
}

EmailList.propTypes = {
  firestore: PropTypes.object.isRequired,
  emails: PropTypes.array
};

export default compose(
  firestoreConnect([{ collection: 'newsletter' }]),
  connect((state, props) => ({
    emails: state.firestore.ordered.newsletter
  }))
)(EmailList);
