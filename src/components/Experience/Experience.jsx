import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';

const Experience = () => {
  return (
    <>
      <Container maxWidth='md'>
        <Box px={{ xs: 5, sm: 5 }} py={{ xs: 5, sm: 3 }}>
          <Typography variant='h5' align='center'>
            Experience
          </Typography>
        </Box>
      </Container>
      <Container maxWidth='lg'>
        <Grid>
          <Grid item xs={12} sm={4} md={4}>
            <Typography variant='h6'>
              Currently looking for experience🧐
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Experience;
