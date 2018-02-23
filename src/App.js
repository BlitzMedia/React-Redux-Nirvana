import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from './assets/blitzlogo.png';
import './App.css';

import Home from './home'
import Assignment1 from './assignments/1/assignment1'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">React/Redux Nirvana</h1>
          </header>

          <nav>
            <Link to={'/'}>Home</Link>
            <Link to={'/assignments/1'}>1st Assignment</Link>
          </nav>

          <main>
            <Route exact path="/" component={Home}></Route>
            <Route path="/assignments/1" component={Assignment1}></Route>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
