import React from "react";
import Slider from "react-slick";

const TestimonialData = [
  {
    id: 1,
    name: "Nguyên",
    text: "Do you want to buy genuine labubu clothes online with many attractive promotions today? If you are looking to buy genuine products from reputable stores, Shopee Vietnam is the ideal choice for you. Shopee provides a full range of genuine labubu clothes with many extremely attractive promotional prices. In particular, labubu clothes will always be easily found at preferential prices with a variety of unique designs and colors. As a reputable online shopping channel.",
    img: "http://picsum.photos/101/101",
  },

  {
    id: 2,
    name: "Trang",
    text: "Do you want to buy genuine labubu clothes online with many attractive promotions today? If you are looking to buy genuine products from reputable stores, Shopee Vietnam is the ideal choice for you. Shopee provides a full range of genuine labubu clothes with many extremely attractive promotional prices. In particular, labubu clothes will always be easily found at preferential prices with a variety of unique designs and colors. As a reputable online shopping channel.",
    img: "http://picsum.photos/102/102",
  },

  {
    id: 3,
    name: "QUân",
    text: "Do you want to buy genuine labubu clothes online with many attractive promotions today? If you are looking to buy genuine products from reputable stores, Shopee Vietnam is the ideal choice for you. Shopee provides a full range of genuine labubu clothes with many extremely attractive promotional prices. In particular, labubu clothes will always be easily found at preferential prices with a variety of unique designs and colors. As a reputable online shopping channel.",
    img: "http://picsum.photos/103/103",
  },

  {
    id: 4,
    name: "David",
    text: "Do you want to buy genuine labubu clothes online with many attractive promotions today? If you are looking to buy genuine products from reputable stores, Shopee Vietnam is the ideal choice for you. Shopee provides a full range of genuine labubu clothes with many extremely attractive promotional prices. In particular, labubu clothes will always be easily found at preferential prices with a variety of unique designs and colors. As a reputable online shopping channel.",
    img: "http://picsum.photos/104/104",
  },

  {
    id: 5,
    name: "Tony",
    text: "Do you want to buy genuine labubu clothes online with many attractive promotions today? If you are looking to buy genuine products from reputable stores, Shopee Vietnam is the ideal choice for you. Shopee provides a full range of genuine labubu clothes with many extremely attractive promotional prices. In particular, labubu clothes will always be easily found at preferential prices with a variety of unique designs and colors. As a reputable online shopping channel.",
    img: "http://picsum.photos/105/105",
  },
];
const Testimonials = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="py-10 mb-10">
      <div className="container">
        {/* header section  */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p className="text-sm text-primary" data-aos="fade-up">
            What our customers are saying
          </p>
          <h1 className="text-3xl font-bold" data-aos="fade-up">
            Testimonials
          </h1>
          <p className="text-xs text-gray-400" data-aos="fade-up">
            Giao hàng toàn quốc với giá rẻ nhất - Miễn phí giao hàng đơn trên
            150k
          </p>
        </div>

        {/* Testimonials cards */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div key={data.id} className="my-6">
                <div className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative">
                  <div className="mb-4">
                    <img
                      src={data.img}
                      alt={data.name}
                      className="rounded-full w-20 h-20"
                    />
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3">
                      <p className="text-xs text-gray-500">{data.text}</p>
                      <h1 className="text-xl font-bold text-black/80 dark:text-light">{data.name}</h1>
                    </div>
                  </div>
                  <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">,,</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
