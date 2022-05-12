import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import CustomerCart from '../components/customer/CustomerCartFloatingBtn';
import NavBar from '../components/customer/CustomerNavBar';
import ProductCard from '../components/products/ProductsCard';
import USERS from '../services/admin.service';
import useToastManager from '../hooks/useToast';

export default function AdminManage() {
  const [users, setUser] = useState([]);
  const { enqueueToast } = useToastManager();
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    const getProducts = async () => {
      if (isAuthenticated) {
        try {
          const response = await USERS();
          const { data } = response;
          setUser(data); 
        } catch {
          enqueueToast('error', 'erro ao listar usuários', 'error')
        }
      }
    }
  })
};