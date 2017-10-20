import React, { Component } from 'react';
import Pumpkin from "./Pumpkin";
import Cart from "./Cart";
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <div>
        <h1>This is the app component</h1>
        <ul>
          <li>wassup</li>
        </ul>

      <Router>
      <div>
        <nav>
          <Link to = "/"> Go to Home </Link> {' '}
          <Link to = "/cart"> Go to cart </Link> {' '}
        </nav>
        <Route exact path = "/" component = {Pumpkin} />
        <Route path = "/cart" component = {Cart} />
      </div>
      </Router>

    </div>
    );
  }
}

export default App;
