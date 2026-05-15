import React, { useEffect, useState } from "react";
import "./ProductCard.css";
import { IconButton, Button } from "@mui/material";
import { Favorite, ModeComment, ShoppingCart } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const images = [
  "https://images.pexels.com/photos/8485550/pexels-photo-8485550.jpeg",
  "https://images.pexels.com/photos/8485551/pexels-photo-8485551.jpeg",
  "https://images.pexels.com/photos/26425581/pexels-photo-26425581.jpeg",
];

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const [currentImage, setCurrentImage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const productId = product?.id || 1;

  useEffect(() => {
    let interval;

    if (isHovered) {
      interval = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % images.length);
      }, 1200);
    }

    return () => clearInterval(interval);
  }, [isHovered]);

  const goToDetail = () => {
    navigate(`/product-detail/${productId}`);
  };

  return (
    <div className="product-card" onClick={goToDetail}>
      <div
        className="card"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="card-image">
          <span className="badge">-25%</span>

          {images.map((item, index) => (
            <img
              key={index}
              className="card-media"
              src={item}
              alt=""
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

          <div className="indicator">
            {images.map((_, i) => (
              <span
                key={i}
                className={`dot ${i === currentImage ? "active" : ""}`}
              />
            ))}
          </div>
        </div>

        <div className="info">
          <h3 className="title">Áo Thun Local Brand Form Rộng Unisex</h3>

          <p className="desc">
            Chất cotton 100%, mềm mịn, thoáng mát. Phù hợp mặc hằng ngày.
          </p>

          <div className="price">
            <span className="new">299.000₫</span>
            <span className="old">399.000₫</span>
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
