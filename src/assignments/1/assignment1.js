import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './a1.css'

class Assignment1 extends Component {
  render() {
    return (
      <div>
        <h2>Assignment 1</h2>

        <MyFirstClassComponent />
      </div>
    );
  }
}

const MyFirstFunctionalComponent = (props) => {
   return (
      <div>
        <h3>{props.num * props.multiplier}</h3>
      </div>
   )
}

class MyFirstClassComponent extends React.Component {
  constructor() {
    super();
    // fill this in

    this.state = {
      multiplier: 1
    }
  }

  multiply = () => { // figure out why this method looks different than render and constructor
    // This looks different because Component methods don't autobind to themselves.
    // If it wasn't written this way, we would have to bind them manually in the constructor, after super();, like so:
    // this.multiply = this.multiply.bind(this)

    // fill this in (clue: it uses `this.setState`)
    // We are not sure what the multiplier should be, so we're multiplying it by itself.

    var newVal = this.state.multiplier * this.state.multiplier

    this.setState({
      multiplier: newVal
    })
  }

  render() {
    return (
      <div>
        <MyFirstFunctionalComponent num={100} multiplier={this.state.multiplier} />

        <form onSubmit={this.handleSubmit}>
          <input type="number" required ref="newMultiplier" />
          <input type="submit" value="Give me a multiplier" />
        </form>

        <br/>

        <button onClick={this.multiply} id="multiply">MULTIPLY!</button>
      </div>
    )
  }

  handleSubmit = (e) => {
    e.preventDefault();
    var newMultiplier = this.refs.newMultiplier.value;
    this.setState({
      multiplier: newMultiplier
    });
  }
}

export default Assignment1;
