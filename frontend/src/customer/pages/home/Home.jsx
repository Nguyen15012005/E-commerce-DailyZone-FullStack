import React from "react";
import CategoryGrid from "./category_grid/CategoryGrid";
import Deal from "./deal/Deal";
import ElectricCategory from "./electric_category/ElectricCategory";
import ShopByCategory from "./shop_by_category/ShopByCategory";
import { Storefront } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      {/* CATEGORY QUICK */}
      <section>
        {/* <ElectricCategory /> */}
      </section>

      {/* TREND GRID */}
      <section>
        <CategoryGrid />
      </section>

      {/* DEAL */}
      <section>
        <Deal />
      </section>

      {/* SHOP BY CATEGORY */}
      <section>
        <ShopByCategory />
      </section>

      <section className="pt-20 relative">
        <img
          className="w-full h-full object-cover"
          src="/assets/image/become_seller-new.png"
          alt=""
        />

        {/* BUTTON */}
        <div className="absolute bottom-14 left-2 lg:left-[4rem]">
          <Button
            onClick={() => navigate("/seller")}
            startIcon={<Storefront />}
            variant="contained"
            className="
            normal-case
            px-8 py-3
            bg-black text-white
            border border-black
            rounded-none
            tracking-wider
            shadow-none
            transition-all duration-300

            hover:bg-transparent
            hover:text-[#C6A15B]
            hover:border-[#C6A15B]
          "
          >
            Bắt đầu bán hàng
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
