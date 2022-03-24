import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Link,
  Typography,
} from '@mui/material';
import React from 'react';

const Certificate = () => {
  return (
    <>
      <Container maxWidth='md'>
        <Box px={{ xs: 5, sm: 5 }} py={{ xs: 5, sm: 3 }}>
          <Typography variant='h5' align='center'>
            Certificate
          </Typography>
        </Box>
      </Container>
      <Container maxWidth='lg'>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}
            >
              <CardMedia
                sx={{ paddingTop: '70%' }}
                image='/assets/img/binar.jpg'
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant='subtitle2'>
                  Binar Academy Full-Stack Web development
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}
            >
              <CardMedia
                sx={{ paddingTop: '70%' }}
                image='/assets/img/fcc.png'
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant='subtitle2'>
                  Freecodecamp Back End Development APIs
                </Typography>
                <Link
                  href='https://www.freecodecamp.org/certification/saufiroja/back-end-development-and-apis'
                  underline='none'
                  blank
                >
                  <Button variant='contained' size='small'>
                    View
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}
            >
              <CardMedia
                sx={{ paddingTop: '70%' }}
                image='/assets/img/JavaScriptDasar.jpg'
              />

              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant='subtitle2'>Javascript Dasar</Typography>
                <Link
                  href='https://www.codepolitan.com/c/HZAD8E6'
                  underline='none'
                  blank
                >
                  <Button variant='contained' size='small'>
                    View
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}
            >
              <CardMedia
                sx={{ paddingTop: '70%' }}
                image='/assets/img/JavaScriptOOP.jpg'
              />

              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant='subtitle2'>
                  Javascript Object Oriented Programming
                </Typography>
                <Link
                  href='https://www.codepolitan.com/c/6Z1QN7Y'
                  underline='none'
                  blank
                >
                  <Button variant='contained'>View</Button>
                </Link>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}
            >
              <CardMedia
                sx={{ paddingTop: '70%' }}
                image='/assets/img/JavaScriptStandardLibrary.jpg'
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant='subtitle2'>
                  Javascript Standard Library
                </Typography>
                <Link
                  href='https://www.codepolitan.com/c/GOFM2QN'
                  underline='none'
                  blank
                >
                  <Button variant='contained'>View</Button>
                </Link>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}
            >
              <CardMedia
                sx={{ paddingTop: '70%' }}
                image='/assets/img/git.png'
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant='subtitle2'>Git</Typography>
                <Link
                  href='https://progate.com/course_certificate/0a8f8d57qsla14'
                  underline='none'
                  blank
                >
                  <Button variant='contained'>View</Button>
                </Link>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}
            >
              <CardMedia
                sx={{ paddingTop: '70%' }}
                image='/assets/img/javascript.png'
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant='subtitle2'>JavaScript</Typography>
                <Link
                  href='https://progate.com/course_certificate/fcd5a04fqskc9x'
                  underline='none'
                  blank
                >
                  <Button variant='contained'>View</Button>
                </Link>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}
            >
              <CardMedia
                sx={{ paddingTop: '70%' }}
                image='/assets/img/nestjs.jpg'
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant='subtitle2'>NestJS</Typography>
                <Link
                  href='https://www.udemy.com/certificate/UC-9627537d-2b99-4a49-8e5b-7eac87656149/'
                  underline='none'
                  blank
                >
                  <Button variant='contained'>View</Button>
                </Link>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}
            >
              <CardMedia
                sx={{ paddingTop: '70%' }}
                image='/assets/img/postgres.jpg'
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant='subtitle2'>Postgres + Express</Typography>
                <Link
                  href='https://www.udemy.com/certificate/UC-0b253675-22d8-4527-b578-f6ca11647d5c/'
                  underline='none'
                  blank
                >
                  <Button variant='contained'>View</Button>
                </Link>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Certificate;
