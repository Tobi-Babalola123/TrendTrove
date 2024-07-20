import React from "react";
import "./SingleBanner.css";
import cartx from "../../ASSETS/Images/A marketplace for handmade, vintage, and unique items, often crafted by independent artisans and sel (1).jpeg";

const SingleBanner = ({ bannerimage, heading }) => {
  return (
    <div className="singlebanner">
      <div className="bannerimgfilter"></div>
      <img className="bannerimg" src={cartx} alt="noimg" />
      <div className="bannerheading">{/* <h1>{heading}</h1> */}</div>
    </div>
  );
};

export default SingleBanner;
