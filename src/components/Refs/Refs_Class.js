import React, { Component } from 'react'

export default class Refs_Class extends Component {
    constructor(props) {
      super(props)
      
      this.myRef1=React.createRef();//2 reference variables declared inside constructor
      this.myRef2=React.createRef();
    
      this.state = {
      }
    }
    addition=()=>{
    //   console.log(this.myRef1)
    const num1=+this.myRef1.current.value;//catching the reference variable into a variable num1 & num2
    const num2=+this.myRef2.current.value;
    console.log(num1+num2)
    }
  render() {
    return <>
    <div className='border-primary'>
        Number1:<input type='number' ref={this.myRef1}/>
        Number2:<input type='number' ref={this.myRef2}/>
        <button onClick={this.addition}>Add</button>

    </div>
    </>
  }
}
