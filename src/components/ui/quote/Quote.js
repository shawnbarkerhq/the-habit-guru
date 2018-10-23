import React, { Component } from 'react';
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
        <section>
          <div id="slider-quote" className="slider-quote">
            <ul className="slides">
              {quotes.map(quote => (
                <li key={quote.id}>
                  <div className="caption center-align">
                    <h3 className="thg-blue">{quote.quote}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
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
