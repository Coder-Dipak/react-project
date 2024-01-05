import React from "react";

export default function UserCard(props) {
  let {name,email,phone}=props.user //props destructuring:explained in props-Destruturing.js file
return <>
            <div class="card card-height">
              <img src="https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png" className="card-img-top" alt="..."/>
              <div class="card-body">
                {/* <h5 class="card-title">{props.user.name}</h5>
                <p class="card-text">{props.user.email}</p>
                <p class="card-text">{props.user.phone}</p> */}
                <h5 class="card-title">{name}</h5>
                <p class="card-text">{email}</p>
                <p class="card-text">{phone}</p>
                <a href=".." className="btn btn-primary">click for more</a>
               </div>
            </div>
       </>
}
