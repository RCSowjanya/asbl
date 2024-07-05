import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Experience from "./Experience";

const Sliding = ({ data }) => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };
  return (
    <div className="mx-[3%]">
      <Slider {...settings}>
        {data.map((item, index) => (
          <div
            key={index}
            className="flex  as max-[1000px]:flex-col justify-center pb-[6%] max-[1000px]:pb-[0px]"
          >
            <div className="w-1/2 max-[1000px]:w-full">
              <img
                src={item.image}
                alt={`Slide ${index}`}
                className="h-auto w-full object-cover rounded"
              />
            </div>
            <div className="p-4 w-1/2 space-y-8 max-[1000px]:w-full">
              <h2 className="text-[2rem] font-[400] mb-[4%]">{item.heading}</h2>
              <div>
                <p className="text-[1rem]">{item.content}</p>
                <p className="text-[.8rem] pr-[10%]">{item.subcontent}</p>
              </div>
              <div>
                <p className="text-[1rem]">{item.content1}</p>
                <p className="text-[.8rem] pr-[10%]">{item.subcontent1}</p>
              </div>
              <div>
                <p className="text-[1rem]">{item.content2}</p>
                <p className="text-[.8rem] pr-[10%]">{item.subcontent2}</p>
              </div>
              <div>
                <p className="text-[1rem]">{item.content3}</p>
                <p className="text-[.8rem] pr-[10%]">{item.subcontent3}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      {/*---outdoor living---*/}
      <div>
        <div className="w-full h-24 bg-[#c6ac86] flex items-center justify-center">
          <p className="un text-2xl font-bold text-white max-[1000px]:text-center">
            Experience Outdoor Living, balconies as big as rooms.
          </p>
        </div>
      </div>
      {/*---outdoor living close--*/}
      {/*---slider----*/}
      <Experience />

      {/*--slider-close---*/}
    </div>
  );
};

export default Sliding;
