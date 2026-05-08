import { Alert, Divider, Snackbar } from "@mui/material";
import React, { useEffect, useState } from "react";
import { IoLogOut } from "react-icons/io5";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Order from "../order/Order";

const menu = [
  { name: "Hồ sơ", path: "/account/profile" },
  { name: "Đơn hàng", path: "/account/orders" },
  { name: "Địa chỉ", path: "/account/addresses" },
  { name: "Tài khoản thanh toán", path: "/account/saved-card" },
  { name: "Đăng xuất", path: "/" },
];

const Account = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = (item) => {
    navigate(item.path);
  };

  return (
    <div className="px-4 lg:px-20 min-h-screen mt-10 ">
      <div className="bg-gray-50 p-5 rounded-xl shadow-sm">
        {/* HEADER */}
        <div className="mb-5">
          <h1 className="text-2xl font-bold text-gray-800">
            Nguyễn Nam Trung Nguyên
          </h1>
          <p className="text-gray-500 text-sm">Quản lý tài khoản</p>
        </div>

        <Divider />

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 mt-5">
          {/* SIDEBAR */}
          <div className="bg-white shadow-md rounded-2xl p-3 flex lg:flex-col flex-row flex-wrap gap-2 h-fit">
            {/*  Left  */}
            {menu.map((item, index) => {
              const isActive = location.pathname.includes(item.path)

              return (
                <div
                  onClick={() => handleClick(item)}
                  key={index}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl cursor-pointer transition-all duration-200
                  ${
                    isActive
                      ? "bg-gray-800 text-white shadow"
                      : "hover:bg-gray-100 text-gray-700"
                  }
                `}
                >
                  <span className="font-medium">{item.name}</span>

                  {item.name === "Đăng xuất" && <IoLogOut className="white" />}
                </div>
              );
            })}
          </div>
          {/* Right */}
          <div className="right lg:col-span-2 lg:pl-5 py-5">
            <Order />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
