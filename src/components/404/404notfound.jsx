import { Box, Button, Container, Typography, Link, Grid } from '@mui/material';
import React from 'react';

const Notfound = () => {
  return (
    <>
      <Container maxWidth='md'>
        <Grid
          container
          direction='column'
          justifyContent='center'
          style={{ minHeight: '67vh' }}
        >
          <Grid item>
            <Box justifyContent='center' display='flex'>
              <Typography variant='h1' color='white'>
                Ooops!
              </Typography>
            </Box>
            <Box justifyContent='center' display='flex'>
              <Typography variant='h4' color='white'>
                404 The page you request could not found
              </Typography>
            </Box>
            <Box justifyContent='center' display='flex'>
              <Link href='/' underline='none' blank>
                <Button variant='contained' size='small'>
                  Go Back
                </Button>
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Notfound;
