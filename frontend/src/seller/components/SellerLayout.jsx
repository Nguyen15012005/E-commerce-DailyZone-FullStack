import React, { useEffect } from "react";
import { Box, CssBaseline } from "@mui/material";
import SellerSidebar from "./sidebar/SellerSidebar";
import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchSellerProfile, fetchSellerReport } from "../../store/sellerSlice";

const SellerLayout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("jwt")) {
      navigate("/login");
      return;
    }

    dispatch(fetchSellerProfile());
    dispatch(fetchSellerReport());
  }, [dispatch, navigate]);

  return (
    <Box
      sx={{ display: "flex", backgroundColor: "#f5f5f5", minHeight: "100vh" }}
    >
      <CssBaseline />
      <SellerSidebar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: { sm: `calc(100% - 260px)` },
          minHeight: "100vh",
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};

export default SellerLayout;
