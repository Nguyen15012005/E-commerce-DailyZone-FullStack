import React from "react";
import { useNavigate } from "react-router-dom";

const DealCard = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden cursor-pointer group">
      {/* Image */}
      <div className="relative overflow-hidden h-48">
        <img
          src="https://images.unsplash.com/photo-1549298916-b41d501d3772?w=300&q=80"
          alt="Product"
          className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="p-4 space-y-2">
        <p className="text-xs text-gray-500 uppercase tracking-wider">
          Sneaker
        </p>

        <p className="text-sm font-semibold text-gray-800 line-clamp-2 h-10">
          Giày Sneaker Thời Trang Cao Cấp
        </p>

        <div className="flex items-center gap-2">
          <span className="text-red-500 font-bold text-lg">-20%</span>
          <span className="text-xs text-gray-400 line-through">500K</span>
        </div>

        {/* CTA */}
        <button onClick={() => navigate("/product-detail")} className="w-full mt-3 bg-gradient-to-r from-orange-400 to-red-500 text-white py-2 px-3 rounded-lg text-xs font-semibold hover:opacity-90 transition active:scale-95">
          Mua ngay
        </button>
      </div>
    </div>
  );
};

export default DealCard;
