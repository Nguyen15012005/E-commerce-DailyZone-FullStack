import React, { useEffect, useState } from "react";
import "./ProductCard.css";
import { IconButton, Button } from "@mui/material";
import { Favorite, ModeComment, ShoppingCart } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

// ảnh fallback khi sản phẩm không có ảnh
const FALLBACK_IMAGES = [
  "https://images.pexels.com/photos/8485550/pexels-photo-8485550.jpeg",
  "https://images.pexels.com/photos/8485551/pexels-photo-8485551.jpeg",
  "https://images.pexels.com/photos/26425581/pexels-photo-26425581.jpeg",
];

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const [currentImage, setCurrentImage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const productId = product?.id || 1;

  // Lấy mảng ảnh từ sản phẩm thật, fallback nếu không có
  const images =
    Array.isArray(product?.images) && product.images.length > 0
      ? product.images
      : FALLBACK_IMAGES;

  const discountPercent =
    product?.discountPercent ||
    (product?.mrpPrice && product?.sellingPrice
      ? Math.round(
          ((product.mrpPrice - product.sellingPrice) / product.mrpPrice) * 100
        )
      : 25);

  useEffect(() => {
    let interval;
    if (isHovered && images.length > 1) {
      interval = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % images.length);
      }, 1200);
    }
    return () => clearInterval(interval);
  }, [isHovered, images.length]);

  const goToDetail = () => navigate(`/product-detail/${productId}`);

  const formatPrice = (price) =>
    price ? price.toLocaleString("vi-VN") + "₫" : "—";

  return (
    <div className="product-card" onClick={goToDetail}>
      <div
        className="card"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          setCurrentImage(0);
        }}
      >
        <div className="card-image">
          {discountPercent > 0 && (
            <span className="badge">-{discountPercent}%</span>
          )}

          {images.map((item, index) => (
            <img
              key={index}
              className="card-media"
              src={item}
              alt={product?.title || "Sản phẩm"}
              style={{
                transform: `translateX(${(index - currentImage) * 100}%)`,
              }}
            />
          ))}

          <div className="overlay" />

          <div className="actions">
            <IconButton
              onClick={(e) => {
                e.stopPropagation();
                navigate("/wishlist");
              }}
              className="icon-btn favorite"
            >
              <Favorite />
            </IconButton>

            <IconButton
              onClick={(e) => {
                e.stopPropagation();
                goToDetail();
              }}
              className="icon-btn comment"
            >
              <ModeComment />
            </IconButton>
          </div>

          {images.length > 1 && (
            <div className="indicator">
              {images.map((_, i) => (
                <span
                  key={i}
                  className={`dot ${i === currentImage ? "active" : ""}`}
                />
              ))}
            </div>
          )}
        </div>

        <div className="info">
          <h3 className="title line-clamp-2">
            {product?.title || "Áo Thun Local Brand Form Rộng Unisex"}
          </h3>

          <p className="desc line-clamp-2">
            {product?.description ||
              "Chất cotton 100%, mềm mịn, thoáng mát. Phù hợp mặc hằng ngày."}
          </p>

          <div className="price">
            <span className="new">
              {formatPrice(product?.sellingPrice || 299000)}
            </span>
            {product?.mrpPrice && product.mrpPrice !== product.sellingPrice && (
              <span className="old">{formatPrice(product.mrpPrice)}</span>
            )}
          </div>

          <Button
            onClick={(e) => {
              e.stopPropagation();
              navigate("/cart");
            }}
            variant="contained"
            startIcon={<ShoppingCart />}
            fullWidth
            className="add-btn"
          >
            Thêm vào giỏ
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
