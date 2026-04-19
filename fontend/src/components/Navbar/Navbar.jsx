import React, { useContext, useState } from "react";
import Logo from "../assets/hero/logo.png";
import DarkMode from "./DarkMode";
import GGPlay from "../assets/qrcode/ch.png";
import APPStore from "../assets/qrcode/app.png";
import QRCode from "../assets/qrcode/qr.png";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import { BsChatHeart } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";
import { IoMdHelpCircle } from "react-icons/io";
import { PiTiktokLogoFill } from "react-icons/pi";
import { Link } from "react-router-dom";

const EngLish = [
  {
    id: 1,
    name: "Tiếng Việt",
    link: "/#",
  },

  {
    id: 2,
    name: "EngLish",
    link: "/#",
  },

  {
    id: 3,
    name: "中国话",
    link: "/#",
  },

  {
    id: 4,
    name: "한국어",
    link: "/#",
  },

  {
    id: 5,
    name: "日本語",
    link: "/#",
  },

  {
    id: 6,
    name: "Le Français",
    link: "/#",
  },

  {
    id: 7,
    name: "Português",
    link: "/#",
  },

  {
    id: 8,
    name: "Deutsch",
    link: "/#",
  },
];

const Navbar = () => {
  const [menu, setMenu] = useState("Home");
  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      {/* upper Navbar */}
      <div className="bg-primary/40 py-3 sm:py-0">
        <div className="container justify-between items-center sm:flex gap-4">
          <div className="py-3 justify-between md:flex hidden ">
            <div className="relative flex justify-between group">
              <span className="cursor-pointer">
                Visit our store on the app Dillys
              </span>

              <span className="ml-1 dark:text-slate-50">|</span>

              {/* Ảnh QR code */}
              <div className="absolute left-0 top-full mt-2 p-2 w-[186px] bg-white bg-opacity-70 rounded shadow-md hidden group-hover:block z-10 hidden">
                <img src={QRCode} alt="QR Code" className="w-full " />
                <div className="flex justify-between mt-2">
                  <a href="YOUR_GOOGLE_PLAY_URL">
                    <img src={GGPlay} alt="Google Play" className="h-4" />
                  </a>
                  <a href="YOUR_APP_STORE_URL">
                    <img src={APPStore} alt="App Store" className="h-4" />
                  </a>
                </div>
              </div>
            </div>

            <div className="flex ml-1">
              <div className="hidden md:flex">
                <span className="mr-2">Connect</span>
                <div className="flex">
                  <button className="cursor-pointer bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white ml-1 py-0 px-3 rounded-2xl flex items-center gap-1 group">
                    <FaFacebookSquare />
                    <span className="group-hover:block h- hidden transition-all duration-200">
                      Facebook
                    </span>
                  </button>
                  <div
                    href=""
                    className="cursor-pointer bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white ml-1 py-0 px-3 rounded-2xl flex items-center gap-1 group"
                  >
                    <FaInstagramSquare />
                    <span className="group-hover:block hidden transition-all duration-200">
                      Instagram
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex">
              <div className="cursor-pointer bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white ml-1 mt-2 h-7 py-0 px-3 rounded-full flex items-center gap-1 group">
                <IoNotifications className="" />
                <span className="group-hover:inline-block hidden transition-all duration-200">
                  Notifications
                </span>
              </div>
              <div className="cursor-pointer bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white ml-1 mt-2 h-7 py-0 px-3 rounded-full flex items-center gap-1 group">
                <IoMdHelpCircle className="" />
                <span className="group-hover:inline-block hidden transition-all duration-200">
                  Help
                </span>
              </div>

              <div className="group relative cursor-pointer">
                <a href="#" className="flex items-center gap-[2px] py-2 ml-2">
                  Language
                  <span>
                    <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                  </span>
                </a>
                <div className="absolute z-[9999] hidden group-hover:block w-[150px] rounded-md bg-white p-2 text-black shadow-md">
                  <ul className="max-h-40 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
                    {EngLish.map((data) => (
                      <li key={data.id}>
                        <a
                          href={data.link}
                          className="inline-block w-full rounded-md p-2 hover:bg-primary/20 "
                        >
                          {data.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex mt-2">
              <Link to="/login">
                <button
                  // onClick={() => handleOrderLogin()}
                  className="px-3 cursor-pointer bg-gradient-to-r transition-all duration-200 rounded-full flex items-center gap-3 group hover:text-orange-500  dark:hover:text-orange-500"
                >
                  Login
                </button>
              </Link>
              <span className="dark:text-slate-50">|</span>

              <Link to="/register">
                <button
                  // onClick={() => handleOrderRegister()}
                  className="px-3 cursor-pointer bg-gradient-to-r transition-all duration-200 rounded-full flex items-center gap-3 group hover:text-orange-500 dark:hover:text-orange-500"
                >
                  Register
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Middle bar*/}
      <div className="bg-primary/40 py-3 sm:py-0">
        <div className="container flex justify-between items-center">
          <div className="py-5">
            <Link
              to="/"
              style={{ textDecoration: "none" }}
              onClick={() => setMenu("Home")}
              className="font-bold text-2xl sm:text-3xl flex gap-2"
            >
              <img src={Logo} alt="Logo" className="w-10" />
              <span className="object-cover">
                Dillys
              </span>
            </Link>
          </div>

          {/* Search bar*/}
          <div className="flex justify-between items-center gap-4">
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="search"
                className="w-[200px] sm:w-[200px]
                      group-hover:w-[400px] transition-all 
                      duration-300 rounded-full border 
                      border-gray-300 px-2 py-1
                      focus:outline-none focus:border-1
                      focus:border-primary dark:border-gray-500 dark:bg-gray-900
                      "
              />
              <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
            </div>
            {/* Chat-------------------------------------------- xử lí sau*/}
            <button className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group">
              <span className="group-hover:block hidden transition-all duration-200">
                Trend
              </span>
              <PiTiktokLogoFill className="text-xl text-white drop-shadow-sm cursor-pointer" />
            </button>
            <button className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group">
              <span className="group-hover:block hidden transition-all duration-200">
                Chat
              </span>
              <BsChatHeart className="text-xl text-white drop-shadow-sm cursor-pointer" />
            </button>
            {/* order button */}
            <Link to="/cart">
              <button
                // onClick={() => handleOrderPopup()}
                className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group"
              >
                <span className="group-hover:block hidden transition-all duration-200">
                  Order
                </span>
                <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
              </button>
            </Link>

            {/* DarkMode Switch  */}
            <div className="">
              <DarkMode />
            </div>
          </div>
        </div>
      </div>
      {/* lower Navbar : Menu*/}
      <div data-aos="zoom-in" className="flex justify-center">
        <ul className="sm:flex hidden items-center gap-4">
          <li onClick={() => setMenu("Home")}>
            <Link
              className={`px-3 cursor-pointer bg-gradient-to-r transition-all duration-200 rounded-full flex items-center gap-3 group ${
                menu === "Home" ? "text-orange-500" : "hover:text-orange-500"
              }`}
              style={{ textDecoration: "none" }}
              to="/"
            >
              Home
            </Link>
            {menu === "Home" && <hr />}
          </li>
          <li onClick={() => setMenu("toprates")}>
            <Link
              className={`px-3 cursor-pointer bg-gradient-to-r transition-all duration-200 rounded-full flex items-center gap-3 group ${
                menu === "toprates"
                  ? "text-orange-500"
                  : "hover:text-orange-500"
              }`}
              style={{ textDecoration: "none" }}
              to="/toprates"
            >
              Top Rate
            </Link>
            {menu === "toprates" && <hr />}
          </li>
          <li onClick={() => setMenu("mens")}>
            <Link
              className={`px-3 cursor-pointer bg-gradient-to-r transition-all duration-200 rounded-full flex items-center gap-3 group ${
                menu === "mens" ? "text-orange-500" : "hover:text-orange-500"
              }`}
              style={{ textDecoration: "none" }}
              to="/mens"
            >
              Mens Wear
            </Link>
            {menu === "mens" && <hr />}
          </li>
          <li onClick={() => setMenu("womens")}>
            <Link
              className={`px-3 cursor-pointer bg-gradient-to-r transition-all duration-200 rounded-full flex items-center gap-3 group ${
                menu === "womens" ? "text-orange-500" : "hover:text-orange-500"
              }`}
              style={{ textDecoration: "none" }}
              to="/womens"
            >
              Womens Wear
            </Link>
            {menu === "womens" && <hr />}
          </li>
          <li onClick={() => setMenu("kids")}>
            <Link
              className={`px-3 cursor-pointer bg-gradient-to-r transition-all duration-200 rounded-full flex items-center gap-3 group ${
                menu === "kids" ? "text-orange-500" : "hover:text-orange-500"
              }`}
              style={{ textDecoration: "none" }}
              to="/kids"
            >
              Kids Wear
            </Link>
            {menu === "kids" && <hr />}
          </li>
          <li onClick={() => setMenu("electronic")}>
            <Link
              className={`px-3 cursor-pointer bg-gradient-to-r transition-all duration-200 rounded-full flex items-center gap-3 group ${
                menu === "electronic"
                  ? "text-orange-500"
                  : "hover:text-orange-500"
              }`}
              style={{ textDecoration: "none" }}
              to="/electronic"
            >
              Electronics
            </Link>
            {menu === "electronic" && <hr />}
          </li>

          {/* Dropdown */}
          <li className="group relative cursor-pointer">
            <a href="#" className="flex items-center gap-[2px] py-2">
              Accessory
              <span>
                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
              </span>
            </a>
            <div className="absolute z-[9999] hidden group-hover:block w-[150px] rounded-md bg-white p-2 text-black shadow-md">
              <ul>
                <li onClick={() => setMenu("perfume")}>
                  <Link
                    style={{ textDecoration: "none" }}
                    to="/perfume"
                    className={`inline-block w-full rounded-md p-2 ${
                      menu === "perfume"
                        ? "bg-primary/20"
                        : "hover:bg-primary/20"
                    }`}
                  >
                    Perfume
                  </Link>
                  {menu === "perfume" && <hr />}
                </li>
                <li onClick={() => setMenu("watch")}>
                  <Link
                    style={{ textDecoration: "none" }}
                    to="/watch"
                    className={`inline-block w-full rounded-md p-2 ${
                      menu === "watch" ? "bg-primary/20" : "hover:bg-primary/20"
                    }`}
                  >
                    Watch
                  </Link>
                  {menu === "watch" && <hr />}
                </li>
                <li onClick={() => setMenu("essentialOil")}>
                  <Link
                    style={{ textDecoration: "none" }}
                    to="/essentialOil"
                    className={`inline-block w-full rounded-md p-2 ${
                      menu === "essentialOil"
                        ? "bg-primary/20"
                        : "hover:bg-primary/20"
                    }`}
                  >
                    Essential Oil
                  </Link>
                  {menu === "essentialOil" && <hr />}
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
