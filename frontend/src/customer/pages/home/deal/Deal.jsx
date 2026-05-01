import React from "react";
import DealCard from "./DealCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Deal = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,

    autoplay: true,
    speed: 500, // 👈 animation nhanh thôi
    autoplaySpeed: 2000, // 👈 delay giữa các lần chạy

    cssEase: "ease-in-out",
  };
  return (
    <div className="py-5 lg:px-20">
      <div className="mb-5">
        <Slider {...settings}>
          {[1, 1, 1, 1, 1, 1].map((item, index) => (
            <div key={index} className="px-2">
              <div className="transform transition duration-300 hover:scale-105 hover:shadow-xl rounded-2xl">
                <DealCard />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Deal;
