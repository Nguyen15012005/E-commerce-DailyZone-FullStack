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

const ProductCard = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let interval;
    if (isHovered) {
      interval = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % images.length);
      }, 1200);
    }
    return () => clearInterval(interval);
  }, [isHovered]);
  const navigate = useNavigate();

  return (
    <div className="product-card" onClick={() => navigate("/product-detail")}>
      <div
        className="card"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* IMAGE AREA */}
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
            <IconButton className="icon-btn favorite">
              <Favorite />
            </IconButton>
            <IconButton className="icon-btn comment">
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

        {/* INFO */}
        <div className="info">
          <h3 className="title">Áo Thun Local Brand Form Rộng Unisex</h3>

          <p className="desc">
            Chất cotton 100%, mềm mịn, thoáng mát. Phù hợp mặc hằng ngày.
          </p>

          <div className="price">
            <span className="new">299.000₫</span>
            <span className="old">399.000₫</span>
          </div>

          {/* ADD TO CART (đưa xuống đây) */}
          <Button
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
