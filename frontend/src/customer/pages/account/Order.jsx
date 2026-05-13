import React from "react";
import OrderItem from "./OrderItem";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";

const Order = () => {
  return (
    <div className="min-h-screen">
      {/* HEADER */}
      <div className="mb-8 flex flex-col gap-4 rounded-[28px] border border-[#F2E8D7] bg-gradient-to-r from-[#FFFDF8] to-[#FAF5EA] p-5 shadow-[0_8px_30px_rgba(201,169,110,0.08)] lg:flex-row lg:items-center lg:justify-between">
        {/* LEFT */}
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#D6B57A] via-[#C9A96E] to-[#B88A44] text-white shadow-[0_10px_24px_rgba(201,169,110,0.25)]">
            <ShoppingBagOutlinedIcon sx={{ fontSize: 28 }} />
          </div>

          <div>
            <h1 className="text-2xl font-bold tracking-tight text-[#3B2B12]">
              Tất cả đơn hàng
            </h1>

            <p className="mt-1 text-sm text-[#8B7355]">
              Theo dõi và quản lý các đơn hàng của bạn
            </p>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-3 self-start lg:self-auto">
          <div className="rounded-2xl border border-[#EADFCB] bg-white px-4 py-2 shadow-sm">
            <span className="text-sm font-semibold text-[#B88A44]">
              4 đơn hàng
            </span>
          </div>
        </div>
      </div>

      {/* FILTER BAR */}
      <div className="mb-6 flex flex-wrap gap-3">
        <button className="rounded-full bg-gradient-to-r from-[#D6B57A] to-[#B88A44] px-5 py-2 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(201,169,110,0.25)] transition-all duration-300 hover:scale-[1.02]">
          Tất cả
        </button>

        <button className="rounded-full border border-[#EADFCB] bg-white px-5 py-2 text-sm font-medium text-[#8B7355] transition-all duration-300 hover:border-[#C9A96E] hover:text-[#B88A44]">
          Đang giao
        </button>

        <button className="rounded-full border border-[#EADFCB] bg-white px-5 py-2 text-sm font-medium text-[#8B7355] transition-all duration-300 hover:border-[#C9A96E] hover:text-[#B88A44]">
          Hoàn thành
        </button>

        <button className="rounded-full border border-[#EADFCB] bg-white px-5 py-2 text-sm font-medium text-[#8B7355] transition-all duration-300 hover:border-red-200 hover:text-red-500">
          Đã hủy
        </button>
      </div>

      {/* LIST */}
      <div className="space-y-5">
        {[1, 2, 3, 4].map((item) => (
          <OrderItem key={item} />
        ))}
      </div>
    </div>
  );
};

export default Order;
