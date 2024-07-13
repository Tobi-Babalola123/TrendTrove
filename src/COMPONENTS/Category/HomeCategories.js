import React from "react";
import "./HomeCategories.css";
import img1 from "../../ASSETS/Images/earring.png";
import img2 from "../../ASSETS/Images/Airr.png";
import img3 from "../../ASSETS/Images/3.png";
import img4 from "../../ASSETS/Images/4.png";

const HomeCategories = () => {
  return (
    <div className="homecategories hover08 column">
      <div className="container">
        <figure>
          <img src={img1} className="clothing-tags" alt="clothing" />
          <figcaption className="category-name">
            <a className="category-label" href="#">
              Hoop Earrings
            </a>
          </figcaption>
        </figure>
      </div>
      <div className="container">
        {/* <img src= alt="img2" /> */}
        <figure>
          <img src={img2} className="clothing-tag" alt="clothing" />
          <figcaption className="category-names">
            <a className="category-label" href="#">
              {" "}
              Air Fryer
            </a>
          </figcaption>
        </figure>
      </div>
      <div className="container">
        {/* <img src=alt="img3" /> */}
        <figure>
          <img src={img3} className="clothing-tags" alt="clothing" />
          <figcaption className="category-name_kids">
            <a className="category-label" href="#">
              Lace Dress
            </a>
          </figcaption>
        </figure>
      </div>
      <div className="container">
        {/* <img src= alt="img4" /> */}
        <figure>
          <img src={img4} className="clothing-tags" alt="clothing" />
          <figcaption className="category-name_kids">
            <a className="category-label" href="#">
              Active Wear
            </a>
          </figcaption>
        </figure>
      </div>
    </div>
  );
};

export default HomeCategories;
