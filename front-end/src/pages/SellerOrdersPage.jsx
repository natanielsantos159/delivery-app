import React, { useEffect } from 'react';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import SellerNavBar from '../components/seller/SellerNavBar';
import useAuth from '../hooks/useAuth';

export default function SellerOrdersPage() {
  const { isAuthenticated } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated]);

  return (
    <Box>
      <SellerNavBar />
    </Box>
  );
}
