import { GitHub, Instagram, LinkedIn } from '@mui/icons-material';
import { Box, Button, Container, Grid, Link, Typography } from '@mui/material';
import React from 'react';

import { getAge } from '../../lib/age';

const About = () => {
  return (
    <>
      <Container maxWidth='md'>
        <Box px={{ xs: 5, sm: 5 }} py={{ xs: 5, sm: 3 }}>
          <Typography variant='h5' align='center'>
            About Me
          </Typography>
        </Box>
        <Grid container justifyContent='start' spacing={3} paddingBottom={4}>
          <Grid item xs={12} sm={12} md={12}>
            <Typography variant='h6'>
            I am a software developer with experience in developing applications using the Go language and several related technologies such as Redis, MongoDB, and Postgres, docker, graphql, gRPC, as well as the Testify unit testing framework to ensure applications run smoothly.
            <br/>
I am passionate about exploring the latest technologies and learning about new ways to improve the quality and efficiency of app development
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth='md'>
        <Typography variant='body1' borderTop={1} pt={1}>
          You can leave a message via Email at{' '}
          <Link href='mailto:muhammadsaufiroja@gmail.com'>
            muhammadsaufiroja@gmail.com
          </Link>{' '}
          for more information, or you can find me on my social media:
        </Typography>
        <Grid container spacing={2} pt={1}>
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
