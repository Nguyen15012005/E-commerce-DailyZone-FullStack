import React from "react";
import { Facebook, Instagram, YouTube, Twitter } from "@mui/icons-material";

const Footer = () => {
  return (
    <footer className="mt-12 bg-gray-50 text-gray-700">
      {/* CTA */}
      <div className="px-5 lg:px-20 py-12 border-b border-gray-300">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-semibold text-black mb-2">
              Đăng ký nhận ưu đãi
            </h2>
            <p className="text-sm text-gray-500">
              Nhận thông tin khuyến mãi & sản phẩm mới sớm nhất
            </p>
          </div>

          <div className="flex w-full lg:w-auto gap-2">
            <input
              type="email"
              placeholder="Nhập email của bạn..."
              className="flex-1 lg:w-[300px] px-4 py-3 rounded-full border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-black transition"
            />
            <button className="px-6 py-3 rounded-full bg-black text-white hover:bg-gray-800 transition">
              Đăng ký
            </button>
          </div>
        </div>
      </div>

      {/* MAIN */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-5 lg:px-20 py-12">
        {/* BRAND */}
        <div>
          <h1 className="text-2xl font-bold text-black mb-4 tracking-wide">
            DailyZone
          </h1>
          <p className="text-sm text-gray-500 leading-relaxed mb-4">
            Nền tảng thương mại điện tử hiện đại, mang đến trải nghiệm mua sắm
            nhanh chóng, tiện lợi và đáng tin cậy.
          </p>

          <div className="flex gap-3">
            {[Facebook, Instagram, YouTube, Twitter].map((Icon, index) => (
              <div
                key={index}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-gray-300 cursor-pointer
                hover:bg-black hover:text-white hover:scale-105 transition-all duration-300"
              >
                <Icon fontSize="small" />
              </div>
            ))}
          </div>
        </div>

        {/* CATEGORY */}
        <div>
          <h2 className="font-semibold text-black mb-4">Danh mục</h2>
          <ul className="space-y-3 text-sm">
            {["Men", "Women", "Kid", "Furniture"].map((item) => (
              <li
                key={item}
                className="cursor-pointer text-gray-500 hover:text-black hover:translate-x-1 transition-all duration-200"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* SUPPORT */}
        <div>
          <h2 className="font-semibold text-black mb-4">Hỗ trợ</h2>
          <ul className="space-y-3 text-sm">
            {["Liên hệ", "Chính sách", "Vận chuyển", "Đổi trả"].map((item) => (
              <li
                key={item}
                className="cursor-pointer text-gray-500 hover:text-black hover:translate-x-1 transition-all duration-200"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h2 className="font-semibold text-black mb-4">Liên hệ</h2>

          <p className="text-sm text-gray-500 mb-2">
            Email: support@dailyzone.com
          </p>
          <p className="text-sm text-gray-500 mb-4">Hotline: 1900 1234</p>

          <div className="p-4 rounded-xl bg-white border border-gray-200 hover:shadow-md transition">
            <p className="text-sm font-medium text-black">Hỗ trợ 24/7</p>
            <p className="text-xs text-gray-500">Luôn sẵn sàng giúp bạn</p>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-gray-300 px-5 lg:px-20 py-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
        <p>© 2026 DailyZone. All rights reserved.</p>

        <div className="flex gap-5 mt-3 md:mt-0">
          <span className="cursor-pointer hover:text-black transition">
            Privacy
          </span>
          <span className="cursor-pointer hover:text-black transition">
            Terms
          </span>
          <span className="cursor-pointer hover:text-black transition">
            Cookies
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
