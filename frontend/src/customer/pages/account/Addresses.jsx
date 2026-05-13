import React from "react";
import UserAddressCard from "./UserAddressCard";

const addresses = [
  {
    id: 1,
    name: "Nguyễn Nam Trung Nguyên",
    address: "12 Nguyễn Văn Bảo",
    locality: "Phường 4",
    city: "Gò Vấp",
    state: "Hồ Chí Minh",
    pinCode: "700000",
    mobile: "0909 999 999",
  },
  {
    id: 2,
    name: "Nguyễn Nam Trung Nguyên",
    address: "25 Lê Văn Việt",
    locality: "Hiệp Phú",
    city: "Thủ Đức",
    state: "Hồ Chí Minh",
    pinCode: "700000",
    mobile: "0911 222 333",
  },
];

const Addresses = () => {
  return (
    <div>
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[#3B2B12]">Địa chỉ của tôi</h1>
          <p className="mt-1 text-sm text-[#8B7355]">
            Quản lý địa chỉ giao hàng của bạn
          </p>
        </div>

        <button className="w-full rounded-2xl bg-gradient-to-r from-[#D6B57A] via-[#C9A96E] to-[#B88A44] px-5 py-3 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(201,169,110,0.25)] sm:w-auto">
          + Thêm địa chỉ
        </button>
      </div>

      <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
        {addresses.map((item) => (
          <UserAddressCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Addresses;
