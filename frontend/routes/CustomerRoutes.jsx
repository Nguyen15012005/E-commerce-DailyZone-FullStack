import React from "react";
import LoginPage from "../src/customer/pages/auth/LoginPage";
import RegisterPage from "../src/customer/pages/auth/RegisterPage";
import Navbar from "../src/customer/components/navbar/Navbar";
import Home from "../src/customer/pages/home/Home";
import Footer from "../src/customer/components/footer/Footer";

export const customerRoutes = [
  {
    path: "/login",
    element: <LoginPage />,
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
