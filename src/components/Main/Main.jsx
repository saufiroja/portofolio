import { Container, Grid, Typography } from '@mui/material';
import React from 'react';

import { getAge } from '../../lib/age';
import Footer from '../Footer/Footer';

const Main = () => {
  return (
    <>
      <Container maxWidth='sm'>
        <Grid
          container
          direction='column'
          justifyContent='center'
          style={{ minHeight: '83vh' }}
        >
          <Grid item>
            <Typography variant='h5' align='center'>
              Hello👋!! <strong>I'm Muhammad Saufi Roja</strong>
            </Typography>
            <Typography variant='h5' align='center'>
              I'm a Backend Developer {getAge()} Years old.
            </Typography>
          </Grid>
        </Grid>
        <Footer />
      </Container>
    </>
  );
};

export default Main;
