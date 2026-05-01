import React from "react";
import CategoryGrid from "./CategoryGrid/CategoryGrid";
import ElectricCategory from "./ElectricCategory/ElectricCategory";
import Deal from "./deal/Deal";

const Home = () => {
  return (
    <div>
      <div className="space-y-5 lg:space-y-10 relative">
        <ElectricCategory />
        <CategoryGrid />
        <Deal />
      </div>
    </div>
  );
};

export default Home;
