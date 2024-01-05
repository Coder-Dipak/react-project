// Every component in React goes through a lifecycle of events.
// The three phases are: 
// 	1.Mounting - (constructor,getDerivedStateFromProps,render,componentDidMount)
// 	2.Updating - (getDerivedStateFromProps,shouldComponentUpdate,render,getSnapshotBeforeUpdate, componentDidUpdate)
// 	3.Unmounting - (componentWillUnmount)

// here we expained mounting phase in sequence
import React, { Component } from 'react'
export default class LifeCycles_MountingStage extends Component {
    constructor(props){                          /*constructor method:state variables should be declared inside constructor*/
      super(props)
      this.state = {
         color:'red'
      }
      console.log('constructor() called')
    }

    static getDerivedStateFromProps(props,state){/*getDerivedStateFromProps hooks which is a static method*/
    console.log(' getDerivedStateFromProps()  called')
    return {color:props.color}//{stateVariable:propsVariable}
    // if we want to update state variable with the variable coming from its parent-props as its name suggests.
    //it takes 2 inputs props,state,read the prop variables and assign to the state variables
        
    }

  render() {                              /*render  hooks:the method that actual outputs HTML to the DOM,mandatory method:others are optional*/
      console.log('render() called')
    return <>
      <div>LifeCycles</div>
      <div>{this.state.color}</div>
    </>     
  }

  componentDidMount(){                    /*componentDidMount() hooks*/
  //This is a good place to initiate the network request(API calls) and DOM manipulations should be done inside this.
  //update processes shold be done i.e setState() inside this.
    console.log('componentDidMount() called')

  }


}
