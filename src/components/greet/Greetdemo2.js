import React, { Component } from 'react'

export default class Greetdemo2 extends Component {
  render() {
    // in case of class component to access props  this.props.attributeName should be used.
    return <h2> hello {this.props.name}, {this.props.msg}</h2>
  }
}
