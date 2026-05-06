import React, { useState, useRef, useEffect } from "react";
import Box from "@mui/material/Box";
import MenuIcon from "@mui/icons-material/Menu";
import { Button, IconButton, useMediaQuery, useTheme } from "@mui/material";
import {
  AddShoppingCart,
  FavoriteBorder,
  Search,
  Storefront,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import CategorySheet from "./CategorySheet";

const Navbar = () => {
  const theme = useTheme();
  const isLarge = useMediaQuery(theme.breakpoints.up("lg"));

  const [openSearch, setOpenSearch] = useState(false);

  // ✅ STATE
  const [showSheet, setShowSheet] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("men");

  const searchRef = useRef(null);

  // ✅ THÊM delay hover
  const timeoutRef = useRef(null);

  const navigate = useNavigate();

  // click outside search
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setOpenSearch(false);
      }
    };

    if (openSearch) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openSearch]);

  return (
    <div className="navbar sticky top-0 z-50 bg-white shadow-sm text-gray-700">
      <Box sx={{ zIndex: 2 }} className="sticky top-0 left-0 right-0 bg-white">
        <div className="">
          {/* Announcement */}
          <div className="bg-gradient-to-r from-[#100d0d] to-[#1a1614] h-8 flex items-center justify-center">
            <span className="text-[11px] tracking-[2px] uppercase text-white">
              ✦ Miễn phí vận chuyển cho đơn hàng trên 500.000đ ✦
            </span>
          </div>

          {/* MAIN NAV */}
          <div className="flex items-center justify-between px-4 md:px-6 lg:px-20 h-[70px] border-b border-gray-200">
            {/* LEFT */}
            <div className="flex items-center gap-3">
              {!isLarge && (
                <IconButton className="hover:bg-gray-100">
                  <MenuIcon />
                </IconButton>
              )}

              {/* LOGO */}
              <div className="flex items-center gap-3 cursor-pointer">
                <div className="flex flex-col leading-none">
                  <span className="text-[40px] font-serif text-[#C9A96E]">
                    D
                  </span>
                  <span className="text-[40px] font-serif text-[#C9A96E] -mt-6 ml-3">
                    Z
                  </span>
                </div>

                <div className="flex flex-col">
                  <h1 className="text-[18px] md:text-[20px] font-serif tracking-[3px] text-[#111] mb-2">
                    DAILY ZONE
                  </h1>
                  <span className="text-[9px] tracking-[5px] text-gray-400 uppercase">
                    Style your life
                  </span>
                </div>
              </div>

              {/* MENU */}
              {isLarge && (
                <ul className="flex items-center ml-6 text-gray-700">
                  {[
                    { name: "Men", key: "men" },
                    { name: "Women", key: "women" },
                    { name: "Electric", key: "electronics" },
                    { name: "Home & Furniture", key: "home_furnitures" },
                  ].map((item) => (
                    <li
                      key={item.key}
                      onMouseEnter={() => {
                        clearTimeout(timeoutRef.current); // ✅ fix mất hover
                        setSelectedCategory(item.key);
                        setShowSheet(true);
                      }}
                      className="
                        relative px-4 h-[70px] flex items-center cursor-pointer font-semibold
                        after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 
                        after:bg-black after:transition-all after:duration-300
                        hover:after:w-full hover:text-black
                      "
                    >
                      {item.name}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* RIGHT */}
            <div className="flex items-center gap-2 lg:gap-4">
              <IconButton
                onClick={() => setOpenSearch(true)}
                className="hover:bg-gray-100"
              >
                <Search />
              </IconButton>

              <IconButton className="hover:bg-gray-100">
                <FavoriteBorder sx={{ fontSize: 24 }} />
              </IconButton>

              <IconButton className="hover:bg-gray-100 relative">
                <AddShoppingCart sx={{ fontSize: 24 }} />
                <span className="absolute -top-1 -right-1 min-w-[16px] h-[16px] flex items-center justify-center text-[10px] bg-black text-white rounded-full">
                  2
                </span>
              </IconButton>

              <Button
                onClick={() => navigate("/login")}
                variant="contained"
                className="normal-case px-6 py-2 bg-black text-white border border-black rounded-md"
              >
                Đăng nhập
              </Button>

              {isLarge && (
                <Button
                  startIcon={<Storefront />}
                  variant="outlined"
                  className="normal-case px-6 py-2 border border-[#C6A15B] text-[#C6A15B]"
                >
                  Bán hàng
                </Button>
              )}
            </div>
          </div>

          {/* SEARCH */}
          {openSearch && (
            <div
              ref={searchRef}
              className="w-full bg-white border-b px-4 md:px-6 lg:px-20 py-4 flex items-center gap-3"
            >
              <Search />
              <input className="flex-1 outline-none" autoFocus />
            </div>
          )}
        </div>

        {/* ✅ CATEGORY SHEET */}
        {showSheet && (
          <div
            onMouseEnter={() => {
              clearTimeout(timeoutRef.current); // ✅ giữ hover
              setShowSheet(true);
            }}
            onMouseLeave={() => {
              timeoutRef.current = setTimeout(() => {
                setShowSheet(false);
              }, 200); // ✅ delay tránh mất hover
            }}
            className="categorySheet absolute top-[5.5rem] left-20 right-20 z-40"
          >
            <CategorySheet
              selectedCategory={selectedCategory}
              setShowSheet={setShowSheet}
            />
          </div>
        )}
      </Box>
    </div>
  );
};

export default Navbar;
