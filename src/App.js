import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';

import './App.css';

import Navbar from './components/nav/Navbar';
import Home from './components/layout/Home';
import Dashboard from './components/layout/Dashboard';
import Posts from './components/layout/Posts';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="root">
            <Navbar />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/dashboard" exact component={Dashboard} />
              <Route path="/posts" exact component={Posts} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
