import React from "react";
import Slider from "react-slick";
import "./BannerSlider.css";

const BannerSlider = () => {
  const data = [
    {
      id: 1,
      // image: "https://i.ibb.co/WgCF0TY/slider.jpg",
    },

    {
      id: 2,
      image: "https://i.ibb.co/WgCF0TY/slider.jpg",
    },
  ];

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="bannerslider">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <Slider className="bannerslider " {...settings}>
            <div className="sliding"></div>
            {/* {data.map((item) => {
                return (
                  <div className="" key={item.id}>
                    <img src={item.image} alt="noimg" />
                    <div className="content"></div>
                  </div>
                );
              })} */}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default BannerSlider;
