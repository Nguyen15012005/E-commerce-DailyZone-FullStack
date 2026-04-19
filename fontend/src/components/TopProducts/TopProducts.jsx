import React from "react";
import Img1 from "../assets/shirt/shirt.png";
import Img2 from "../assets/shirt/shirt2.png";
import Img3 from "../assets/shirt/shirt3.png";
import { FaStar } from "react-icons/fa";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Casual Wear",
    description:
      "Hâm nóng tình yêu, làm mới cảm xúc của cả hai với những mẫu áo thun cặp đẹp dễ thương mới lạ độc đáo dành cho tình nhân đi biển. Bí quyết để cả 2 có những  kiểu chụp hình couple đẹp và lãng mạn nhất, với phong cách!",
  },

  {
    id: 2,
    img: Img2,
    title: "Casual Wear",
    description:
      "Hâm nóng tình yêu, làm mới cảm xúc của cả hai với những mẫu áo thun cặp đẹp dễ thương mới lạ độc đáo dành cho tình nhân đi biển. Bí quyết để cả 2 có những  kiểu chụp hình couple đẹp và lãng mạn nhất, với phong cách!",
  },

  {
    id: 3,
    img: Img3,
    title: "Casual Wear",
    description:
      "Hâm nóng tình yêu, làm mới cảm xúc của cả hai với những mẫu áo thun cặp đẹp dễ thương mới lạ độc đáo dành cho tình nhân đi biển. Bí quyết để cả 2 có những  kiểu chụp hình couple đẹp và lãng mạn nhất, với phong cách!",
  },
];

const TopProducts = ({handleOrderPopup}) => {
  return (
    <div className="container">
      {/* Header Section */}
      <div className="text-left mb-24">
        <p className="text-sm text-primary" data-aos="fade-up">
          Top Rated Products for you
        </p>
        <h1 className="text-3xl font-bold" data-aos="fade-up">
          Best Products
        </h1>
        <p className="text-xs text-gray-400" data-aos="fade-up">
          Giao hàng toàn quốc với giá rẻ nhất - Miễn phí giao hàng đơn trên 150k
        </p>
      </div>
      {/* Body Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center">
        {ProductsData.map((data) => (
          // eslint-disable-next-line react/jsx-key
          <div data-aos="zoom-in" className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px]">
            {/* Image Section */}
            <div className="h-[100px]">
              <img
                src={data.img}
                alt=""
                className="max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md"
              />
            </div>
            {/* details Section */}

            <div className="p-4 text-center">
                {/* star rating */}
                <div className="w-full flex items-center justify-center gap-1">
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                </div>
                <h1 className="text-xl font-bold">{data.title}</h1>
                <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">{data.description}</p>
                <button onClick={handleOrderPopup} className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary">
                    Order Now
                </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopProducts;
