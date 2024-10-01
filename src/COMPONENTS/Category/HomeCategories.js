import React from "react";
import "./HomeCategories.css";
import img1 from "../../ASSETS/Images/earring.png";
import img2 from "../../ASSETS/Images/Air fryer.jpeg";
import img3 from "../../ASSETS/Images/3.png";
import img4 from "../../ASSETS/Images/4.png";
import { Link } from "react-scroll";

const HomeCategories = () => {
  return (
    <div className="homecategories hover08 column">
      <div className="container py-5">
        <div className="row">
          <div className="col-xl-3 col-md-4 col-6">
            <figure className="categories">
              <img src={img1} className="clothing-tags" alt="clothing" />
              <figcaption className="category-name">
                <Link to="/Home" className="category-label" href="#">
                  Hoop Earrings
                </Link>
              </figcaption>
            </figure>
          </div>
          <div className="col-xl-3 col-md-4 col-6">
            {" "}
            <figure className="categories">
              <img src={img2} className="Air" alt="clothing" />
              <figcaption className="category-names">
                <Link
                  to="/ProductCard"
                  spy={true}
                  smooth={true}
                  className="category-label"
                  href="#"
                >
                  {" "}
                  Air Fryer
                </Link>
              </figcaption>
            </figure>
          </div>
          <div className="col-xl-3 col-md-4 col-6">
            {" "}
            <figure className="categories">
              <img src={img3} className="clothing-tags" alt="clothing" />
              <figcaption className="category-name_kids">
                <Link to="HomePage" className="category-label" href="#">
                  Lace Dress
                </Link>
              </figcaption>
            </figure>
          </div>
          <div className="col-xl-3 col-md-4 col-6">
            <figure className="categories">
              <img src={img4} className="clothing-tags" alt="clothing" />
              <figcaption className="category-name_kids">
                <Link to="Product" className="category-label" href="#">
                  Active Wear
                </Link>
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
