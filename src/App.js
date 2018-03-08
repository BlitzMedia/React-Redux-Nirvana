import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './assets/css/App.css';

import Home from './home'
import Assignment1 from './assignments/1/assignment1'
import Calculator from './assignments/2/a/assignment2a'
import Website from './assignments/2/b/assignment2b'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header role="banner">
            <div className="container">
              <h1 className="logo"><span role="img" aria-label="Blitz!">⚡</span> React/Redux Nirvana</h1>

              <nav>
                <Link to={'/'}>Home</Link>
                <Link to={'/assignments/1'}>1st</Link>
                <Link to={'/assignments/2/a'}>2nd-A</Link>
                <Link to={'/assignments/2/b'}>2nd-B</Link>
              </nav>
            </div>
          </header>

          <main role="main" className="container">
            <Route exact path="/" component={Home}></Route>
            <Route path="/assignments/1" component={Assignment1}></Route>
            <Route path="/assignments/2/a" component={Calculator}></Route>
            <Route path="/assignments/2/b" component={Website}></Route>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
