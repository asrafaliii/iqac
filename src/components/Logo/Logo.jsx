import React from "react";
import "./Logo.css";
import logo from "../../assets/logo.png"

const Logo = () => {
  return (
    <div className="container">
      <img src={logo} />
      <div className="text-section">
        <h1>INSTITUTIONAL QUALITY ASSURANCE CELL"(IQAC)"</h1>
        <p>BANGLADESH UNIVERSITY OF PROFESSIONALS</p>
      </div>
    </div>
  );
};

export default Logo;
