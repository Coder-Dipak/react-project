import React, { Component } from 'react';
import EvenNum from './EvenNum';
import OddNum from './OddNum';


export default class LifeCycles_UnmountStage extends Component {
constructor(props) {
  super(props)

  this.state = {
     num:4,
  }
}
increment=()=>{
this.setState({num:this.state.num+1})
}

render() {
  return <>
        <h3>this is the componentwill Unmount concept</h3>
        <p>the number value-{this.state.num}</p>
        <button onClick={this.increment}>num increment</button>
        {  this.state.num%2===0?
           <EvenNum num={this.state.num}/>:
           <OddNum num={this.state.num}/>    }
    
    </>
  }
}
