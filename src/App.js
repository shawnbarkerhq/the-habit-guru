import React, { Component } from 'react';
import './App.css';
import Navbar from './components/nav/Navbar';

class App extends Component {
  render() {
    return (
      <div className="root">
        <Navbar />
        <h1>Title</h1>
      </div>
    );
  }
}

export default App;
