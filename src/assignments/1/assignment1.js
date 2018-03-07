import React, { Component } from 'react'

import PairParent from './bonus/PairParent'

class Assignment1 extends Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      total: 0,
    }
  }

  updateTotal = (value) => {
    this.setState({ total: this.state.total + value })
  }

  render() {
    return (
      <div>
        <section className="firstComponent">
          <h2>Assignment 1</h2>
          <h1>TOTAL: {this.state.total}</h1>
          <Child onChange={this.updateTotal} />
          <Child onChange={this.updateTotal} />
        </section>

        <section className="secondComponent">
          <h3>Bonus</h3>

          <PairParent />
        </section>
      </div>
    );
  }
}

class Child extends React.Component {
  constructor() {
    super()
    // fill this in

    this.state = {
      num: 100,
      value: '1',
      multiplier: 1
    }
  }

  multiply = (event) => {
    this.setState({ multiplier: this.state.value })
    const childSubTotal = this.state.num * this.state.value
    this.props.onChange(childSubTotal)
    event.preventDefault()
  }

  render() {
    return (
      <div>
        <h3>{this.state.num * this.state.multiplier}</h3>

        <input
          type="number"
          value={this.state.value}
          onChange={(event) => {
            this.setState({ value: event.target.value })
          }}
        />

        <button onClick={this.multiply}>MULTIPLY</button>
      </div>
    )
  }
}

export default Assignment1;


// https://gist.github.com/faceyspacey/229319b9b7cc9c07188e6d9f313bafef
