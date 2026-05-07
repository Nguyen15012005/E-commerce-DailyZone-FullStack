import React from "react";
import ReviewCard from "./ReviewCard";
import { Divider } from "@mui/material";

const Review = () => {
  return (
    <div className="p-5 lg:p-20 flex flex-col lg:flex-row gap-10 bg-gray-50">
      {/* LEFT */}
      <section className="w-full md:w-1/2 lg:w-[30%] space-y-4 bg-white p-4 rounded-xl shadow-sm">
        <img
          className="w-full h-[280px] object-cover rounded-lg"
          src="https://cdn.prod.website-files.com/622488277ab5ee818d179d9f/6851ef68b64528a9ee3e9af3_6633f57bd5f74992577ce526_pasted_image_0-5.webp"
          alt=""
        />

        <div className="space-y-1">
          <p className="font-semibold text-lg">Camera SamSung</p>
          <p className="text-sm text-gray-500">
            High-quality camera for professional photography
          </p>
        </div>

        {/* PRICE */}
        <div className="flex items-center gap-3 mt-3">
          <span className="font-bold text-xl text-red-500">999.999 VNĐ</span>

          {/* ❌ sửa lỗi ở đây */}
          <span className="line-through text-gray-400 text-sm">
            1.999.999 VNĐ
          </span>

          <span className="bg-green-100 text-green-600 text-xs px-2 py-1 rounded">
            -50%
          </span>
        </div>
      </section>

      {/* RIGHT */}
      <section className="w-full md:w-1/2 lg:w-[70%] bg-white p-5 rounded-xl shadow-sm">
        <h1 className="font-semibold text-2xl pb-4 border-b">
          Đánh giá & Xếp hạng
        </h1>

        <div className="flex flex-col gap-3 max-h-[500px] overflow-y-auto scrollbar-hide">
          {[1, 1, 1, 1, 1].map((item, i) => (
            <div key={i} className="space-y-4">
              <ReviewCard />
              {i !== 4 && <Divider />}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Review;
