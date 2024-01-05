import React from 'react';
import users from './ListUser.json';

export default function ListUsers() {
  return <>
     <div className='container'>
        <div className='row'>
            {users.map((user,ind)=>{
                return <div className='col-3' key={ind}>
                    <div class="card card-height">
                         <img src="https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png" className="card-img-top" alt="..." />
                         <div class="card-body">
                           <h5 class="card-title">{user.name}</h5>
                           <p class="card-text">{user.email}</p>
                           <p class="card-text">{user.phone}</p>
                           <a href="#" className="btn btn-primary">click for more</a>
                         </div>
                    </div>       
                </div>
            })}
        </div>
     </div>
  </>
}
