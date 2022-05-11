import { Box } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';
import SellerNavBar from '../components/seller/SellerNavBar';

export default function SellerPage() {
  return (
    <Box>
      <SellerNavBar />
      <Outlet />
    </Box>
  );
}
