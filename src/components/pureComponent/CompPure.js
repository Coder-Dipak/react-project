import React, {PureComponent } from 'react'

export default class CompPure extends PureComponent {
    state={color:'red'}
    ChangeColor=()=>{
        this.setState({color:'red'})
        //this will not call the render method as pure component compares old and new value.this will add a extra check feature
    }
  render() {
    console.log('render() method called')
    return <>
      <div>color value is {this.state.color}</div>
      <button onClick={this.ChangeColor}>change color</button>
    </>
  }
}

// all the function component bydefault pure componets so we dont have to worry much
