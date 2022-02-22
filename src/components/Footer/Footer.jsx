import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';

const Footer = () => {
  return (
    <>
      <Box px={{ xs: 3, sm: 5 }} py={{ xs: 5, sm: 3 }}>
        <Container maxWidth='md'>
          <Grid container>
            <Grid
              item
              xs={12}
              sx={{ display: 'flex', justifyContent: 'center' }}
            >
              <Typography variant='body1'>
                Muhammad Saufi Roja &copy;{new Date().getFullYear()}. All Rights
                Reserved
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
