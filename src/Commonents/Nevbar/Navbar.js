import React from "react";
import "./Navbar.css";
import img12 from "../../img/img12.png";
function Navbar() {
  return (
    <div className="navbar">
      <div className="serach">
        <img src={img12} />
        {/* <input type="search"></input> */}
      </div>
      <div className="navbar-links">
        <ul style={{ listStyle: "none" }}>
          <li>Categories</li>
          <li>Website Builders</li>
          <li>Today's deals</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
