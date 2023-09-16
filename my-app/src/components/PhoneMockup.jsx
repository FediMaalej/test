import React from "react";
import Avatar from "../assest/images/avatar.png";

export default function PhoneMockup() {
  return (
    <div className="phone_container">
      <div className="phone_container_all">
        <div className="phone_container_wrapper">
            <img className="img_avatar" src={Avatar} alt="avatar" />
          <div className="phone_container_big"></div>
          <div className="phone_container_small"></div>
        </div>
        <div className="phone_container_list_links">

          <div className="list_links_banner">
            <div className="list_links_banner_social">
              <span></span>
              <p></p>
            </div>
            <span className="icon"></span>
          </div>

          <div className="list_links_banner">
            <div className="list_links_banner_social">
              <span></span>
              <p></p>
            </div>
            <span className="icon"></span>
          </div>

          <div className="list_links_banner">
            <div className="list_links_banner_social">
              <span></span>
              <p></p>
            </div>
            <span className="icon"></span>
          </div>

          <div className="list_links_banner">
            <div className="list_links_banner_social">
              <span></span>
              <p></p>
            </div>
            <span className="icon"></span>
          </div>

          <div className="list_links_banner">
            <div className="list_links_banner_social">
              <span></span>
              <p></p>
            </div>
            <span className="icon"></span>
          </div>
          
        </div>
      </div>
    </div>
  );
}
