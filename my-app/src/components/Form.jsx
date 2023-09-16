import React from "react";
import avatar from '../assest/images/avatar.png'

const Form = ()=> {
return (
    <div className="links_container">
    <div className="title">
      <h1 id="title">Profile Details</h1>
      <p>Add your deteils to create a personal touch to your profile.</p>
    </div>
    <div className="selection">
      <h5>Profile picture</h5>
      <div className="upload">
          <img src={avatar} className="avatar" alt=""/>
          <div className="round">
            <input type="file"/>
          </div>
          <div className="show">
              <i className="fa-regular fa-image"></i>
              <p>select your image</p>
            </div>
      </div>  
    </div>
    
    <div className="inputs"> 

       <div className="one-input">
          <label for="">First Name</label>
          <input className="form-control form-control-lg input-text" type="text" placeholder="Add Your Name" aria-label=".form-control-lg example"/>
       </div>

       <div className="one-input">
          <label for="">Last Name</label>
          <input className="form-control form-control-lg input-text" type="text" placeholder="Add Your Last Name" aria-label=".form-control-lg example"/>

       </div>
       <div className="one-input">
          <label for="">Email</label>
          <input className="form-control form-control-lg input-text" type="text" placeholder="Add Your Email" aria-label=".form-control-lg example"/>

       </div>

    </div>
</div>

)
}
export default Form