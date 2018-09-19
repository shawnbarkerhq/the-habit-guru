import React, { Component } from 'react';

class FooterBottom extends Component {
  render() {
    return (
      <div className="footer-copyright">
        <div className="container">
          © {new Date().getFullYear()} Copyright
          <span className="thg-red"> The Habit Guru</span>
          <span className="right">
            <em>"Don't feel better. Be Better."</em>
          </span>
        </div>
      </div>
    );
  }
}

export default FooterBottom;
