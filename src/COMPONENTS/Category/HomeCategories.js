import React from "react";
import "./HomeCategories.css";
import img1 from "../../ASSETS/Images/earring.png";
import img2 from "../../ASSETS/Images/Airr.png";
import img3 from "../../ASSETS/Images/3.png";
import img4 from "../../ASSETS/Images/4.png";

const HomeCategories = () => {
  return (
    <div className="homecategories hover08 column">
      <div className="container py-5">
        <div className="row">
          <div className="col-xl-3 col-md-4 col-6">
            <figure className="categories">
              <img src={img1} className="clothing-tags" alt="clothing" />
              <figcaption className="category-name">
                <a className="category-label" href="#">
                  Hoop Earrings
                </a>
              </figcaption>
            </figure>
          </div>
          <div className="col-xl-3 col-md-4 col-6">
            {" "}
            <figure className="categories">
              <img src={img2} className="clothing-tag" alt="clothing" />
              <figcaption className="category-names">
                <a className="category-label" href="#">
                  {" "}
                  Air Fryer
                </a>
              </figcaption>
            </figure>
          </div>
          <div className="col-xl-3 col-md-4 col-6">
            {" "}
            <figure className="categories">
              <img src={img3} className="clothing-tags" alt="clothing" />
              <figcaption className="category-name_kids">
                <a className="category-label" href="#">
                  Lace Dress
                </a>
              </figcaption>
            </figure>
          </div>
          <div className="col-xl-3 col-md-4 col-6">
            <figure className="categories">
              <img src={img4} className="clothing-tags" alt="clothing" />
              <figcaption className="category-name_kids">
                <a className="category-label" href="#">
                  Active Wear
                </a>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
      {/* <div className="container">
       
      </div>
      <div className="container">
       
      </div>
      <div className="container">
        
      </div> */}
    </div>
  );
};

export default HomeCategories;
