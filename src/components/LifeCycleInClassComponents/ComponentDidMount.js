import React, { Component } from 'react'
import { hydrate } from 'react-dom';

export default class ComponentDidMount extends Component {

  constructor(props) {
    super(props)
    this.state = {
       users:[],
    }
  }

  fetchUsers=async()=>{   //user defined method used inside lifecycle
    let response=await fetch('https://jsonplaceholder.typicode.com/users');
    let users=   await response.json();//Api data fetched as users
    // console.log(users);  
    this.setState({users:users})//update done,users assigned to []
  }
  componentDidMount(){  
    this.fetchUsers();                                  //fetching api calls
    document.querySelector('h3').style.color='red';     //DOM manipulation
  }  


  render() {
    
    return <>
    <h3>ComponentDidMount example in which we are fetching api data </h3>
    <table className='table table-bordered table-striped'>
      <tbody>
      {
        this.state.users.map((userObj,ind)=>{
          return <tr key={ind}>
                <td>{userObj.id}</td>
                <td>{userObj.name}</td>
                <td>{userObj.username}</td>
                <td>{userObj.email}</td>
          </tr> 
        })
      }

      </tbody>

    </table>
    </>
  }
}
