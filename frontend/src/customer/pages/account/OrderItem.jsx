import { ElectricBolt, KeyboardArrowRight } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const OrderItem = () => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate("/account/orders/123456")}
      className="group cursor-pointer overflow-hidden rounded-[28px] border border-[#F2E8D7] bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(201,169,110,0.18)]"
    >
      <div className="flex items-center justify-between border-b border-[#F2E8D7] px-5 py-5">
        <div className="flex items-center gap-4">
          <Avatar
            sx={{
              bgcolor: "#FFF7E8",
              width: 52,
              height: 52,
              border: "1px solid #EADFCB",
            }}
          >
            <ElectricBolt sx={{ color: "#B88A44" }} />
          </Avatar>

          <div>
            <div className="mb-1 flex items-center gap-2">
              <span className="rounded-full bg-[#FFF7E8] px-3 py-1 text-xs font-semibold text-[#B88A44]">
                Đang giao hàng
              </span>
            </div>

            <h1 className="text-lg font-bold text-[#3B2B12]">
              Đơn hàng #123456
            </h1>

            <p className="text-sm text-[#8B7355]">Ngày đặt hàng: 01/01/2024</p>
          </div>
        </div>

        <KeyboardArrowRight className="text-[#C9A96E] transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#B88A44]" />
      </div>

      <div className="flex flex-col gap-5 bg-[#FFFCF6] p-5 lg:flex-row">
        <div className="overflow-hidden rounded-2xl bg-white p-2 shadow-sm">
          <img
            className="h-[110px] w-[110px] rounded-xl object-cover transition-transform duration-500 group-hover:scale-105"
            src="https://media.rolex.com/image/upload/q_auto/f_auto/c_limit,w_1920/v1775305331/rolexcom/094398bf1f99/navigation/classic-watches-day-date-naviguation-square"
            alt=""
          />
        </div>

        <div className="flex w-full flex-col justify-between">
          <div>
            <h1 className="text-xl font-bold text-[#3B2B12]">
              Rolex Submariner
            </h1>

            <p className="mt-2 text-sm leading-6 text-[#8B7355]">
              Đồng hồ cao cấp với thiết kế sang trọng, mặt kính sapphire và khả
              năng chống nước vượt trội.
            </p>
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-3">
            <div className="rounded-full bg-white px-4 py-2 text-sm font-medium text-[#6B4F1D] shadow-sm">
              Số lượng: 1
            </div>

            <div className="rounded-full bg-white px-4 py-2 text-sm font-medium text-[#6B4F1D] shadow-sm">
              Size: FREE
            </div>

            <div className="rounded-full bg-gradient-to-r from-[#D6B57A] to-[#B88A44] px-4 py-2 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(201,169,110,0.25)]">
              120.000.000đ
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
