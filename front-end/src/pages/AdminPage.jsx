import React from 'react';
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { AdminProvider } from '../contexts/AdminContext';
import SellerNavBar from '../components/seller/SellerNavBar';

export default function AdminPage() {
  return (
    <AdminProvider>
      <Box>
        <SellerNavBar />
        <Outlet />
      </Box>
    </AdminProvider>
  );
}
