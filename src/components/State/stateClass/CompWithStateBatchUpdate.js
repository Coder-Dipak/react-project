import React, { Component } from 'react'

export default class CompWithStateBatchUpdate extends Component {
  constructor(props) {   //in industry standard state object will be placed inside a constructor
    super(props)
    this.state = {counter:0,}
    }
    incrementBatch=()=>{//for batch update at a single click 5times
      this.increment();this.increment();this.increment();this.increment();this.increment();
    }
    increment=()=>{
      //this.setState({counter:this.state.counter+1},) //this wont work in batch update
      this.setState(prevState => ({ counter: prevState.counter + 1 }));
      //for batch update or update over update inside the Dom we have to use a function(prevState)that  will capture the previous state values
    }

  render() {
    console.log('render method called')
    return <>
    <h3>this is for explaining a component with state and setState()</h3>

    <div>counter value is : {this.state.counter}</div>
    <button className='btn btn-primary' onClick={this.increment}> Increment</button>
    <button className='btn btn-primary' onClick={this.incrementBatch}>Increment-5times</button>

    </>
  }
}
