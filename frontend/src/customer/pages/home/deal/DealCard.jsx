import React from "react";

const DealCard = () => {
  return (
    <div className="w-[13rem] cursor-pointer">
      <img src="https://images.unsplash.com/photo-1549298916-b41d501d3772" alt="" />

      <div className="border-4 border-black bg-black text-white p-2 text-center">
        <p className="text-lg font-semibold">Giày Sneaker</p>
        <p className="text-2xl font-bold">Giảm 20%</p>
        <p className="text-balance text-lg">Mua ngay</p>
      </div>
    </div>
  );
};

export default DealCard;
