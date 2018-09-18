import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { compose } from 'redux';
// import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import PropTypes from 'prop-types';

class AddPost extends Component {
  state = {
    title: '',
    description: '',
    text: ''
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const newPost = this.state;

    const { firestore } = this.props;

    firestore
      .add({ collection: 'posts' }, newPost)
      .then(() => this.props.history.push('/posts'));
  };
  render() {
    return (
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
                  <span className="card-title">Add Post</span>
                  <form className="s12" onSubmit={this.onSubmit}>
                    <div className="row">
                      <i className="prefix fas fa-heading" />
                      <input
                        placeholder="Title"
                        id="title"
                        type="text"
                        className="validate"
                        name="title"
                        onChange={this.onChange}
                        value={this.state.title}
                      />
                      <label htmlFor="first_name">Title</label>
                    </div>
                    <div className="row">
                      <i className="prefix fas fa-bone" />
                      <input
                        placeholder="Description"
                        id="description"
                        type="text"
                        name="description"
                        className="validate"
                        onChange={this.onChange}
                        value={this.state.description}
                      />
                      <label htmlFor="description">Description</label>
                    </div>
                    <div className="row">
                      <div className="input-field col s12">
                        <i
                          className="prefix fas fa-keyboard
                        "
                        />
                        <textarea
                          id="textarea1"
                          name="text"
                          className="materialize-textarea"
                          onChange={this.onChange}
                          value={this.state.text}
                        />
                        <label htmlFor="textarea1">Text</label>
                      </div>
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

AddPost.propTypes = {
  firestore: PropTypes.object.isRequired
};

export default firestoreConnect()(AddPost);
