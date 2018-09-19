import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import PropTypes from 'prop-types';
import Spinner from '../../layout/Spinner';

class Quotes extends Component {
  render() {
    const { quotes } = this.props;
    if (quotes) {
      return (
        <div className="quote">
          {quotes.map(quote => (
            <blockquote key={quote.id}>{quote.quote}</blockquote>
          ))}
        </div>
      );
    } else {
      return <Spinner />;
    }
  }
}

Quotes.propTypes = {
  firestore: PropTypes.object.isRequired,
  quotes: PropTypes.array
};

export default compose(
  firestoreConnect([{ collection: 'quotes' }]),
  connect((state, props) => ({
    quotes: state.firestore.ordered.quotes
  }))
)(Quotes);
