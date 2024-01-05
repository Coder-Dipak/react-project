import React, { Component } from 'react'

export default class CompWithState extends Component {
  state={ //1 state obj for 1 component
    counter: 0,
  }
  increment=()=>{
                //  this.state.counter=this.state.counter+1;//wrong way to incremnet
  
                // this.setState({counter:this.state.counter+1})//async operation will take some time to execute so it will let the compiler execute the next line so our console is 1 number behind the ui
                //  console.log(this.state.counter);

                this.setState({counter:this.state.counter+1},()=>{console.log(this.state.counter)}) 
                      //parameters:updateable object,callbackFunction         
  }
  render() {
    console.log('render method called')
    return <>
    <h3>this is for explaining a component with state and setState()</h3>

    <div>counter value is : {this.state.counter}</div>
    <button className='btn btn-primary' onClick={this.increment}>click me for increment</button>

    </>
  }
}
