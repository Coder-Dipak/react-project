import React, { Component } from 'react'

export default class StateObj extends Component {
  state={
    counter:0,//state variable can be accessed through this.object.variableName
  }
  increment=()=>{
    // this.state.counter=this.state.counter+1; //not the rightway to update state variable but we can access that varible only 
    this.setState({counter:this.state.counter+1})     //rightway to update a state variable via setState() method
  };
  render() {
    return <>
    <div>react will take resposibility to update any change to state or prop varibles</div>

    <div>counter value is : {this.state.counter}</div>
    <button className='btn btn-primary' onClick={this.increment}>click me for increament</button>
  </>
  }
}
