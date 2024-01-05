import React, {Component } from 'react'

export default class CompNormal extends Component {
    state={color:'red'}
    ChangeColor=()=>{
        //this.setState({color:'blue'})//this will call the render method blue<=red (override not comparison on normal component)
        this.setState({color:'red'})//even no value change will call the render method as normal component understand it as over writing new with old ones
    }
  render() {
    console.log('render() method called')
    return <>
      <div>color value is {this.state.color}</div>
      <button onClick={this.ChangeColor}>change color</button>
      {/* in react when there is a prop or state change render method calls */}
    </>
  }
}
