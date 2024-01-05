// Updating
// =========
// 1.static getDerivedStateFromProps(props,state)
// 2.shouldComponentUpdate()
// 3.render()
// 4.getSnapshotBeforeUpdate(prevProps, prevState) //will be called before the update
// 5.componentDidUpdate()// will be called after the update

import React, { Component } from 'react'

export default class LifeCycles_UpdatingStage extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         color:'red',
         name:'dillip'
         
      }
    }
    changeColor=()=>{
      this.setState({color:'red'})
    }
    changeName=()=>{
      this.setState({name:'dipak'})
    }
   
    shouldComponentUpdate(){
      //any user defined logic returning true or false
      return true;//by default it is true so that re-render happens automatically.
      //as we are setting red=red render method will be called on value change as it is not pureComponent so return false manually if we dint want to re-render,
      //so we have to manually write shouldComponetUpdate which is bydefault active in pureComponent
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
     document.getElementById('prevData').innerHTML='the data before update is '+prevState.name
    }
    componentDidUpdate(){
     document.getElementById('currentData').innerHTML='the updated data is '+this.state.name

    }

    
  render() {
    console.log('render() method called')
    return <>
    <h3>LifeCycles_UpdatingStage</h3>
    <p>color value is {this.state.color}</p>
    <button onClick={this.changeColor}>click to change Color</button><hr></hr>

    <p>color value is {this.state.name}</p>
    <button onClick={this.changeName}>click to change Name</button>
    {/* to show previous state before update we have to use getSnapShotBeforeUpdate() */}
    <div id='prevData'></div>

    <div id='currentData'></div>


    </>
  }
}