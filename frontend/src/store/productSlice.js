import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:8080";

// ─── Fallback data khi DB trống ───────────────────────────────────────────────
const FALLBACK_PRODUCTS = [
  {
    id: 1,
    title: "Áo Thun Local Brand Form Rộng Unisex",
    description: "Chất cotton 100%, mềm mịn, thoáng mát. Phù hợp mặc hằng ngày.",
    sellingPrice: 299000,
    mrpPrice: 399000,
    discountPercent: 25,
    images: [
      "https://images.pexels.com/photos/8485550/pexels-photo-8485550.jpeg",
      "https://images.pexels.com/photos/8485551/pexels-photo-8485551.jpeg",
    ],
    category: { name: "men" },
    seller: { businessName: "DailyZone Fashion" },
    numRatings: 120,
  },
  {
    id: 2,
    title: "Giày Sneaker Thời Trang Cao Cấp",
    description: "Thiết kế hiện đại, đế êm, phù hợp mọi dịp.",
    sellingPrice: 450000,
    mrpPrice: 600000,
    discountPercent: 25,
    images: ["https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&q=80"],
    category: { name: "men" },
    seller: { businessName: "DailyZone Fashion" },
    numRatings: 85,
  },
  {
    id: 3,
    title: "Túi Xách Nữ Cao Cấp",
    description: "Chất liệu da PU cao cấp, nhiều ngăn tiện lợi.",
    sellingPrice: 350000,
    mrpPrice: 500000,
    discountPercent: 30,
    images: ["https://tuixachsieucap.com.vn/wp-content/uploads/2021/04/z2429499413183_eeb4b90cfb8ae5807efa74e8d4c2d124.jpg"],
    category: { name: "women" },
    seller: { businessName: "DailyZone Fashion" },
    numRatings: 200,
  },
];

const FALLBACK_PRODUCT = {
  id: 1,
  title: "Áo thun cotton cao cấp",
  description: "Áo thun cotton cao cấp, form chuẩn, co giãn tốt. Phù hợp đi học, đi làm hoặc đi chơi.",
  sellingPrice: 199000,
  mrpPrice: 299000,
  discountPercent: 33,
  numRatings: 358,
  images: [
    "https://images.pexels.com/photos/8485551/pexels-photo-8485551.jpeg",
    "https://images.pexels.com/photos/6311392/pexels-photo-6311392.jpeg",
    "https://images.pexels.com/photos/9558583/pexels-photo-9558583.jpeg",
    "https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg",
  ],
  category: { name: "men" },
  seller: { businessName: "DailyZone Fashion" },
};

// ─── Thunks ────────────────────────────────────────────────────────────────────

export const fetchProducts = createAsyncThunk(
  "product/fetchProducts",
  async (params = {}, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/products`, { params });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Không thể tải sản phẩm.");
    }
  }
);

export const fetchProductById = createAsyncThunk(
  "product/fetchProductById",
  async (productId, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/products/${productId}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Không tìm thấy sản phẩm.");
    }
  }
);

export const searchProducts = createAsyncThunk(
  "product/searchProducts",
  async (query, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/products/search`, {
        params: { query },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Tìm kiếm thất bại.");
    }
  }
);

// ─── Slice ─────────────────────────────────────────────────────────────────────

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],       // mảng sản phẩm trong trang list
    totalPages: 1,
    currentPage: 0,
    productDetail: null,
    searchResults: [],
    loading: false,
    detailLoading: false,
    searchLoading: false,
    error: null,
  },
  reducers: {
    clearProductDetail(state) {
      state.productDetail = null;
    },
    clearSearchResults(state) {
      state.searchResults = [];
    },
  },
  extraReducers: (builder) => {
    // fetchProducts
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        const data = action.payload;
        // Spring Page object: { content: [], totalPages, number }
        const content = data?.content ?? data;
        state.products =
          Array.isArray(content) && content.length > 0
            ? content
            : FALLBACK_PRODUCTS;
        state.totalPages = data?.totalPages ?? 1;
        state.currentPage = data?.number ?? 0;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.loading = false;
        // fallback khi lỗi
        state.products = FALLBACK_PRODUCTS;
      });

    // fetchProductById
    builder
      .addCase(fetchProductById.pending, (state) => {
        state.detailLoading = true;
        state.error = null;
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.detailLoading = false;
        state.productDetail = action.payload ?? FALLBACK_PRODUCT;
      })
      .addCase(fetchProductById.rejected, (state) => {
        state.detailLoading = false;
        state.productDetail = FALLBACK_PRODUCT;
      });

    // searchProducts
    builder
      .addCase(searchProducts.pending, (state) => {
        state.searchLoading = true;
      })
      .addCase(searchProducts.fulfilled, (state, action) => {
        state.searchLoading = false;
        state.searchResults = action.payload ?? [];
      })
      .addCase(searchProducts.rejected, (state) => {
        state.searchLoading = false;
        state.searchResults = [];
      });
  },
});

export const { clearProductDetail, clearSearchResults } = productSlice.actions;
export default productSlice.reducer;
