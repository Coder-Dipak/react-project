import React, { Component } from "react";

export default class EventDemo2 extends Component {
  constructor(props) {//to create a state variable in class component : rconst
    super(props)
  
    this.state = {
       name:'sachin'
    }
  // this.f1=this.f1.bind(this)                      //now the this-->className:people used to do that for every function there is a binding method,so arrow function came into picture in which this-->className
  }
  
  f1() {                                             //in class component function declaration 
    console.log("This is f1...");
    console.log(this.state.name);//undefined
    // As f1() is a regular function,not arrow function,this refers to where it is called,here this-->button not the class inside which state variable is present
    //to solve we can bind the function with class inside constructor,done in above

  }
  f2 = () => {//with arrow function this-->className where it is written,not where it is called
    console.log("This is f2...");
    console.log(this.state.name);
  };
  render() {
    return (
      <>
        <div>EventDemo2</div>
        <button onClick={this.f1}>invoke f1</button>{/*while calling a function this.functionName  */}
        <button onClick={this.f2}>invoke f2</button>
      </>
    );
  }
}

// so in class component to acess state variable 1.binf the function with class(this.f1.bind(this)) or use arrow function

