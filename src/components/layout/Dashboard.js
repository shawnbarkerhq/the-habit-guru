import React, { Component } from 'react';

import Posts from '../posts/Posts';
import QuoteList from '../ui/quote/QuoteList';
import EmailList from '../ui/newsletter/EmailList';
import ContactList from '../ui/contact/ContactList';
class Dashboard extends Component {
  componentDidMount = () => {
    var el = document.querySelectorAll('.tabs');
    var instance = window.M.Tabs.init(el);
  };

  render() {
    return (
      <div>
        <h1>Dashboard</h1>
        <div className="row">
          <div className="col s12">
            <ul className="tabs">
              <li className="tab col s3">
                <a href="#test1">Posts</a>
              </li>
              <li className="tab col s3">
                <a className="active" href="#test2">
                  Quotes
                </a>
              </li>
              <li className="tab col s3">
                <a href="#test3">Emails</a>
              </li>
              <li className="tab col s3">
                <a href="#test4">Contacts</a>
              </li>
            </ul>
          </div>
          <div id="test1" className="col s12">
            <Posts />
          </div>
          <div id="test2" className="col s12">
            <QuoteList />
          </div>
          <div id="test3" className="col s12">
            <EmailList />
          </div>
          <div id="test4" className="col s12">
            <ContactList />
          </div>
        </div>
      </div>
    );
  }
}
export default Dashboard;
