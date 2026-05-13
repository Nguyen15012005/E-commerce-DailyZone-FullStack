import React from "react";
import ShopByCategoryCard from "./ShopByCategoryCard";

const ShopByCategory = () => {
  return (
    <div className="px-3 md:px-5 lg:px-20 py-10">
      {/* 🔥 TITLE */}
      <div className="text-center mb-12">
        <p className="text-sm text-[#d3b67e] font-semibold tracking-widest uppercase">
          Category
        </p>

        <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-orange-400 text-[#d09a35] bg-clip-text mt-2">
          Mua Sắm Doanh Mục Nổi Bật
        </h2>

        <div className="w-20 h-1 mx-auto mt-4 bg-gradient-to-r from-orange-400 text-[#d09a35] rounded-full"></div>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8 justify-items-center">
        {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((item, index) => (
          <ShopByCategoryCard key={index} />
        ))}
      </div>
    </div>
  );
};

export default ShopByCategory;
