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

const App = () => {
  return (
    <ThemeProvider theme={CustomeTheme}>
      <Router>
        <Routes>
          {/* Customer Routes */}
          <Route
            path="/"
            element={
              <div className="">
                <Navbar />
                {/* <Home /> */}
                <Product />
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
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
