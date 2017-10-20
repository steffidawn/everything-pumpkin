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
      <Router>
        <div>
          <div>
          <nav class="navbar navbar-inverse navbar-fixed-top">
            <div class="container">
              <a class="navbar-brand" href="#">Pumpkins Direct</a>

              <form className="navbar-form navbar-left" role="search">
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Search" />
                </div>
                <button type="submit" className="btn btn-default">Submit!</button>
              </form>
              <Link to = "/"> Go to Home </Link> {' '}
              <Link to = "/cart"> Go to cart </Link> {' '}

              <p class="navbar-text">Signed in as Pumpkin McGee</p>
            </div>
          </nav>
          </div>
          <Route exact path = "/" component = {Pumpkin} />
          <Route path = "/cart" component = {Cart} />

        </div>
      </Router>
    );
  }
}

export default App;
