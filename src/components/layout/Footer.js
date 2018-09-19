import React, { Component } from 'react';

import FooterBottom from './FooterBottom';

class Footer extends Component {
  render() {
    return (
      <footer id="sitemap" className="page-footer black">
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h5 className="thg-red">
                TheHabit
                <span className="thg-thin-font thg-blue">Guru</span>
              </h5>
              <p className="grey-text text-lighten-4">
                4645 Ruffner Steet
                <br /> STE O<br /> San Diego, CA 92111
              </p>
            </div>
            <div className="col l4 offset-l2 s12">
              <h5 className="thg-red">Links</h5>
              <ul>
                <li>
                  <a className="grey-text text-lighten-3" href="#!">
                    About
                  </a>
                </li>
                <li>
                  <a className="grey-text text-lighten-3" href="#!">
                    Blog
                  </a>
                </li>
                <li>
                  <a className="grey-text text-lighten-3" href="#!">
                    Gallery
                  </a>
                </li>
                <li>
                  <a className="grey-text text-lighten-3" href="#!">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <FooterBottom />
      </footer>
    );
  }
}

export default Footer;
