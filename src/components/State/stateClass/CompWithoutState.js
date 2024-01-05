import React, { Component } from 'react'

export default class CompWithoutState extends Component {
  counter=0; //on click of incrememt button this value will only change in DOM but not in UI becoz render mothod not re-invoked.
  increment=()=>{
                 this.counter=this.counter+1;
                 console.log(this.counter);
  }
  render() {
    console.log('render method called')
    return <>
    <h3>this is for explaining a component without state</h3>

    <div>counter value is : {this.counter}</div>
    <button className='btn btn-primary' onClick={this.increment}>click me for increament</button>

    </>
  }
}
