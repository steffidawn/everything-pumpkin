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
          <nav className="navbar navbar-inverse navbar-fixed-top">
            <div className="container">
              <a className="navbar-brand" href="#">Pumpkins Direct</a>

              <form className="navbar-form navbar-left" role="search">
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Search" />
                </div>
                <button type="submit" className="btn btn-default">Submit!</button>
              </form>

              <div id="link-container">
                <Link to = "/" className="link"> Go to Home </Link> {' '}
                <Link to = "/cart" className="link"> Go to cart </Link> {' '}
              </div>

            </div>
          </nav>
          </div>

          <div id="main-content">
            <Route exact path = "/" component = {Pumpkin} />
            <Route path = "/cart" component = {Cart} />
          </div>


        </div>
      </Router>
    );
  }
}

export default App;
