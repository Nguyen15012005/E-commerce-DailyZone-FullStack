import React from 'react';
import { Box, CssBaseline } from '@mui/material';
import SellerSidebar from './sidebar/SellerSidebar';
import { Outlet } from 'react-router-dom';

const SellerLayout = () => {
  return (
    <Box sx={{ display: 'flex', backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      <CssBaseline />
      <SellerSidebar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: { sm: `calc(100% - 260px)` },
          minHeight: '100vh',
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};

export default SellerLayout;
