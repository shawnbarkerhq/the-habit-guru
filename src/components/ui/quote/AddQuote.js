import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { compose } from 'redux';
// import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import PropTypes from 'prop-types';

class AddQuote extends Component {
  state = {
    quote: ''
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const newQuote = this.state;

    const { firestore } = this.props;

    firestore
      .add({ collection: 'quotes' }, newQuote)
      .then(() => this.props.history.push('/'));
  };
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col s12 m6 offset-m3">
              <Link to="/" className="waves-effect waves-light btn">
                <i className="fas fa-arrow-circle-left left" />
                Back to home
              </Link>

              <div className="card">
                <div className="card-content">
                  <span className="card-title">Add Quote</span>
                  <form className="s12" onSubmit={this.onSubmit}>
                    <div className="row">
                      <i className="prefix fas fa-heading" />
                      <input
                        placeholder="Quote"
                        id="quote"
                        type="text"
                        className="validate"
                        name="quote"
                        onChange={this.onChange}
                        value={this.state.quote}
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
    );
  }
}

AddQuote.propTypes = {
  firestore: PropTypes.object.isRequired
};

export default firestoreConnect()(AddQuote);
