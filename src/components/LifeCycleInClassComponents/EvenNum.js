import React, { Component } from 'react'

export default class EvenNum extends Component {
    intervalId;
  render() {
    console.log('evenNumber render() got called')
    return <>
     <h3>{this.props.num} is even number</h3>
    </>
  }
  componentDidMount(){
    console.log('EvenNum mounted');
    this.intervalId=setInterval(()=>{
        console.log("hi i am setInterval from EvenNum component")
    },1000);
  }

  componentWillUnmount(){
    //will be called just before the component get destroyed and performs any nessasary cleanups(clearTimeout, ClearInterval , Unsubscribe, detachEventHandlers) and cancels network calls
    console.log('EvenNum component is about to be destroyed')
    clearInterval(this.intervalId)

    
  }


}
