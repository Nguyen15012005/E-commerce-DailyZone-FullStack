import React from "react";
import { ThemeProvider } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./customer/components/navbar/Navbar";
import CustomeTheme from "./theme/CustomeThem";
import Product from "./customer/pages/product/Product";
import Footer from "./customer/components/footer/Footer";
import SellerLayout from "./seller/components/SellerLayout";
import Dashboard from "./seller/pages/dashboard/Dashboard";
import ProductList from "./seller/pages/products/ProductList";
import OrderList from "./seller/pages/orders/OrderList";
import CustomerList from "./seller/pages/customers/CustomerList";
import SellerProfile from "./seller/pages/profile/SellerProfile";
import Reports from "./seller/pages/reports/Reports";
import ProductDetail from "./customer/pages/product/product_detail/ProductDetail";
import Review from "./customer/pages/review/Review";
import Cart from "./customer/pages/cart/Cart";
import { Add } from "@mui/icons-material";
import Checkout from "./customer/pages/checkout/Checkout";

const App = () => {
  return (
    <ThemeProvider theme={CustomeTheme}>
      <Routes>
        {/* Customer Routes */}
        <Route
          path="/"
          element={
            <div className="">
              <Navbar />
              {/* <Home /> */}
              {/* <Product /> */}
              {/* <ProductDetail /> */}
              {/* <Review /> */}
              {/* <Cart /> */}
              <Checkout />
              <Footer />
            </div>
          }
        />

        {/* Seller Routes */}
        <Route path="/seller" element={<SellerLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="products" element={<ProductList />} />
          <Route path="add-product" element={<ProductList />} />
          <Route path="orders" element={<OrderList />} />
          <Route path="customers" element={<CustomerList />} />
          <Route path="profile" element={<SellerProfile />} />
          <Route path="reports" element={<Reports />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
};

export default App;
