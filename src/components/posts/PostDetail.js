import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import PropTypes from 'prop-types';
import Spinner from '../layout/Spinner';

class PostDetail extends Component {
  onDeleteClick = e => {
    const { post, firestore } = this.props;

    firestore
      .delete({ collection: 'posts', doc: post.id })
      .then(() => this.props.history.push('/posts'));
  };
  render() {
    const { post } = this.props;
    if (post) {
      return (
        <div>
          <div className="container">
            <div className="row center">
              <div className="col s6">
                <Link to="/posts" className="waves-effect waves-light btn">
                  <i className="fas fa-arrow-circle-left left" />
                  Back to posts
                </Link>
              </div>
              <div className="col s6">
                <Link
                  to={`/posts/edit/${post.id}`}
                  className="waves-effect waves-light btn"
                >
                  <i class="fas fa-edit left" />
                  Edit
                </Link>
                <Link
                  to="/posts"
                  className="waves-effect waves-light btn"
                  onClick={this.onDeleteClick}
                >
                  <i class="fas fa-trash left" />
                  Delete
                </Link>
              </div>
            </div>
            <hr />
            <div className="container row blog-container">
              <p>August 20th, 2018</p>
              <h3>{post.title}</h3>
              <h5>The habits of the unemployable</h5>
              <p>Comments</p>
              <div className="row">
                <div className="card-action social">
                  <Link
                    to="https://facebook.com/thehabitguru"
                    target="_blank"
                    className="thg-blue"
                    rel="noreferrer noopener"
                  >
                    <i className="fab fa-facebook fa-2x" />
                  </Link>
                  <Link
                    to="https://twitter.com/thehabitguru"
                    target="_blank"
                    className="thg-blue"
                    rel="noreferrer noopener"
                  >
                    <i className="fab fa-twitter fa-2x" />
                  </Link>
                  <Link
                    to="https://linkedin.com/thehabitguru"
                    target="_blank"
                    className="thg-blue"
                    rel="noreferrer noopener"
                  >
                    <i className="fab fa-linkedin fa-2x" />
                  </Link>
                  <Link
                    to="https://instagram.com/thehabitguru"
                    target="_blank"
                    className="thg-blue"
                    rel="noreferrer noopener"
                  >
                    <i className="fab fa-instagram fa-2x" />
                  </Link>
                  <Link
                    to="https://pinterest.com/thehabitguru"
                    target="_blank"
                    className="thg-blue"
                    rel="noreferrer noopener"
                  >
                    <i className="fab fa-pinterest-square fa-2x" />
                  </Link>
                  <Link
                    to="https://youtube.com/thehabitguru"
                    target="_blank"
                    className="thg-blue"
                    rel="noreferrer noopener"
                  >
                    <i className="fab fa-youtube fa-2x" />
                  </Link>
                </div>
              </div>
              <div className="row">
                <div className="">
                  <p>
                    <span className="bold"> Author:</span> Joshua "Tree" Barker
                  </p>
                </div>
                <div className="categories">
                  <span
                    className="new badge thg-red-bg"
                    data-badge-caption="Habits"
                  />
                  <span
                    className="new badge thg-red-bg"
                    data-badge-caption="Music"
                  />
                </div>
              </div>
              <div className="row">
                <p>{post.text}</p>
              </div>
              <h5>Conclusion</h5>
              <p>
                In conclusion to form better habits and to become the impresario
                of your industry you should become more aware of the following
                things: Focus, Greed, Complacency, bettering your craft or
                skills, seeking out Mentorship, Not looking back, Realizing the
                bigger picture, be present, respecting others and yourself,
                Giving back, Staying motivated, Staying Positive.
              </p>
              <hr className="thg-red" />
              <p>
                If you have more questions in regards to habits and would like
                to understand more about habits and self improvement go to
                www.TheHabitGuru.US. Don’t forget to subscribe to this blog so
                you can stay up-to-date on the latest habit methods,
                disciplines, processes, and routines for a better you.
              </p>
              <div className="row">
                <div className="card-action social">
                  <Link
                    to="https://facebook.com/thehabitguru"
                    target="_blank"
                    className="thg-blue"
                    rel="noreferrer noopener"
                  >
                    <i className="fab fa-facebook fa-2x" />
                  </Link>
                  <Link
                    to="https://twitter.com/thehabitguru"
                    target="_blank"
                    className="thg-blue"
                    rel="noreferrer noopener"
                  >
                    <i className="fab fa-twitter fa-2x" />
                  </Link>
                  <Link
                    to="https://linkedin.com/thehabitguru"
                    target="_blank"
                    className="thg-blue"
                    rel="noreferrer noopener"
                  >
                    <i className="fab fa-linkedin fa-2x" />
                  </Link>
                  <Link
                    to="https://instagram.com/thehabitguru"
                    target="_blank"
                    className="thg-blue"
                    rel="noreferrer noopener"
                  >
                    <i className="fab fa-instagram fa-2x" />
                  </Link>
                  <Link
                    to="https://pinterest.com/thehabitguru"
                    target="_blank"
                    className="thg-blue"
                    rel="noreferrer noopener"
                  >
                    <i className="fab fa-pinterest-square fa-2x" />
                  </Link>
                  <Link
                    to="https://youtube.com/thehabitguru"
                    target="_blank"
                    className="thg-blue"
                    rel="noreferrer noopener"
                  >
                    <i className="fab fa-youtube fa-2x" />
                  </Link>
                </div>
              </div>
              <div>
                <p>Digital Signature</p>
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

PostDetail.propTypes = {
  firestore: PropTypes.object.isRequired
};

export default compose(
  firestoreConnect(props => [
    { collection: 'posts', storeAs: 'post', doc: props.match.params.id }
  ]),
  connect(({ firestore: { ordered } }, props) => ({
    post: ordered.post && ordered.post[0]
  }))
)(PostDetail);
