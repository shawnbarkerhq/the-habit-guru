import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Posts extends Component {
  render() {
    const posts = [
      {
        id: '123',
        title: 'My Blog',
        description: 'My blog description',
        text: 'This is my blog, there are many like it, but this one is mine',
        likes: [
          {
            id: '1234',
            user: 'Tim'
          }
        ],
        comment: [
          {
            id: '12345',
            user: 'Tim',
            text: 'Wow, great blog'
          }
        ]
      }
    ];
    const post = posts.map(post => (
      <div className="row" key={post.id}>
        <div class="col s12 m7">
          <h2 class="header">{post.title}</h2>
          <div class="card horizontal">
            <div class="card-image">
              <img src="https://lorempixel.com/100/190/nature/6" />
            </div>
            <div class="card-stacked">
              <div class="card-content">
                <p>{post.description}</p>
              </div>
              <div class="card-action">
                <Link to={`/post/${post.id}`}>Read Full Post</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    ));
    if (posts) {
      return (
        <div>
          <div className="container">{post}</div>
        </div>
      );
    } else {
      return <h1>Loading</h1>;
    }
  }
}

export default Posts;
