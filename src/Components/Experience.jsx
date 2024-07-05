import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import img1 from "../Images/OL-image-1.webp";
import img2 from "../Images/OL-image-2.webp";
import img3 from "../Images/OL-image-3.webp";

const Experience = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
  };
  return (
    <div className="mx-[4%]">
      <Slider {...settings}>
        <div>
          <img src={img1} className="" alt="OL-img1" />
        </div>
        <div>
          <img src={img2} className="" alt="OL-img2" />
        </div>
        <div>
          <img src={img3} className="" alt="OL-img3" />
        </div>
      </Slider>
    </div>
  );
};

export default Experience;
