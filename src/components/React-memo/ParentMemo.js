import React, {Component } from 'react';
import ChildMemo from './ChildMemo';

export default class ParentMemo extends Component{
    state={color:'red',name:'dipak'}//passing 2 state variables color & name
    ChangeColor=()=>{
        this.setState({color:'blue'})
    }
    ChangeName=()=>{
        this.setState({name:'dillip'})
    }
  render() {
    console.log('Parent render() method called')
    return <>
      <div>color value is {this.state.color}</div>
      <div>name value is {this.state.name}</div>

      <button onClick={this.ChangeColor}>change color</button>
      <button onClick={this.ChangeName}>change Name</button>{/* even we didnt passed name prop to child,when ever we change it in parent child also re-renders so we have to use react-memo in child element */}

      <ChildMemo color={this.state.color}/>{/* passing only color prop to its child */}
    </>
  }
}
