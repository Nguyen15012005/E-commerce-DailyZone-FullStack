import React from "react";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { womenLevelTwo } from "./../../../data/category/level_two/womenLevelTwo";
import { menLevelTwo } from "./../../../data/category/level_two/menLevelTwo";
import { electronicsLevelTwo } from "./../../../data/category/level_two/electronicsLevelTwo";
import { furnitureLevelTwo } from "./../../../data/category/level_two/furnitureLevelTwo";

import { menLevelThree } from "./../../../data/category/level_three/menLevelThree";
import { womenLevelThree } from "./../../../data/category/level_three/womenLevelThree";
import { electronicsLevelThree } from "./../../../data/category/level_three/electronicsLevelThree";
import { furnitureLevelThree } from "./../../../data/category/level_three/furnitureLevelThree";

const categoryTwo = {
  men: menLevelTwo,
  women: womenLevelTwo,
  electronics: electronicsLevelTwo,
  home_furnitures: furnitureLevelTwo,
};

const categoryThree = {
  men: menLevelThree,
  women: womenLevelThree,
  electronics: electronicsLevelThree,
  home_furnitures: furnitureLevelThree,
};

const CategorySheet = ({ selectedCategory, setShowSheet }) => {
  const navigate = useNavigate();

  const childCategory = (category, parentCategoryId) => {
    return category.filter(
      (item) => item.parentCategoryId === parentCategoryId,
    );
  };

  const handleNavigate = (child) => {
    console.log("Clicked:", child);

    // đóng menu
    setShowSheet(false);

    // chuyển trang
    navigate("/product-list");
  };

  return (
    <Box
      sx={{ zIndex: 999 }}
      onMouseEnter={() => setShowSheet(true)}
      className="bg-white shadow-lg lg:h-[500px] overflow-y-auto relative"
    >
      <div className="flex text-sm flex-wrap">
        {categoryTwo[selectedCategory]?.map((item, index) => (
          <div
            key={item.categoryId}
            className={`p-8 lg:w-[20%] ${
              index % 2 === 0 ? "bg-slate-50" : "bg-white"
            }`}
          >
            {/* category level 2 */}
            <p className="text-yellow-700 mb-5 font-semibold">{item.name}</p>

            {/* category level 3 */}
            <ul className="space-y-3">
              {childCategory(
                categoryThree[selectedCategory],
                item.categoryId,
              ).map((child) => (
                <li
                  key={child.categoryId}
                  onClick={() => handleNavigate(child)}
                  className="cursor-pointer hover:text-yellow-700 transition duration-200"
                >
                  {child.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Box>
  );
};

export default CategorySheet;
