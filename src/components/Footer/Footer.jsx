import { Box, Container, Typography } from '@mui/material';
import React from 'react';

const Footer = () => {
  return (
    <>
      <Box px={{ xs: 3, sm: 5 }} py={{ xs: 5, sm: 3 }}>
        <Container maxWidth='md'>
          <Typography variant='body1' align='center'>
            Muhammad Saufi Roja &copy;{new Date().getFullYear()}. All Rights
            Reserved
          </Typography>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
