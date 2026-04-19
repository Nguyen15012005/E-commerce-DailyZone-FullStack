import React from "react";
import Image1 from "../assets/hero/women.png";
import Image2 from "../assets/hero/shopping.png";
import Image3 from "../assets/hero/sale.png";
import Slider from "react-slick";

const ImageList = [
  {
    id: 1,
    img: Image1,
    title: "MUA HÀNG THẢ GA GIẢM SỐC ĐẾN 50%",
    description:
      "Chương trình diễn ra trong vòng 10 ngày, đừng bỏ lỡ cơ hội làm mới tủ đồ và tận hưởng mùa lễ hội với giá cực kỳ hấp dẫn. Rủ rê hội chị em và ghé Dillys để nhận ngay ưu đãi nàng nhaaa!",
  },

  {
    id: 2,
    img: Image2,
    title: "CẶP ĐÔI TÌNH NHÂN ƯU ĐÃI GIẢM 50%",
    description:
      "Hâm nóng tình yêu, làm mới cảm xúc của cả hai với những mẫu áo thun cặp đẹp dễ thương mới lạ độc đáo dành cho tình nhân đi biển. Bí quyết để cả 2 có những  kiểu chụp hình couple đẹp và lãng mạn nhất, với phong cách!",
  },

  {
    id: 3,
    img: Image3,
    title: "NGÀY HỘI MUA SẮM GIẢM GIÁ SIÊU KHỦNG",
    description:
      "Giao hàng toàn quốc với giá rẻ nhất - Miễn phí giao hàng đơn trên 150k",
  },
];

const Hero = ({handleOrderPopup}) => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200">
      {/* Background pattern  */}
      <div className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9"></div>
      {/* Hero section  */}
      <div className="container pb-8 sm:pb-0">
        <Slider {...settings}>
          {ImageList.map((data) => (
            <div key={data.id} className="">
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {/* Text content section  */}
                <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                  <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold font-comic" 
                      data-aos="zoom-out"
                      data-aos-duration="500"
                      data-aos-once="true"
                  >
                    {data.title}
                  </h1>
                  <p className="text-sm"
                        data-aos="fade-up"
                        data-aos-duration="500"
                        data-aos-delay="100"
                    >{data.description}</p>
                  <div className="" 
                        data-aos="fade-up"
                        data-aos-duration="500"
                        data-aos-delay="300"
                    >
                    <button onClick={handleOrderPopup} className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full">
                      Order Now
                    </button>
                  </div>
                </div>
                {/* image section  */}
                <div className="order-1 sm:order-2">
                  <div className="relative z-10">
                    <img
                      src={data.img}
                      alt=""
                      className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-105 lg:scale-120 object-contain mx-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
