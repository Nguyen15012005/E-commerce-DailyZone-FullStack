import React from "react";
import "./ShopByCategory.css";
import { useNavigate } from "react-router-dom";

const ShopByCategoryCard = () => {
  const navigate = useNavigate();
  return (
    <div className="flex gap-3 flex-col justify-center items-center group cursor-pointer">
      <div className="customer-border w-[150px] h-[150px] lg:w-[250px] lg:h-[250px] rounded-full bg-primary">
        <img
          className="rounded-full group-hover:scale-95 transition-transform duration-700 object-cover object-top h-full w-full"
          src="https://inchi.vn/data/cms_upload/files/blog/logo-shop-quan-ao/604.jpg"
          onClick={() => navigate("/product-list")}
          alt=""
        />
      </div>
      <h1>Quỳnh Nga Nguyễn Store</h1>
    </div>
  );
};

export default ShopByCategoryCard;
