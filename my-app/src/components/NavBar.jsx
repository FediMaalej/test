import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function NavBar() {
  // profile={} link={"top_bar_routes_links"} 
  
  const [active, seTactive] = useState(true);
  const profile=active?"top_bar_routes_profile_details":"top_bar_routes_profile_details top_bar_routes_active"
  const link=active ? "top_bar_routes_links top_bar_routes_active":"top_bar_routes_links"
  return (
    <div>
      <nav className="top_bar">
        <div className="top_bar_logo">
          <svg
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            width="35.000000pt"
            height="116.000000pt"
            viewBox="0 0 122.000000 116.000000"
            preserveAspectRatio="xMidYMid meet"
          >
            <g
              transform="translate(0.000000,116.000000) scale(0.100000,-0.100000)"
              fill="#613BFA"
              stroke="none"
            >
              <path
                d="M320 1041 c-87 -11 -133 -41 -180 -116 l-25 -40 0 -315 0 -315 30
          -50 c20 -31 49 -60 80 -80 l50 -30 310 0 c304 0 311 0 353 23 54 29 75 50 104
          104 23 42 23 49 23 348 0 293 -1 307 -22 345 -25 47 -64 85 -113 111 -31 16
          -64 19 -295 20 -143 1 -285 -1 -315 -5z m186 -252 c15 -17 15 -20 0 -43 -10
          -16 -29 -27 -53 -32 -91 -15 -143 -87 -128 -176 18 -105 156 -151 232 -78 46
          46 54 59 60 98 7 44 19 62 44 62 38 0 52 -29 45 -94 -3 -33 -13 -67 -21 -76
          -19 -21 -21 -57 -2 -42 7 6 31 14 53 17 81 13 136 102 114 184 -41 152 -268
          126 -290 -32 -6 -49 -28 -66 -64 -49 -23 10 -26 17 -26 64 0 29 7 66 15 82 8
          15 15 35 15 42 0 8 6 14 13 14 6 0 29 15 50 34 29 26 53 37 99 45 116 20 224
          -31 275 -132 22 -44 25 -60 21 -117 -9 -122 -80 -206 -192 -228 -56 -11 -61
          -11 -83 10 -13 12 -23 30 -23 40 0 24 -6 23 -51 -12 -50 -40 -143 -57 -209
          -39 -91 26 -148 83 -175 176 -17 59 -13 103 16 168 32 70 84 111 163 129 59
          14 78 11 102 -15z"
              />
            </g>
          </svg>
          <p>devlinks</p>
        </div>
        <div className="top_bar_routes">
          <Link
            to="/"
            onClick={() => seTactive(!active)}
            className={link}
          >
            <i className="bi bi-link-45deg"></i>Links
          </Link>
          <Link
            to="/Profile"
            onClick={() => seTactive(!active)}
            className={profile}
          >
            <i className="bi bi-person-circle"></i>Profile Details
          </Link>
        </div>
        <div className="top_bar_perview_btn">
          <Link to="/Privew">
            <button className="perview_btn" type="button">
              Perview
            </button>
          </Link>
        </div>
      </nav>
    </div>
  );
}
