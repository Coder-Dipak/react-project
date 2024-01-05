import React, { useState } from "react";
import { useEffect } from "react";

export default function UseEffectDemo2() {
  const [comments, setComments] = useState([]);//iteration of static data

  const [userId, setUserId] = useState(1);
  const [userData, setUserData] = useState({});//iteration of dynamic data that depends on a statevariable  userId
 

  const increment = () => {
    setUserId(userId + 1);
  };

  const fetchComments = async () => {
    let response = await fetch("https://jsonplaceholder.typicode.com/comments");
    let data = await response.json();
    setComments(data);
  };

  const fetchUser = async (userId) => {
    let response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    let data = await response.json();
    setUserData(data);
  };

  useEffect(() => {
    fetchComments();//fetchComments will be called only on load as it has only static data
  },[]);

  useEffect(() => {
    fetchUser(userId);//fetchUser will be called on every change in userId 
  },[userId]);

  return (
    <>
      <h1 className="text-center">Use effect demo 2</h1>
      <hr />
      <div className="text-center border-primary">
        User Id - {userId}
        <button onClick={increment}>Increment</button>

        {/* iteration of dynamic data based on state varible in a card */}
        <div className="card col-sm-3 col-offset-3">
          <img src="https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg" className="card-img-top" alt="..." height={'50px'} />
          <div className="card-body">
            <h5 className="card-title">{userData.userName}</h5>
            <p className="card-text">{userData.id}</p>
            <p className="card-text">{userData.name}</p>
            <p className="card-text">{userData.phone}</p>
            <p className="card-text">{userData.email}</p>
          </div>
        </div>
      </div>

      <hr />
      <table className="table table-bordered">
        <tbody>
          {comments.map((comment) => {
            return (
              <tr>
                <td>{comment.id}</td>
                <td>{comment.name}</td>
                <td>{comment.email}</td>
                <td>{comment.body}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}