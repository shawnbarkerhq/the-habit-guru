import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';

import Navbar from './components/nav/Navbar';
import Home from './components/layout/Home';
import Dashboard from './components/layout/Dashboard';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="root">
          <Navbar />
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/dashboard" component={Dashboard} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
