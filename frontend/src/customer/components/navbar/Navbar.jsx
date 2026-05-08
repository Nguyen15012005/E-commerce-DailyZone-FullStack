import React, { useState, useRef, useEffect } from "react";
import Box from "@mui/material/Box";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Button,
  IconButton,
  useMediaQuery,
  useTheme,
  Drawer,
  Menu,
  MenuItem,
  Avatar,
  Divider,
  ListItemIcon,
} from "@mui/material";

import {
  AddShoppingCart,
  Favorite,
  FavoriteBorder,
  Search,
  Storefront,
  Person,
  ShoppingBag,
  Logout,
} from "@mui/icons-material";

import { useSelector, useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom";

import { red } from "@mui/material/colors";

import CategorySheet from "./CategorySheet";

import { logout } from "../../../store/authSlice";

const Navbar = () => {
  const theme = useTheme();
  const isLarge = useMediaQuery(theme.breakpoints.up("lg"));

  const [openSearch, setOpenSearch] = useState(false);

  // ✅ STATE
  const [showSheet, setShowSheet] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("men");

  // ✅ MOBILE MENU
  const [openMenu, setOpenMenu] = useState(false);

  // ✅ USER MENU
  const [anchorEl, setAnchorEl] = useState(null);

  const openUserMenu = Boolean(anchorEl);

  const searchRef = useRef(null);
  const timeoutRef = useRef(null);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  // ✅ AUTH STATE
  const { isAuthenticated, user } = useSelector((state) => state.auth);

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

  // ✅ OPEN USER MENU
  const handleOpenUserMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // ✅ CLOSE USER MENU
  const handleCloseUserMenu = () => {
    setAnchorEl(null);
  };

  // ✅ LOGOUT
  const handleLogout = () => {
    dispatch(logout());

    localStorage.removeItem("token");

    navigate("/");
  };

  return (
    <div className="navbar sticky top-0 z-50 bg-white shadow-sm text-gray-700">
      <Box sx={{ zIndex: 2 }} className="sticky top-0 left-0 right-0 bg-white">
        <div>
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
                <IconButton
                  onClick={() => setOpenMenu(true)}
                  className="hover:bg-gray-100"
                >
                  <MenuIcon />
                </IconButton>
              )}

              {/* LOGO */}
              <div className="flex items-center gap-2 lg:gap-3 cursor-pointer">
                <div className="flex flex-col leading-none">
                  <span className="text-[26px] lg:text-[40px] font-serif text-[#C9A96E]">
                    D
                  </span>

                  <span className="text-[26px] lg:text-[40px] font-serif text-[#C9A96E] -mt-4 lg:-mt-6 ml-2 lg:ml-3">
                    Z
                  </span>
                </div>

                <div className="flex flex-col">
                  <h1 className="text-[14px] sm:text-[16px] lg:text-[20px] font-serif tracking-[2px] lg:tracking-[3px] text-[#111] mb-1 lg:mb-2">
                    DAILY ZONE
                  </h1>

                  <span className="hidden sm:block text-[8px] lg:text-[9px] tracking-[5px] text-gray-400 uppercase">
                    Style your life
                  </span>
                </div>
              </div>

              {/* MENU DESKTOP */}
              {isLarge && (
                <ul className="flex items-center ml-6 space-x-3 text-gray-700">
                  {[
                    { name: "Men", key: "men" },
                    { name: "Women", key: "women" },
                    { name: "Electric", key: "electronics" },
                    { name: "Furniture", key: "home_furnitures" },
                  ].map((item) => (
                    <li
                      key={item.key}
                      onMouseEnter={() => {
                        clearTimeout(timeoutRef.current);
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
                <Favorite sx={{ fontSize: 24, color: red[500] }} />
              </IconButton>

              <IconButton className="hover:bg-gray-100 relative">
                <AddShoppingCart sx={{ fontSize: 24 }} />

                <span className="absolute -top-1 -right-1 min-w-[16px] h-[16px] flex items-center justify-center text-[10px] bg-black text-white rounded-full">
                  2
                </span>
              </IconButton>

              {/* ✅ LOGIN / USER MENU */}
              {isAuthenticated ? (
                <>
                  <Button
                    onClick={handleOpenUserMenu}
                    className="
                      normal-case
                      flex
                      items-center
                      gap-2
                      text-black
                    "
                  >
                    <Avatar
                      sx={{
                        width: 34,
                        height: 34,
                        bgcolor: "#111",
                        fontSize: 14,
                      }}
                    >
                      {user?.fullName?.charAt(0)?.toUpperCase() || "U"}
                    </Avatar>

                    <span className="hidden lg:block font-medium">
                      {user?.fullName || "User"}
                    </span>
                  </Button>

                  <Menu
                    anchorEl={anchorEl}
                    open={openUserMenu}
                    onClose={handleCloseUserMenu}
                    PaperProps={{
                      elevation: 3,
                      sx: {
                        mt: 1.5,
                        minWidth: 220,
                        borderRadius: 3,
                      },
                    }}
                  >
                    <div className="px-4 py-3">
                      <p className="font-semibold text-sm">{user?.fullName}</p>

                      <p className="text-xs text-gray-500">{user?.email}</p>
                    </div>

                    <Divider />

                    <MenuItem
                      onClick={() => {
                        navigate("/account");
                        handleCloseUserMenu();
                      }}
                    >
                      <ListItemIcon>
                        <Person fontSize="small" />
                      </ListItemIcon>
                      Tài khoản
                    </MenuItem>

                    <MenuItem
                      onClick={() => {
                        navigate("/orders");
                        handleCloseUserMenu();
                      }}
                    >
                      <ListItemIcon>
                        <ShoppingBag fontSize="small" />
                      </ListItemIcon>
                      Đơn hàng
                    </MenuItem>

                    <MenuItem
                      onClick={() => {
                        navigate("/wishlist");
                        handleCloseUserMenu();
                      }}
                    >
                      <ListItemIcon>
                        <FavoriteBorder fontSize="small" />
                      </ListItemIcon>
                      Yêu thích
                    </MenuItem>

                    <Divider />

                    <MenuItem
                      onClick={() => {
                        handleCloseUserMenu();
                        handleLogout();
                      }}
                    >
                      <ListItemIcon>
                        <Logout fontSize="small" />
                      </ListItemIcon>
                      Đăng xuất
                    </MenuItem>
                  </Menu>
                </>
              ) : (
                <Button
                  onClick={() => navigate("/login")}
                  variant="contained"
                  className="
                    normal-case 
                    px-3 lg:px-6 
                    py-1.5 lg:py-2 
                    text-xs lg:text-sm 
                    bg-black text-white border border-black rounded-md
                  "
                >
                  Đăng nhập
                </Button>
              )}

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

        {/* CATEGORY SHEET */}
        {isLarge && showSheet && (
          <div
            onMouseEnter={() => {
              clearTimeout(timeoutRef.current);
              setShowSheet(true);
            }}
            onMouseLeave={() => {
              timeoutRef.current = setTimeout(() => {
                setShowSheet(false);
              }, 200);
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

      {/* MOBILE DRAWER MENU */}
      <Drawer anchor="left" open={openMenu} onClose={() => setOpenMenu(false)}>
        <div className="w-[260px] p-4 space-y-3">
          <h2 className="text-lg font-semibold mb-2">Danh mục</h2>

          {[
            { name: "Men", key: "men" },
            { name: "Women", key: "women" },
            { name: "Electric", key: "electronics" },
            { name: "Furniture", key: "home_furnitures" },
          ].map((item) => (
            <div
              key={item.key}
              onClick={() => {
                setSelectedCategory(item.key);
                setShowSheet(true);
                setOpenMenu(false);
              }}
              className="py-3 px-3 rounded-lg cursor-pointer hover:bg-gray-100"
            >
              {item.name}
            </div>
          ))}
        </div>
      </Drawer>
    </div>
  );
};

export default Navbar;
