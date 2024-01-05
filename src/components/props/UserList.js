import React from 'react';
import userArr from './Userlist.json';
import UserCard from './UserCard';

export default function UserList() {
  return <>
  <div className='containner-fluid'>
    <div className='row'>
            {userArr.map((UserObj,index)=>{
                return <div className='col-sm-3' key={index}>                      
                            <UserCard  user={UserObj}/>
                            {/* in parent prop name is UserObj but in child it is user */}
                       </div>
                })
            }
    </div>
  </div>
  </>
}
