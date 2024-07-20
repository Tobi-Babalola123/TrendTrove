import React from "react";
import nike from "../../ASSETS/Images/nike.jpg";
import "./Footer1.css";
const Footer1 = () => {
  return (
    <div className="footer1">
      <div className="left">
        <img src={nike} alt="veges" />
      </div>
      <div className="right">
        <h1 className="footer-title">Step Up your style</h1>
        <p>
          We deliver Affordable fashion outfits starting from <del>N</del>5000.
        </p>
      </div>
    </div>
  );
};

export default Footer1;
