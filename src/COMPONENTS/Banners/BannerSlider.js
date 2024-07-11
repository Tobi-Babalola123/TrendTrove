import React from "react";
import Slider from "react-slick";
import "./BannerSlider.css";

const BannerSlider = () => {
  const data = [
    {
      id: 1,
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
      <Slider className="bannerslider" {...settings}>
        {data.map((item) => {
          return (
            <div className="imagecont" key={item.id}>
              <img src={item.image} alt="noimg" />
              <div className="content"></div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default BannerSlider;
