import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  UserIsAuthenticated,
  UserIsNotAuthenticated
} from './components/utils/auth';
import { Provider } from 'react-redux';
import store from './store/store';

import './App.css';

import Navbar from './components/nav/Navbar';
import Sidenav from './components/nav/Sidenav';
import Home from './components/layout/Home';
import Dashboard from './components/layout/Dashboard';
import Posts from './components/posts/Posts';
import AddPost from './components/posts/AddPost';
import EditPost from './components/posts/EditPost';
import PostDetail from './components/posts/PostDetail';
import Login from './components/auth/Login';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="root">
            <Navbar />
            <Sidenav />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route
                path="/dashboard"
                exact
                component={UserIsAuthenticated(Dashboard)}
              />
              <Route
                path="/posts"
                exact
                component={UserIsNotAuthenticated(Posts)}
              />
              <Route
                path="/posts/add"
                exact
                component={UserIsAuthenticated(AddPost)}
              />
              <Route
                path="/posts/edit/:id"
                exact
                component={UserIsAuthenticated(EditPost)}
              />
              <Route
                path="/posts/:id"
                exact
                component={UserIsNotAuthenticated(PostDetail)}
              />
              <Route
                path="/login"
                exact
                component={UserIsNotAuthenticated(Login)}
              />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
