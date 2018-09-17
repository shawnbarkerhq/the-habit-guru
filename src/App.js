import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/nav/Navbar';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="root">
          <Navbar />
          <h1>Title</h1>
        </div>
      </Router>
    );
  }
}

export default App;
