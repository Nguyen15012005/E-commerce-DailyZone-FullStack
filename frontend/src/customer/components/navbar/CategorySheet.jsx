import React from "react";

import { Box } from "@mui/material";
import { womenLevelTwo } from "./../../../data/category/level two/womenLevelTwo";
import { menLevelTwo } from "./../../../data/category/level two/menLevelTwo";
import { electronicsLevelTwo } from "./../../../data/category/level two/electronicsLevelTwo";
import { furnitureLevelTwo } from "./../../../data/category/level two/furnitureLevelTwo";
import { menLevelThree } from "./../../../data/category/level three/menLevelThree";
import { womenLevelThree } from "./../../../data/category/level three/womenLevelThree";
import { electronicsLevelThree } from "./../../../data/category/level three/electronicsLevelThree";
import { furnitureLevelThree } from "./../../../data/category/level three/furnitureLevelThree";

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
  const childCategory = (category, parentCategoryId) => {
    return category.filter(
      (item) => item.parentCategoryId === parentCategoryId,
    );
  };

  return (
    <Box
      sx={{ zIndex: 2 }}
      onMouseEnter={() => setShowSheet(true)}
      onMouseLeave={() => setShowSheet(false)}
      className="bg-white shadow-lg lg:h-[500px] overflow-y-auto"
    >
      <div className="flex text-sm flex-wrap">
        {categoryTwo[selectedCategory]?.map((item, index) => (
          <div
            key={item.categoryId}
            className={`p-8 lg:w-[20%] ${
              index % 2 === 0 ? "bg-slate-50" : "bg-white"
            }`}
          >
            <p className="text-[#C9A96E] mb-5 font-semibold">{item.name}</p>

            <ul className="space-y-3">
              {childCategory(
                categoryThree[selectedCategory],
                item.categoryId,
              ).map((child) => (
                <li
                  key={child.categoryId}
                  className="hover:text-[#C9A96E] cursor-pointer"
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
