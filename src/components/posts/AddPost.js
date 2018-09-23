import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { compose } from 'redux';
// import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import PropTypes from 'prop-types';

class AddPost extends Component {
  state = {
    title: '',
    subtitle: '',
    description: '',
    intro: '',
    quote1: '',
    quote2: '',
    quote3: '',
    heading1: '',
    content1: '',
    heading2: '',
    content2: '',
    heading3: '',
    content3: '',
    heading4: '',
    content4: '',
    heading5: '',
    content5: '',
    heading6: '',
    content6: '',
    heading7: '',
    content7: '',
    heading8: '',
    content8: ''
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
                      <i className="prefix fas fa-heading" />
                      <input
                        placeholder="SubTitle"
                        id="subtitle"
                        type="text"
                        className="validate"
                        name="subtitle"
                        onChange={this.onChange}
                        value={this.state.subtitle}
                      />
                      <label htmlFor="first_name">Subtitle</label>
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
                      <i className="prefix fas fa-bone" />
                      <input
                        placeholder="Quote #1"
                        id="quote1"
                        type="text"
                        name="quote1"
                        className="validate"
                        onChange={this.onChange}
                        value={this.state.quote}
                      />
                      <label htmlFor="quote1">Quote #1</label>
                    </div>
                    <div className="row">
                      <i className="prefix fas fa-bone" />
                      <input
                        placeholder="Quote #2"
                        id="quote2"
                        type="text"
                        name="quote2"
                        className="validate"
                        onChange={this.onChange}
                        value={this.state.quote}
                      />
                      <label htmlFor="quote2">Quote #2</label>
                    </div>
                    <div className="row">
                      <i className="prefix fas fa-bone" />
                      <input
                        placeholder="Quote #3"
                        id="quote3"
                        type="text"
                        name="quote3"
                        className="validate"
                        onChange={this.onChange}
                        value={this.state.quote}
                      />
                      <label htmlFor="quote3">Quote #3</label>
                    </div>
                    <div className="row">
                      <i
                        className="prefix fas fa-keyboard
                        "
                      />
                      <textarea
                        id="textarea1"
                        name="text1"
                        className="materialize-textarea"
                        onChange={this.onChange}
                        value={this.state.intro}
                      />
                      <label htmlFor="intro">Intro</label>
                    </div>
                    <div className="row">
                      <i className="prefix fas fa-bone" />
                      <input
                        placeholder="Heading #1"
                        id="heading1"
                        type="text"
                        name="heading1"
                        className="validate"
                        onChange={this.onChange}
                        value={this.state.heading1}
                      />
                      <label htmlFor="heading1">Heading #1</label>
                    </div>
                    <div className="row">
                      <div className="input-field col s12">
                        <i
                          className="prefix fas fa-keyboard
                        "
                        />
                        <textarea
                          id="textarea1"
                          name="text1"
                          className="materialize-textarea"
                          onChange={this.onChange}
                          value={this.state.content1}
                        />
                        <label htmlFor="textarea1">Content #1</label>
                      </div>
                    </div>
                    <div className="row">
                      <i className="prefix fas fa-bone" />
                      <input
                        placeholder="Heading #2"
                        id="heading2"
                        type="text"
                        name="heading2"
                        className="validate"
                        onChange={this.onChange}
                        value={this.state.heading2}
                      />
                      <label htmlFor="heading2">Heading #2</label>
                    </div>
                    <div className="row">
                      <div className="input-field col s12">
                        <i
                          className="prefix fas fa-keyboard
                        "
                        />
                        <textarea
                          id="textarea2"
                          name="text2"
                          className="materialize-textarea"
                          onChange={this.onChange}
                          value={this.state.content2}
                        />
                        <label htmlFor="textarea2">Content #2</label>
                      </div>
                    </div>
                    <div className="row">
                      <i className="prefix fas fa-bone" />
                      <input
                        placeholder="Heading #3"
                        id="heading1"
                        type="text"
                        name="heading1"
                        className="validate"
                        onChange={this.onChange}
                        value={this.state.heading3}
                      />
                      <label htmlFor="heading3">Heading #3</label>
                    </div>
                    <div className="row">
                      <div className="input-field col s12">
                        <i
                          className="prefix fas fa-keyboard
                        "
                        />
                        <textarea
                          id="textarea3"
                          name="text3"
                          className="materialize-textarea"
                          onChange={this.onChange}
                          value={this.state.content3}
                        />
                        <label htmlFor="textarea3">Content #3</label>
                      </div>
                    </div>
                    <div className="row">
                      <i className="prefix fas fa-bone" />
                      <input
                        placeholder="Heading #4"
                        id="heading1"
                        type="text"
                        name="heading1"
                        className="validate"
                        onChange={this.onChange}
                        value={this.state.heading4}
                      />
                      <label htmlFor="heading4">Heading #4</label>
                    </div>
                    <div className="row">
                      <div className="input-field col s12">
                        <i
                          className="prefix fas fa-keyboard
                        "
                        />
                        <textarea
                          id="textarea4"
                          name="text4"
                          className="materialize-textarea"
                          onChange={this.onChange}
                          value={this.state.content4}
                        />
                        <label htmlFor="textarea4">Content #4</label>
                      </div>
                    </div>
                    <div className="row">
                      <i className="prefix fas fa-bone" />
                      <input
                        placeholder="Heading #5"
                        id="heading1"
                        type="text"
                        name="heading1"
                        className="validate"
                        onChange={this.onChange}
                        value={this.state.heading5}
                      />
                      <label htmlFor="heading5">Heading #5</label>
                    </div>
                    <div className="row">
                      <div className="input-field col s12">
                        <i
                          className="prefix fas fa-keyboard
                        "
                        />
                        <textarea
                          id="textarea5"
                          name="text5"
                          className="materialize-textarea"
                          onChange={this.onChange}
                          value={this.state.content5}
                        />
                        <label htmlFor="textarea5">Content #5</label>
                      </div>
                    </div>
                    <div className="row">
                      <i className="prefix fas fa-bone" />
                      <input
                        placeholder="Heading #6"
                        id="heading1"
                        type="text"
                        name="heading1"
                        className="validate"
                        onChange={this.onChange}
                        value={this.state.heading6}
                      />
                      <label htmlFor="heading6">Heading #6</label>
                    </div>
                    <div className="row">
                      <div className="input-field col s12">
                        <i
                          className="prefix fas fa-keyboard
                        "
                        />
                        <textarea
                          id="textarea6"
                          name="text6"
                          className="materialize-textarea"
                          onChange={this.onChange}
                          value={this.state.content6}
                        />
                        <label htmlFor="textarea6">Content #6</label>
                      </div>
                    </div>
                    <div className="row">
                      <i className="prefix fas fa-bone" />
                      <input
                        placeholder="Heading #7"
                        id="heading7"
                        type="text"
                        name="heading7"
                        className="validate"
                        onChange={this.onChange}
                        value={this.state.heading7}
                      />
                      <label htmlFor="heading7">Heading #7</label>
                    </div>
                    <div className="row">
                      <div className="input-field col s12">
                        <i
                          className="prefix fas fa-keyboard
                        "
                        />
                        <textarea
                          id="textarea7"
                          name="text7"
                          className="materialize-textarea"
                          onChange={this.onChange}
                          value={this.state.content7}
                        />
                        <label htmlFor="textarea7">Content #7</label>
                      </div>
                    </div>
                    <div className="row">
                      <i className="prefix fas fa-bone" />
                      <input
                        placeholder="Heading #8"
                        id="heading8"
                        type="text"
                        name="heading8"
                        className="validate"
                        onChange={this.onChange}
                        value={this.state.heading8}
                      />
                      <label htmlFor="heading7">Heading #8</label>
                    </div>
                    <div className="row">
                      <div className="input-field col s12">
                        <i
                          className="prefix fas fa-keyboard
                        "
                        />
                        <textarea
                          id="textarea8"
                          name="text8"
                          className="materialize-textarea"
                          onChange={this.onChange}
                          value={this.state.content8}
                        />
                        <label htmlFor="textarea8">Content #8</label>
                      </div>
                    </div>
                    <div className="row">
                      <i className="prefix fas fa-bone" />
                      <input
                        placeholder="Heading #1"
                        id="heading1"
                        type="text"
                        name="heading1"
                        className="validate"
                        onChange={this.onChange}
                        value={this.state.heading1}
                      />
                      <label htmlFor="heading8">Heading #8</label>
                    </div>
                    <div className="row">
                      <div className="input-field col s12">
                        <i
                          className="prefix fas fa-keyboard
                        "
                        />
                        <textarea
                          id="textarea8"
                          name="text8"
                          className="materialize-textarea"
                          onChange={this.onChange}
                          value={this.state.content8}
                        />
                        <label htmlFor="textarea8">Content #8</label>
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
