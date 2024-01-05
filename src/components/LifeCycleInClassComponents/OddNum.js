import React, { Component } from 'react'

export default class OddNum extends Component {
    intervalId;//its okey to delare class variable as it is not changing
  render() {
    console.log('OddNumber render() got called')
    return <>
    <h3>{this.props.num} is odd number</h3>
    </>
  }
  componentDidMount(){
    console.log('oddNum mounted');
    this.intervalId=setInterval(()=>{
        console.log("hi i am setInterval from oddNum component")
    },1000);
  }

  componentWillUnmount(){
    //will be called just before the component get destroyed and performs any nessasary cleanups(clearTimeout, ClearInterval , Unsubscribe, detachEventHandlers) and cancels network calls
    console.log('OddNum component is about to be destroyed')
    clearInterval(this.intervalId);//this will clearout the any running scripts started by component during mounting
  }

}
