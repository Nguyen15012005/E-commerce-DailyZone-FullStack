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
import { useNavigate, useParams } from "react-router-dom";

const productImages = [
  "https://images.pexels.com/photos/8485551/pexels-photo-8485551.jpeg",
  "https://images.pexels.com/photos/6311392/pexels-photo-6311392.jpeg",
  "https://images.pexels.com/photos/9558583/pexels-photo-9558583.jpeg",
  "https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg",
];

const ProductDetail = () => {
  const navigate = useNavigate();

  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(productImages[0]);

  const { id } = useParams();
  const handleAddCart = () => {
    console.log("Add to cart");
    navigate("/cart");
  };

  return (
    <div className="min-h-screen bg-gray-50 px-5 pt-10 lg:px-20">
      <div className="grid grid-cols-1 gap-10 rounded-xl bg-white p-5 shadow-sm lg:grid-cols-2">
        {/* LEFT - IMAGE */}
        <section className="flex flex-col gap-5 lg:flex-row">
          {/* THUMBNAILS */}
          <div className="order-2 flex w-full gap-3 overflow-x-auto lg:order-1 lg:w-[16%] lg:flex-col">
            {productImages.map((image, index) => (
              <div
                key={index}
                onClick={() => setSelectedImage(image)}
                className={`
                  relative
                  h-[80px]
                  min-w-[80px]
                  cursor-pointer
                  overflow-hidden
                  rounded-xl
                  border-2
                  transition-all
                  duration-300
                  ${
                    selectedImage === image
                      ? "border-[#C9A96E] shadow-lg"
                      : "border-gray-200 hover:border-[#C9A96E]"
                  }
                `}
              >
                <img
                  className="h-full w-full object-cover"
                  src={image}
                  alt={`thumb-${index}`}
                />

                {selectedImage === image && (
                  <div className="absolute inset-0 bg-[#C9A96E]/10" />
                )}
              </div>
            ))}
          </div>

          {/* MAIN IMAGE */}
          <div className="order-1 w-full lg:order-2 lg:w-[84%]">
            <div className="group relative overflow-hidden rounded-2xl border bg-white">
              <img
                className="h-[400px] w-full object-cover transition duration-500 group-hover:scale-105 lg:h-[650px]"
                src={selectedImage}
                alt="main-product"
              />

              <div className="absolute left-4 top-4 rounded-full bg-red-500 px-4 py-1 text-sm font-bold text-white shadow-lg">
                -33%
              </div>
            </div>
          </div>
        </section>

        {/* RIGHT - INFO */}
        <section>
          <h1 className="text-4xl font-bold text-gray-900">
            Áo thun cotton cao cấp
          </h1>

          <p className="mt-1 text-gray-500">
            Chất liệu mềm mại, thoáng mát, phù hợp mọi hoạt động hàng ngày
          </p>

          <div className="mt-4 flex items-center gap-3">
            <div className="flex items-center gap-1 text-yellow-500">
              <Star size={18} fill="currentColor" />
              <span className="font-semibold text-black">4.5</span>
            </div>

            <Divider orientation="vertical" flexItem />

            <button
              onClick={() => navigate(`/product/${id}/reviews`)}
              className="text-sm text-gray-500 hover:text-[#C9A96E]"
            >
              358 đánh giá
            </button>
          </div>

          <div className="mt-5 space-y-1">
            <div className="flex items-center gap-3">
              <span className="text-2xl font-bold text-red-500">199.000₫</span>

              <span className="text-gray-400 line-through">299.000₫</span>

              <span className="rounded bg-red-100 px-2 py-1 text-sm text-red-500">
                -33%
              </span>
            </div>

            <p className="text-sm text-gray-500">
              Giá đã bao gồm VAT. Miễn phí vận chuyển toàn quốc.
            </p>
          </div>

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
              <p>Thanh toán khi nhận hàng COD</p>
            </div>
          </div>

          <div className="mt-6">
            <h1 className="mb-2 font-medium">Số lượng</h1>

            <div className="flex w-[140px] items-center gap-2">
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
              onClick={() => navigate("/wishlist")}
              variant="outlined"
              fullWidth
              sx={{ py: "0.9rem" }}
              startIcon={<Heart size={18} />}
            >
              Yêu thích
            </Button>
          </div>

          <div className="mt-6 border-t pt-4">
            <h2 className="mb-2 font-semibold">Mô tả sản phẩm</h2>

            <p className="text-sm leading-relaxed text-gray-600">
              Áo thun cotton cao cấp, form chuẩn, co giãn tốt. Phù hợp đi học,
              đi làm hoặc đi chơi. Sản phẩm được kiểm định chất lượng trước khi
              giao đến tay khách hàng.
            </p>
          </div>

          <div className="mt-12 space-y-5">
            <ReviewCard />
            <Divider />

            <Button onClick={() => navigate(`/product/${id}/reviews`)}>
              Xem tất cả đánh giá
            </Button>
          </div>
        </section>
      </div>

      <div id="reviews" className="mt-20">
        <SimilarProduct />
      </div>
    </div>
  );
};

export default ProductDetail;
