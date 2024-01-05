import React, { Component } from 'react'

export default class HandlerSingleClass extends Component {
  state={num1:0,num2:0,result:""}
/*
  changeHandler1 = (event) => {
  let value = +event.target.value; 
  this.setState({num1:value})
  };
  changeHandler2 = (event) => {
  let value = +event.target.value; 
  this.setState({num2:value})
  };
*/
  changeHandler = (event) => {
  let value = +event.target.value;  //fetching the input value  
  let name=event.target.name        //fetching the key like num1/num2
  this.setState({[name]:value})     //updating the respective values
  };

  addition=()=>{
    this.setState({result:`addition of  ${this.state.num1} & ${this.state.num2} is  ${this.state.num1 + this.state.num2}`})
  }
  

  render() {
    return <>
      <h1>Addition Demo on click with event concept</h1>

      {/* <input onChange={this.changeHandler1} /> */}
      {/* <input onChange={this.changeHandler2} /> */}

      {/* using single changeHandler for multiple elements */}
      <input name='num1' onChange={this.changeHandler} />
      <input name='num2' onChange={this.changeHandler} />

      <button onClick={this.addition}>Add the numbers</button>
      
      <div>{this.state.result}</div>
    </>
  }
}



