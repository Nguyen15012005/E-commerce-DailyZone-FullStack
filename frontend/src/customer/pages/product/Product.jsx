import React, { useState } from "react";
import { useTheme } from "@emotion/react";
import {
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
  useMediaQuery,
} from "@mui/material";
import ProductCard from "./product_card/ProductCard";
import FilterSection from "./filter_product/FilterSection";

const Product = () => {
  const theme = useTheme();
  const isLarge = useMediaQuery(theme.breakpoints.up("lg"));

  const [sort, setSort] = useState("");
  const [page, setPage] = useState(1);

  const products = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  const handleSortChange = (event) => {
    setSort(event.target.value);
  };

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  return (
    <div className="mt-10">
      <section className="relative mb-5 overflow-hidden px-3 lg:px-10">
        <img
          className="h-[220px] w-full rounded-lg object-cover sm:h-[260px] lg:h-[400px]"
          src="/assets/image/men_hero.jpg"
          alt=""
        />

        <div className="absolute inset-0 rounded-lg bg-black/20 lg:bg-transparent"></div>

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-[90%] px-4 text-left text-gray-700 sm:px-6 lg:ml-16 lg:max-w-[500px] lg:text-[#123467]">
            <p className="text-[10px] uppercase tracking-widest opacity-80 sm:text-xs lg:text-base lg:text-gray-500">
              New Collection
            </p>

            <h2 className="mt-1 text-xl font-bold leading-tight sm:text-2xl lg:text-6xl">
              Đưa tên sản phẩm
            </h2>

            <p className="mt-2 text-xs opacity-90 sm:text-sm lg:text-base lg:text-gray-600">
              Khám phá những thiết kế mới nhất dành cho bạn.
            </p>
          </div>
        </div>
      </section>

      <div className="gap-6 px-4 lg:flex lg:px-10">
        <aside className="hidden w-[260px] shrink-0 lg:block">
          <div className="sticky top-24">
            <FilterSection />
          </div>
        </aside>

        <div className="flex-1 space-y-5">
          <div className="sticky top-0 z-30 flex items-center justify-between bg-white px-2 py-4 lg:hidden">
            <FilterSection />

            <FormControl size="small" sx={{ width: "160px" }}>
              <InputLabel>Sắp Xếp</InputLabel>
              <Select value={sort} label="Sắp Xếp" onChange={handleSortChange}>
                <MenuItem value="">Mặc định</MenuItem>
                <MenuItem value="low_to_high">Giá: Thấp → Cao</MenuItem>
                <MenuItem value="high_to_low">Giá: Cao → Thấp</MenuItem>
              </Select>
            </FormControl>
          </div>

          <div className="hidden items-center justify-end px-2 lg:flex lg:px-0">
            <FormControl size="small" sx={{ width: "180px" }}>
              <InputLabel>Sắp Xếp</InputLabel>
              <Select value={sort} label="Sắp Xếp" onChange={handleSortChange}>
                <MenuItem value="">Mặc định</MenuItem>
                <MenuItem value="low_to_high">Giá: Thấp → Cao</MenuItem>
                <MenuItem value="high_to_low">Giá: Cao → Thấp</MenuItem>
              </Select>
            </FormControl>
          </div>

          <Divider />

          <section className="grid grid-cols-1 justify-items-center gap-4 px-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:px-1">
            {products.map((item) => (
              <ProductCard key={item} product={{ id: item }} />
            ))}
          </section>

          <div className="mt-10 flex justify-center pt-10">
            <Pagination
              page={page}
              onChange={handlePageChange}
              count={10}
              variant="outlined"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
