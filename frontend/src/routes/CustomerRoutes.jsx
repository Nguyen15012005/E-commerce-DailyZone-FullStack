import React from "react";
import LoginPage from "../customer/pages/auth/LoginPage";
import RegisterPage from "../customer/pages/auth/RegisterPage";
import Navbar from "../customer/components/navbar/Navbar";
import Home from "../customer/pages/home/Home";
import Footer from "../customer/components/footer/Footer";
import ProductDetail from "../customer/pages/product/product_detail/ProductDetail";
import Product from "../customer/pages/product/Product";
import Account from "../customer/pages/account/Account";
import OrderDetails from "../customer/pages/account/OrderDetails";

const CustomerLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export const customerRoutes = [
  {
    path: "/",
    element: (
      <CustomerLayout>
        <Home />
      </CustomerLayout>
    ),
  },
  {
    path: "/login",
    element: (
      <CustomerLayout>
        <LoginPage />
      </CustomerLayout>
    ),
  },
  {
    path: "/register",
    element: (
      <CustomerLayout>
        <RegisterPage />
      </CustomerLayout>
    ),
  },
  {
    path: "/product-detail",
    element: (
      <CustomerLayout>
        <ProductDetail />
      </CustomerLayout>
    ),
  },
  {
    path: "/product-list",
    element: (
      <CustomerLayout>
        <Product />
      </CustomerLayout>
    ),
  },
  {
    path: "/account/*",
    element: (
      <CustomerLayout>
        <Account />
      </CustomerLayout>
    ),
  },
  {
    path: "/account/orders/:id",
    element: (
      <CustomerLayout>
        <OrderDetails />
      </CustomerLayout>
    ),
  },
];
