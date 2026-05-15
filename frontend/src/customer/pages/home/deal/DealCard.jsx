import React from "react";
import { useNavigate } from "react-router-dom";

const DealCard = ({ item }) => {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden cursor-pointer group">
      <div className="relative overflow-hidden h-48">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
          loading="lazy"
        />
      </div>

      <div className="p-4 space-y-2">
        <p className="text-xs text-gray-500 uppercase tracking-wider">
          {item.category}
        </p>

        <p className="text-sm font-semibold text-gray-800 line-clamp-2 h-10">
          {item.name}
        </p>

        <div className="flex items-center gap-2">
          <span className="text-red-500 font-bold text-lg">
            -{item.discount}%
          </span>
          <span className="text-xs text-gray-400 line-through">
            {item.oldPrice}
          </span>
        </div>

        <button
          onClick={() => navigate(`/product-detail/${item.id}`)}
          className="w-full mt-3 bg-gradient-to-r from-orange-400 to-red-500 text-white py-2 px-3 rounded-lg text-xs font-semibold hover:opacity-90 transition active:scale-95"
        >
          Mua ngay
        </button>
      </div>
    </div>
  );
};

export default DealCard;
