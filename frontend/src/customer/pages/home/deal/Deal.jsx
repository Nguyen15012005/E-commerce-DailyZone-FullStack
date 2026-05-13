import React from "react";
import DealCard from "./DealCard";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute -right-6 top-1/2 -translate-y-1/2 z-20 bg-white shadow-lg p-2 rounded-full cursor-pointer hover:scale-110 transition"
      style={{ ...style, display: "block" }}
    >
      <ChevronRight size={18} />
    </button>
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute -left-6 top-1/2 -translate-y-1/2 z-20 bg-white shadow-lg p-2 rounded-full cursor-pointer hover:scale-110 transition"
      style={{ ...style, display: "block" }}
    >
      <ChevronLeft size={18} />
    </button>
  );
};

const Deal = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    swipeToSlide: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 4 } },
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="py-10 px-3 md:px-5 lg:px-20 relative">
      {/* HEADER */}
      <div className="flex items-end justify-between mb-8">
        <div>
          <p className="text-sm text-[#C6A15B] font-semibold tracking-widest uppercase">
            Flash Sale
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-orange-00 text-[#d7a343] bg-clip-text mt-2">
            🔥 Deal Hot Hôm Nay
          </h2>
        </div>

        <button className="text-sm text-gray-600 hover:text-black transition">
          Xem tất cả →
        </button>
      </div>

      {/* Slider Container */}
      <div className="relative px-8">
        <Slider {...settings}>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
            <div key={index} className="px-2">
              <div className="transition duration-300 hover:-translate-y-2">
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
