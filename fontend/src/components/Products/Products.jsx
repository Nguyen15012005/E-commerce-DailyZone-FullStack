import React from "react";
import Img1 from "../assets/women/women.png";
import Img2 from "../assets/women/women2.jpg";
import Img3 from "../assets/women/women3.jpg";
import Img4 from "../assets/women/women4.jpg";
import { FaStar } from "react-icons/fa6";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Women Ethnic",
    rating: 5.0,
    color: "white",
    aosDeplay: "0",
  },

  {
    id: 2,
    img: Img2,
    title: "Women Ethnic",
    rating: 4.5,
    color: "Red",
    aosDeplay: "200",
  },

  {
    id: 3,
    img: Img3,
    title: "Goggles",
    rating: 4.7,
    color: "brown",
    aosDeplay: "400",
  },

  {
    id: 4,
    img: Img4,
    title: "Printed T-Shirt",
    rating: 4.4,
    color: "Yellow",
    aosDeplay: "600",
  },

  {
    id: 5,
    img: Img2,
    title: "Fashion T-Shirt",
    rating: 4.5,
    color: "Pink",
    aosDeplay: "800",
  },
];

const Products = () => {
  return (
    <div className="mt-14 mb-12">
      <div className="container">
        {/* Header Section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p className="text-sm text-primary" data-aos="fade-up">
            Top Selling Products for you
          </p>
          <h1 className="text-3xl font-bold" data-aos="fade-up">
            Products
          </h1>
          <p className="text-xs text-gray-400" data-aos="fade-up">
            Giao hàng toàn quốc với giá rẻ nhất - Miễn phí giao hàng đơn trên
            150k
          </p>
        </div>
        {/* Body Section */}
        <div className="">
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
            {/* Card section */}
            {ProductsData.map((data) => (
              <div
                key={data.id}
                className="space-y-3"
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
              >
                <div>
                  <img
                    src={data.img}
                    alt=""
                    className="h-[220px] w-[150px] object-cover rounded-md"
                  />
                </div>

                <div>
                  <h3 className="font-semibold">{data.title}</h3>
                  <p className="text-sm text-gray-600">{data.color}</p>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-400" />
                    <span>{data.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* View All button  */}
          <div className="flex justify-center">
            <button className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md">View All Products</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
