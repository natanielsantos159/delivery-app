import React from 'react';
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import SellerNavBar from '../components/seller/SellerNavBar';

export default function AdminPage() {
  return (
    <Box>
      <SellerNavBar />
      <Outlet />
    </Box>
  );
}
