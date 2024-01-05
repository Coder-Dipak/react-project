// how to apply props destruring in a class component
import React, { Component } from 'react'

export default class PropsDestructuringClass extends Component {
  render() {
      let {name,msg}=this.props
    // return <h2> Hi {this.props.name},{this.props.msg}</h2>
    return <h2> Hi {name},{msg}</h2>
  }
}
