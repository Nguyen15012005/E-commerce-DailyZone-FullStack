import { ElectricBolt } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import React from "react";

const OrderItem = () => {
  return (
    <div className="text-sm bg-white p-5 space-y-4 border rounded-md cursor-pointer">
      <div className="flex items-center gap-5">
        <div className="">
          <Avatar size="small" className="bg-blue-500" sx={{ color: "red" }}>
            <ElectricBolt />
          </Avatar>
        </div>
        <div className="">
          <h1 className="font-medium">Đơn hàng #123456</h1>
          <p className="text-gray-500">Ngày đặt hàng: 01/01/2024</p>
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
