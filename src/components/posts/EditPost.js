import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import PropTypes from 'prop-types';
import Spinner from '../layout/Spinner';

class EditPost extends Component {
  constructor(props) {
    super(props);
    //Create Refs
    this.titleInput = React.createRef();
    this.descriptionInput = React.createRef();
    this.textInput = React.createRef();
  }

  onSubmit = e => {
    e.preventDefault();

    const { post, firestore, history } = this.props;

    const updatePost = {
      title: this.titleInput.current.value,
      description: this.descriptionInput.current.value,
      text: this.textInput.current.value
    };

    firestore
      .update({ collection: 'posts', doc: post.id }, updatePost)
      .then(history.push('/posts'));
  };
  render() {
    const { post } = this.props;

    if (post) {
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
                      <span className="card-title">Edit Post</span>
                      <form className="s12" onSubmit={this.onSubmit}>
                        <div className="row">
                          <i className="prefix fas fa-heading" />
                          <input
                            placeholder="Title"
                            id="title"
                            type="text"
                            className="validate"
                            name="title"
                            ref={this.titleInput}
                            defaultValue={post.title}
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
                            ref={this.descriptionInput}
                            defaultValue={post.description}
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
                              ref={this.textInput}
                              defaultValue={post.text}
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
        </div>
      );
    } else {
      return <Spinner />;
    }
  }
}

EditPost.propTypes = {
  firestore: PropTypes.object.isRequired
};

export default compose(
  firestoreConnect(props => [
    { collection: 'posts', storeAs: 'post', doc: props.match.params.id }
  ]),
  connect(({ firestore: { ordered } }, props) => ({
    post: ordered.post && ordered.post[0]
  }))
)(EditPost);
