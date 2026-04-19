// src/App.jsx
import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home"; // Import component Home
// import TopRates from "./pages/TopRates";
// import MensWear from "./pages/MensWear";
// import WomensWear from "./pages/WomensWear";
// import KidsWear from "./pages/KidsWear";
// // import Electronics from "./pages/Electronics";
// import Perfume from "./pages/Perfume";
// import Watch from "./pages/Watch";
// import EssentialOil from "./pages/EssentialOil";
import Login from "./components/Login/Login";
import Register from "./components/Login/Register";
import Footer from "./components/Footer/Footer";
import Popup from "./components/Popup/Popup";
import ForgotPassword from "./components/Login/ForgotPassword";
import Category from "./pages/Category";

const App = () => {
  const [orderPopup, setOrderPopup] = useState(false);
  const handleOrderPopup = () => setOrderPopup((prev) => !prev);

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  return (
    <BrowserRouter>
      <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
        {/* Thanh Navbar */}
        <Navbar />

        {/* Điều hướng giữa các trang */}
        <Routes>
          <Route
            path="/"
            element={<Home handleOrderPopup={handleOrderPopup} />}
          />
          {/* <Route path="/toprates" element={<TopRates />} /> */}
          <Route
            path="/mens"
            element={<Category category="men" />}
          />
          <Route
            path="/womens"
            element={<Category category="women"/>}
          />
          <Route
            path="/kids"
            element={<Category category="kid"/>}
          />
          {/* <Route path="/electronic" element={<Electronics />} />
          <Route path="/perfume" element={<Perfume />} />
          <Route path="/watch" element={<Watch />} /> */}
          {/* <Route path="/essentialOil" element={<EssentialOil />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />{" "}
          {/* Đặt ngoài Login */}
          <Route path="/register" element={<Register />} />
        </Routes>

        {/* Các thành phần khác */}
        <Footer />
        <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
        {/* <Login useLogin={useLogin} setUseLogin={setUseLogin} />
        <Register useRegister={useRegister} setUseRegister={setUseRegister} /> */}
      </div>
    </BrowserRouter>
  );
};

export default App;
