import React from "react";
import "./Footer.css";
import img11 from "../../img/img11.png";
function Footer() {
  return (
    <div className="footer">
      <div className="footer1">
        <div className="Categories">
          <h1>Categories</h1>
          <p>Web Builder</p>
          <p>Hosting</p>
          <p>Data Center</p>
          <p>Robotic-Automation</p>
        </div>
        <div className="Categories">
          <h1>Categories</h1>
          <p>Web Builder</p>
          <p>Hosting</p>
          <p>Data Center</p>
          <p>Robotic-Automation</p>
        </div>
        <div className="f-button">
          <p>United States</p>
          <img src={img11} />
        </div>
      </div>
    </div>
  );
}

export default Footer;
