import React from "react";
import LoginPage from "../customer/pages/auth/LoginPage";
import RegisterPage from "../customer/pages/auth/RegisterPage";
import Navbar from "../customer/components/navbar/Navbar";
import Home from "../customer/pages/home/Home";
import Footer from "../customer/components/footer/Footer";

export const customerRoutes = [
  {
    path: "/login",
    element: (
      <div className="">
        <Navbar />
        <LoginPage/>
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
