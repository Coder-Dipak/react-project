import React from 'react'
// import { Component } from 'react';
import { PureComponent } from 'react'//for using Purecomponent should be imported

// pureComponent concept is only for class components

//when a component extends component,it is called normal component
// export default class componentDemo extends Component {
//   render() {
//     return (
//       <div>Class component</div>
//     )
//   }
// }

//when a component extends Purecomponent,it is called pure component
export default class PureCompDemo extends PureComponent{
  render() {
    return (
      <div>class pure-component</div>
    )
  }
}
