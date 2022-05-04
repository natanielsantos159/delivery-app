import React from 'react';
import { Typography, useTheme } from '@mui/material';
import toast from 'react-hot-toast';

export default function useToastManager() {
  const { palette } = useTheme();
  const enqueueToast = (variant, message, dataTestid) => {
    const notification = toast[variant](
      <Typography data-testid={ dataTestid }>
        {message}
      </Typography>,
      { position: 'top-right',
        style: { background: palette[variant].main, color: '#fff' } },
    );
    return notification;
  };
  return { enqueueToast };
}
