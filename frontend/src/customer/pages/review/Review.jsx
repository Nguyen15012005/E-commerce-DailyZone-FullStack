import React from "react";
import ReviewCard from "./ReviewCard";
import { Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Review = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-10 bg-gray-50 p-5 lg:flex-row lg:p-15">
      <section
        onClick={() => navigate("/product-detail/1")}
        className="w-full cursor-pointer space-y-4 rounded-xl bg-white p-4 shadow-sm md:w-1/2 lg:w-[30%]"
      >
        <img
          className="h-[280px] w-full rounded-lg object-cover"
          src="https://cdn.prod.website-files.com/622488277ab5ee818d179d9f/6851ef68b64528a9ee3e9af3_6633f57bd5f74992577ce526_pasted_image_0-5.webp"
          alt="Camera SamSung"
        />

        <div className="space-y-1">
          <p className="text-lg font-semibold">Camera SamSung</p>
          <p className="text-sm text-gray-500">
            High-quality camera for professional photography
          </p>
        </div>

        <div className="mt-3 flex items-center gap-3">
          <span className="text-xl font-bold text-red-500">999.999 VNĐ</span>
          <span className="text-sm text-gray-400 line-through">
            1.999.999 VNĐ
          </span>
          <span className="rounded bg-green-100 px-2 py-1 text-xs text-green-600">
            -50%
          </span>
        </div>
      </section>

      <section className="w-full rounded-xl bg-white p-5 shadow-sm md:w-1/2 lg:w-[70%]">
        <h1 className="border-b pb-4 text-2xl font-semibold">
          Đánh giá & Xếp hạng
        </h1>

        <div className="scrollbar-hide flex max-h-[500px] flex-col gap-3 overflow-y-auto">
          {[1, 2, 3, 4, 5].map((item, i) => (
            <div key={item} className="space-y-4">
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
