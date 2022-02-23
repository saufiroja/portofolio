import { GitHub, Instagram, LinkedIn } from '@mui/icons-material';
import { Box, Button, Container, Grid, Link, Typography } from '@mui/material';
import React from 'react';

import Logo from '../../assets/logo.svg';

const About = () => {
  return (
    <>
      <Container maxWidth='lg'>
        <Box px={{ xs: 5, sm: 5 }} py={{ xs: 5, sm: 3 }}>
          <Typography variant='h5' align='center'>
            About Me
          </Typography>
        </Box>
        <Grid container spacing={3} borderBottom={1} paddingBottom={10}>
          <Grid item xs={12} sm={4} md={4}>
            <img src={Logo} alt='' />
          </Grid>
          <Grid item xs={12} sm={8} md={8}>
            <Box>
              <Typography variant='h6'>
                Hello, My name is Muhammad Saufi Roja, you can call me oja. I'm
                a backend developer. I am currently 20 years old and I live in
                Banjarmasin, South Kalimantan. I started learning about web
                programming in 2021 with my first language being javascript, but
                now I'm more interested and explore a lot about backend
                development, especially on node.js
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Typography variant='body2' pt={1}>
          You can reach me via Email at{' '}
          <Link href='mailto:muhammadsaufiroja@gmail.com'>
            muhammadsaufiroja@gmail.com
          </Link>{' '}
          for more information, or you can find me on my social media:
        </Typography>
        <Grid container spacing={2} justifyContent='start' pt={1}>
          <Grid item>
            <Link href='https://www.instagram.com/saufiroja_' underline='none'>
              <Button variant='contained' color='error'>
                <Instagram fontSize='small' /> Instagram
              </Button>
            </Link>
          </Grid>
          <Grid item>
            <Link href='https://github.com/saufiroja' underline='none'>
              <Button
                variant='contained'
                sx={{
                  backgroundColor: 'gray',
                  ':hover': {
                    backgroundColor: 'gray',
                  },
                }}
              >
                <GitHub fontSize='small' /> Github
              </Button>
            </Link>
          </Grid>
          <Grid item>
            <Link
              href='https://www.linkedin.com/in/muhammad-saufi-roja-11427a1b8/'
              underline='none'
            >
              <Button variant='contained'>
                <LinkedIn fontSize='small' /> LinkedIn
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default About;
