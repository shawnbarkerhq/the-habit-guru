import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import PropTypes from 'prop-types';
import Spinner from '../../layout/Spinner';

class QuoteList extends Component {
  onDeleteClick = e => {
    const { quote, firestore } = this.props;

    firestore
      .delete({ collection: 'quotes', doc: quote.id })
      .then(() => this.props.history.push('/'));
  };
  render() {
    const { quotes } = this.props;

    if (quotes) {
      return (
        <div className="container">
          <div className="fixed-action-btn">
            <Link to="/quotes/add" className="btn-floating btn-large red">
              <i className="fas fa-plus-circle" />
            </Link>
          </div>
          <div className="col s6">
            <Link to="/" className="waves-effect waves-light btn">
              <i className="fas fa-arrow-circle-left left" />
              Back to home
            </Link>
          </div>

          <div className="container">
            {quotes.map(quote => (
              <div className="row" key={quote.id}>
                <div className="col s6 ">
                  <blockquote>{quote.quote}</blockquote>
                </div>
                <div className="col s6">
                  <Link
                    to={`/quotes/edit/${quote.id}`}
                    className="waves-effect waves-light btn thg-blue-bg"
                  >
                    <i className="fas fa-edit left" />
                    Edit
                  </Link>
                  <Link
                    to="/"
                    className="waves-effect waves-light btn thg-blue-bg"
                    onClick={this.onDeleteClick}
                  >
                    <i className="fas fa-trash left" />
                    Delete
                  </Link>
                </div>
                <hr />
              </div>
            ))}
          </div>
        </div>
      );
    } else {
      return <Spinner />;
    }
  }
}

QuoteList.propTypes = {
  firestore: PropTypes.object.isRequired,
  quotes: PropTypes.array
};

export default compose(
  firestoreConnect([{ collection: 'quotes' }]),
  connect((state, props) => ({
    quotes: state.firestore.ordered.quotes
  }))
)(QuoteList);
