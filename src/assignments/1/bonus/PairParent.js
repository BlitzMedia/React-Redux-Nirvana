import React, { Component } from 'react';
import PairChild from './PairChild'

class PairParent extends Component {
  constructor() {
    super();
    this.state = {
      list: [
        1,
        'Two',
        2,
        'Four'
      ]
    }
  }

  render() {
    var list = this.state.list.map((item, index) => {
      return(
        <PairChild item={item} key={index}/>
      )
    })
    return (
      <div>
        <ul>
          {list}
        </ul>
      </div>
    );
  }
}

export default PairParent;
