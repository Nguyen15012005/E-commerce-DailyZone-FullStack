import { Button, Divider } from "@mui/material";
import {
  ShieldCheck,
  Star,
  Truck,
  Wallet,
  BadgeCheck,
  Minus,
  Plus,
  ShoppingCart,
  Heart,
} from "lucide-react";
import React, { useState } from "react";
import SimilarProduct from "../SimilarProduct/SimilarProduct";
import ReviewCard from "../../review/ReviewCard";

const ProductDetail = () => {
  const [quantity, setQuantity] = useState(1);

  const handleAddCart = () => {
    console.log("Add to cart");
    navigate("/");
  };

  return (
    <div className="px-5 lg:px-20 pt-10 bg-gray-50 min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 bg-white p-5 rounded-xl shadow-sm">
        {/* LEFT - IMAGE */}
        <section className="flex flex-col lg:flex-row gap-5">
          <div className="w-full lg:w-[15%] flex flex-wrap lg:flex-col gap-3">
            {[1, 2, 3, 4].map((item, index) => (
              <img
                key={index}
                className="lg:w-full w-[60px] h-[60px] object-cover cursor-pointer rounded-lg border hover:border-teal-500 transition"
                src="https://images.pexels.com/photos/8485550/pexels-photo-8485550.jpeg"
                alt={`thumb-${index}`}
              />
            ))}
          </div>

          <div className="w-full lg:w-[85%]">
            <img
              className="w-full rounded-xl cursor-zoom-in border"
              alt="main-product"
              src="https://images.pexels.com/photos/8485551/pexels-photo-8485551.jpeg"
            />
          </div>
        </section>

        {/* RIGHT - INFO */}
        <section>
          <h1 className="font-bold text-4xl text-gray-900">
            Áo thun cotton cao cấp
          </h1>

          <p className="text-gray-500 mt-1">
            Chất liệu mềm mại, thoáng mát, phù hợp mọi hoạt động hàng ngày
          </p>

          {/* RATING */}
          <div className="flex items-center gap-3 mt-4">
            <div className="flex items-center gap-1 text-yellow-500">
              <Star size={18} fill="currentColor" />
              <span className="font-semibold text-black">4.5</span>
            </div>
            <Divider orientation="vertical" flexItem />
            <span className="text-gray-500 text-sm">358 đánh giá</span>
          </div>

          {/* PRICE */}
          <div className="mt-5 space-y-1">
            <div className="flex items-center gap-3">
              <span className="text-2xl font-bold text-red-500">199.000₫</span>
              <span className="line-through text-gray-400">299.000₫</span>
              <span className="bg-red-100 text-red-500 text-sm px-2 py-1 rounded">
                -33%
              </span>
            </div>

            <p className="text-sm text-gray-500">
              Giá đã bao gồm VAT. Miễn phí vận chuyển toàn quốc.
            </p>
          </div>

          {/* BENEFITS */}
          <div className="mt-6 space-y-3 text-sm">
            <div className="flex items-center gap-3">
              <ShieldCheck className="text-teal-500" />
              <p>Hàng chính hãng 100%</p>
            </div>

            <div className="flex items-center gap-3">
              <BadgeCheck className="text-teal-500" />
              <p>Hoàn tiền nếu sản phẩm lỗi</p>
            </div>

            <div className="flex items-center gap-3">
              <Truck className="text-teal-500" />
              <p>Giao hàng nhanh 2-5 ngày</p>
            </div>

            <div className="flex items-center gap-3">
              <Wallet className="text-teal-500" />
              <p>Thanh toán khi nhận hàng (COD)</p>
            </div>
          </div>

          {/* QUANTITY */}
          <div className="mt-6">
            <h1 className="font-medium mb-2">Số lượng</h1>
            <div className="flex items-center gap-2 w-[140px]">
              <Button
                disabled={quantity === 1}
                onClick={() => setQuantity(quantity - 1)}
                variant="outlined"
                size="small"
              >
                <Minus size={16} />
              </Button>

              <span className="px-3 text-lg font-semibold">{quantity}</span>

              <Button
                onClick={() => setQuantity(quantity + 1)}
                variant="outlined"
                size="small"
              >
                <Plus size={16} />
              </Button>
            </div>
          </div>

          {/* ACTION */}
          <div className="mt-8 flex items-center gap-4">
            <Button
              onClick={handleAddCart}
              variant="contained"
              fullWidth
              sx={{
                py: "0.9rem",
                backgroundColor: "#ee4d2d",
                "&:hover": { backgroundColor: "#d84324" },
              }}
              startIcon={<ShoppingCart size={18} />}
            >
              Thêm vào giỏ
            </Button>

            <Button
              variant="outlined"
              fullWidth
              sx={{ py: "0.9rem" }}
              startIcon={<Heart size={18} />}
            >
              Yêu thích
            </Button>
          </div>

          {/* DESCRIPTION */}
          <div className="mt-6 border-t pt-4">
            <h2 className="font-semibold mb-2">Mô tả sản phẩm</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Áo thun cotton cao cấp, form chuẩn, co giãn tốt. Phù hợp đi học,
              đi làm hoặc đi chơi. Sản phẩm được kiểm định chất lượng trước khi
              giao đến tay khách hàng.
            </p>
          </div>

          <div className="mt-12 space-y-5">
            <ReviewCard />
            <Divider />
          </div>
        </section>
      </div>

      <div className="mt-20">
        <h1 className="text-5xl mb-10 font-bold">Sản Phẩm Tương Tự</h1>
        <div className="pt-5">
          <SimilarProduct />
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
