import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import PropTypes from 'prop-types';
import Spinner from '../../layout/Spinner';

class EditQuote extends Component {
  constructor(props) {
    super(props);
    //Create Refs
    this.quoteInput = React.createRef();
  }

  onSubmit = e => {
    e.preventDefault();

    const { quote, firestore, history } = this.props;

    const updateQuote = {
      quote: this.quoteInput.current.value
    };

    firestore
      .update({ collection: 'quotes', doc: quote.id }, updateQuote)
      .then(history.push('/'));
  };
  render() {
    const { quote } = this.props;

    if (quote) {
      return (
        <div>
          <div>
            <div className="container">
              <div className="row">
                <div className="col s12 m6 offset-m3">
                  <Link to="/posts" className="waves-effect waves-light btn">
                    <i className="fas fa-arrow-circle-left left" />
                    Back to posts
                  </Link>

                  <div className="card">
                    <div className="card-content">
                      <span className="card-title">Edit Quote</span>
                      <form className="s12" onSubmit={this.onSubmit}>
                        <div className="row">
                          <i className="prefix fas fa-heading" />
                          <input
                            placeholder="quote"
                            id="quote"
                            type="text"
                            className="validate"
                            name="quote"
                            ref={this.quoteInput}
                            defaultValue={quote.quote}
                          />
                          <label htmlFor="quote">Quote</label>
                        </div>
                        <input
                          type="submit"
                          className="waves-effect waves-light btn"
                          name="submit"
                          id="submit"
                          value="Submit"
                        />
                      </form>
                    </div>
                    <div class="card-action" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return <Spinner />;
    }
  }
}

EditQuote.propTypes = {
  firestore: PropTypes.object.isRequired
};

export default compose(
  firestoreConnect(props => [
    { collection: 'quotes', storeAs: 'quote', doc: props.match.params.id }
  ]),
  connect(({ firestore: { ordered } }, props) => ({
    quote: ordered.quote && ordered.quote[0]
  }))
)(EditQuote);
