import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import PropTypes from 'prop-types';
import Spinner from '../layout/Spinner';

class Posts extends Component {
  render() {
    const { posts } = this.props;

    if (posts) {
      return (
        <div>
          <Helmet>
            <title>The Habit Guru Blog Posts</title>
          </Helmet>
          <div className="fixed-action-btn">
            <Link to="/posts/add" className="btn-floating btn-large red">
              <i className="fas fa-plus-circle" />
            </Link>
          </div>
          <div className="container">
            {posts.map(post => (
              <div className="row" key={post.id}>
                <div className="col s12 m6 offset-m3">
                  <h2 className="header center-align">{post.title}</h2>
                  <div className="card horizontal">
                    <div className="card-image">
                      <img
                        src="https://via.placeholder.com/350x150"
                        alt="Default"
                      />
                    </div>
                    <div className="card-stacked">
                      <div className="card-content">
                        <p>{post.description}</p>
                      </div>
                      <div className="card-action">
                        <Link to={`/posts/${post.id}`}>Read Full Post</Link>
                      </div>
                    </div>
                  </div>
                </div>
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

Posts.propTypes = {
  firestore: PropTypes.object.isRequired,
  posts: PropTypes.array
};

export default compose(
  firestoreConnect([{ collection: 'posts' }]),
  connect((state, props) => ({
    posts: state.firestore.ordered.posts
  }))
)(Posts);
