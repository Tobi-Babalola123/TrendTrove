import React from "react";
import "./HomeCategories.css";
import img1 from "../../ASSETS/Images/1.png";
import img2 from "../../ASSETS/Images/2.png";
import img3 from "../../ASSETS/Images/3.png";
import img4 from "../../ASSETS/Images/4.png";

const HomeCategories = () => {
  return (
    <div className="homecategories">
      <div className="container">
        {/* <img src= alt="img1" /> */}
        <figure>
          <img src={img1} className="clothing-tags" alt="clothing" />
          <figcaption className="category-name">
            <a className="category-label" href="#">
              Women's clothing
            </a>
          </figcaption>
        </figure>
      </div>
      <div className="container">
        {/* <img src= alt="img2" /> */}
        <figure>
          <img src={img2} className="clothing-tags" alt="clothing" />
          <figcaption className="category-name">
            <a className="category-label" href="#">
              {" "}
              Men's clothing
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
              kids
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
              sport
            </a>
          </figcaption>
        </figure>
      </div>
    </div>
  );
};

export default HomeCategories;
