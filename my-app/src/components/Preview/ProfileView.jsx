import React from "react"; 
import { Link } from 'react-router-dom';


function ProfileView(){

return (
    <div>
    <div id="blue">
            <div id="nav-bar">
                <div>
                <Link to="/">
                <button id="back_to_editor" className="blue_btn">  Back to Editor </button>
                </Link>    
                </div>
                
                <div>
                    <button  id="share_link"  className="blue_btn"> Share Link </button>
                </div>

            </div>

    </div>
</div>
)
}
export default  ProfileView