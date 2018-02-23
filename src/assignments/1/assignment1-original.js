const MyFirstFunctionalComponent = (props) => {
   return (
      <div>
       {props.num + props.multiplier}
      </div>
   )
}


class MyFirstClassComponent extends React.Component {
  constructor() {
    // fill this in
  }

  multiply = () => { // figure out why this method looks different than render and constructor
    // fill this in (clue: it uses `this.setState`)
  }

  render() {
    return (
      <div>
       <MyFirstFunctionalComponent num={100} multiplier={this.state.multiplier} />
       <button onClick={this.multiply}>MULTIPLY!</button>
      </div>
    )
  }
}

// ASSIGNMENT:
// 1) fill in the empty methods
// 2) make this work within CRA
// 3) explain why `multiply` has different syntax than the `render` + `constructor` methods
// 4) rewrite the functional component without braces, parentheses around the JSX, and no `return` keyword
//
// 5) BONUS: create another parent child component pair of components where the parent renders/maps an array
//           of numbers or strings, and for each item creates a `<Child />` component, passing that child
//           component the number or string as a prop
