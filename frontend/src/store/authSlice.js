import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_BASE_URL = "e-commerce-dailyzone-fullstack-production.up.railway.app";

// ─── Async Thunks ─────────────────────────────────────────────────────────────

/**
 * Bước 1 (Đăng nhập): Gửi OTP về Gmail cho tài khoản đã tồn tại
 * body: { email: "signing_<email>", role: "CUSTOMER" }
 */
export const sendLoginOtp = createAsyncThunk(
  "auth/sendLoginOtp",
  async ({ email }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${API_BASE_URL}/auth/sent/login-signup-otp`,
        {
          email: `signing_${email}`,
          role: "CUSTOMER",
        },
      );
      return response.data;
    } catch (error) {
      const message =
        error.response?.data?.message ||
        error.response?.data ||
        "Không thể gửi OTP. Vui lòng thử lại.";
      return rejectWithValue(message);
    }
  },
);

/**
 * Bước 1 (Đăng ký): Gửi OTP về Gmail để tạo tài khoản mới
 * body: { email, role: "CUSTOMER" }  — không có prefix signing_
 */
export const sendRegisterOtp = createAsyncThunk(
  "auth/sendRegisterOtp",
  async ({ email }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${API_BASE_URL}/auth/sent/login-signup-otp`,
        {
          email,
          role: "CUSTOMER",
        },
      );
      return response.data;
    } catch (error) {
      const message =
        error.response?.data?.message ||
        error.response?.data ||
        "Không thể gửi OTP. Vui lòng thử lại.";
      return rejectWithValue(message);
    }
  },
);

/**
 * Bước 2 (Đăng nhập): Xác minh OTP → đăng nhập
 * body: { email, otp }
 */
export const loginWithOtp = createAsyncThunk(
  "auth/loginWithOtp",
  async ({ email, otp }, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/auth/signing`, {
        email,
        otp,
      });
      const data = response.data; // { jwt, message, role }
      localStorage.setItem("jwt", data.jwt);
      localStorage.setItem("role", data.role);
      return data;
    } catch (error) {
      const message =
        error.response?.data?.message ||
        error.response?.data ||
        "OTP không hợp lệ hoặc đã hết hạn.";
      return rejectWithValue(message);
    }
  },
);

/**
 * Đăng ký tài khoản mới
 * body: { email, fullName, otp }
 * Trả về JWT sau khi đăng ký thành công
 */
export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async ({ email, fullName, otp }, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/auth/signup`, {
        email,
        fullName,
        otp,
      });
      const data = response.data; // { jwt, message, role }
      localStorage.setItem("jwt", data.jwt);
      localStorage.setItem("role", data.role);
      return data;
    } catch (error) {
      const message =
        error.response?.data?.message ||
        error.response?.data ||
        "Đăng ký thất bại. Vui lòng kiểm tra OTP và thử lại.";
      return rejectWithValue(message);
    }
  },
);

// ─── Slice ────────────────────────────────────────────────────────────────────

const initialState = {
  // Trạng thái gửi OTP (dùng chung cho login & register)
  otpSent: false,
  sendOtpLoading: false,
  sendOtpError: null,

  // Trạng thái đăng nhập
  jwt: localStorage.getItem("jwt") || null,
  role: localStorage.getItem("role") || null,
  loginLoading: false,
  loginError: null,

  // Trạng thái đăng ký
  registerLoading: false,
  registerError: null,

  // Trạng thái gửi OTP đăng ký
  sendRegisterOtpLoading: false,
  sendRegisterOtpError: null,
  registerOtpSent: false,

  // Đã đăng nhập hay chưa
  isAuthenticated: !!localStorage.getItem("jwt"),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state) {
      state.jwt = null;
      state.role = null;
      state.isAuthenticated = false;
      state.otpSent = false;
      state.sendOtpError = null;
      state.loginError = null;
      localStorage.removeItem("jwt");
      localStorage.removeItem("role");
    },
    resetOtpState(state) {
      state.otpSent = false;
      state.sendOtpError = null;
      state.loginError = null;
      state.registerError = null;
    },
  },
  extraReducers: (builder) => {
    // sendLoginOtp
    builder
      .addCase(sendLoginOtp.pending, (state) => {
        state.sendOtpLoading = true;
        state.sendOtpError = null;
      })
      .addCase(sendLoginOtp.fulfilled, (state) => {
        state.sendOtpLoading = false;
        state.otpSent = true;
      })
      .addCase(sendLoginOtp.rejected, (state, action) => {
        state.sendOtpLoading = false;
        state.sendOtpError = action.payload;
      });

    // loginWithOtp
    builder
      .addCase(loginWithOtp.pending, (state) => {
        state.loginLoading = true;
        state.loginError = null;
      })
      .addCase(loginWithOtp.fulfilled, (state, action) => {
        state.loginLoading = false;
        state.jwt = action.payload.jwt;
        state.role = action.payload.role;
        state.isAuthenticated = true;
      })
      .addCase(loginWithOtp.rejected, (state, action) => {
        state.loginLoading = false;
        state.loginError = action.payload;
      });

    // sendRegisterOtp
    builder
      .addCase(sendRegisterOtp.pending, (state) => {
        state.sendRegisterOtpLoading = true;
        state.sendRegisterOtpError = null;
      })
      .addCase(sendRegisterOtp.fulfilled, (state) => {
        state.sendRegisterOtpLoading = false;
        state.registerOtpSent = true;
      })
      .addCase(sendRegisterOtp.rejected, (state, action) => {
        state.sendRegisterOtpLoading = false;
        state.sendRegisterOtpError = action.payload;
      });
    // registerUser
    builder
      .addCase(registerUser.pending, (state) => {
        state.registerLoading = true;
        state.registerError = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.registerLoading = false;
        state.jwt = action.payload.jwt;
        state.role = action.payload.role;
        state.isAuthenticated = true;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.registerLoading = false;
        state.registerError = action.payload;
      });
  },
});

export const { logout, resetOtpState } = authSlice.actions;
export default authSlice.reducer;
