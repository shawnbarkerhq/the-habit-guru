import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import PropTypes from 'prop-types';
import Spinner from '../../layout/Spinner';

import slider1 from '../../../assets/images/adventure-asphalt-california.jpg';
import slider2 from '../../../assets/images/abstract-art-circles3.jpg';
import slider3 from '../../../assets/images/fog-foggy-jetty2.jpg';

class BlogSlider extends Component {
  componentDidMount = () => {
    var sliderBlog = document.querySelectorAll('.slider-blog');
    var instanceSliderBlog = window.M.Slider.init(sliderBlog, {
      indicators: true,
      height: 500,
      transition: 600,
      interval: 10000
    });
  };

  render() {
    const { posts } = this.props;

    if (posts) {
      return (
        <div>
          <h4 className="center">
            <span className="thg-red">Blog</span>
            <span className="thg-thin-font">Gallery</span>
          </h4>
          <div class="slider slider-blog">
            <ul class="slides">
              <li>
                <div className="row">
                  {posts.map(post => (
                    <div className="col s12 l4">
                      <Link to={`/posts/${post.id}`}>
                        <div className="card card-blog hoverable">
                          <div className="card-image bslide">
                            <img src={slider1} alt="pic1" />
                          </div>
                          <div className="card-content">
                            <h5>{post.title}</h5>
                            <p>{post.description}</p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                  ;
                </div>
              </li>
            </ul>
          </div>
        </div>
      );
    } else {
      return <Spinner />;
    }
  }
}

BlogSlider.propTypes = {
  firestore: PropTypes.object.isRequired,
  posts: PropTypes.array
};

export default compose(
  firestoreConnect([{ collection: 'posts' }]),
  connect((state, props) => ({
    posts: state.firestore.ordered.posts
  }))
)(BlogSlider);
