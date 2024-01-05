import React, { Component } from 'react'

export default class Databinding extends Component {
  render() {
    function formatName(user){
          return user.firstname+' '+user.lastName;
    }
    let user={firstrName:'dipak',lastname:'jena'};

    return (
      <div>
        <h2>react version is {React.version}</h2>
        <h2>{1+1}</h2>
        <p>my name is- {user.firstName}</p>
        <p>my full name is- {formatName(user)}</p>

      </div>
    )
  }
}


