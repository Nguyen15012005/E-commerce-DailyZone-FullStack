import React from "react";
import LoginPage from "../customer/pages/auth/LoginPage";
import RegisterPage from "../customer/pages/auth/RegisterPage";
import Navbar from "../customer/components/navbar/Navbar";
import Home from "../customer/pages/home/Home";
import Footer from "../customer/components/footer/Footer";
import ProductDetail from "./../customer/pages/product/product_detail/ProductDetail";
import Product from './../customer/pages/product/Product';

export const customerRoutes = [
  {
    path: "/login",
    element: (
      <div className="">
        <Navbar />
        <LoginPage />
        <Footer />
      </div>
    ),
  },

  {
    path: "/product-detail",
    element: (
      <div className="">
        <Navbar />
        <ProductDetail />
        <Footer />
      </div>
    ),
  },

  {
    path: "/product-list",
    element: (
      <div className="">
        <Navbar />
        <Product />
        <Footer />
      </div>
    ),
  },

  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Home />
        <Footer />
      </>
    ),
  },
];
