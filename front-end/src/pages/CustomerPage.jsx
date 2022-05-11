import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import NavBar from '../components/customer/CustomerNavBar';

export default function CustomerPage() {
  return (
    <Box>
      <NavBar />
      <Outlet />
    </Box>
  );
}
