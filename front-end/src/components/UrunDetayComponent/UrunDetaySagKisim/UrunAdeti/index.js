import React, { useState } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
function UrunAdeti() {
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      bgcolor="#FFFFFF"
      borderRadius="50px"
      px={1}
    >
      <IconButton
        size="large"
        color="error"
        aria-label="decrease"
        onClick={handleDecrement}
        sx={{ borderRadius: '50%' }}
      >
        <RemoveIcon />
      </IconButton>
      <Typography variant="body1" sx={{ mx: 1 }}>
        {count}
      </Typography>
      <IconButton
        size="large"
        color="error"
        aria-label="increase"
        onClick={handleIncrement}
        sx={{ borderRadius: '50%' }}
      >
        <AddIcon />
      </IconButton>
    </Box>
  );
};

export default UrunAdeti;
