import React, { Component } from 'react'

export default class ForceUpdateClass extends Component {
  counter=0;//instance variable(class variables),no need of var let const
  increment=()=>{
    this.counter=this.counter+1;//for class variables can be accessed by this keyword.
    console.log(this.counter);
    //this.forceUpdate();  //this method will force react to execute render method to update automatically or we can update via a refresh burtton manually
  };
  // refresh=()=>{
  //   this.forceUpdate()
  // };

  render() {
    // render() wont be called for any local variable change after page load happens
    // that is react is not responsible for watching any local variable change in both function and class component 
    return <>
      <div>[ In class Component:forceUpdate() method availble]</div>

      <div>counter value is : {this.counter}</div>
      <button className='btn btn-primary' onClick={this.increment}>click me for increament</button>
      <button className='btn btn-success' onClick={this.refresh}>refresh</button>
    </>
    
  }
}

