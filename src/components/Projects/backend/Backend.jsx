import { GitHub } from '@mui/icons-material';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Link,
  Typography,
} from '@mui/material';
import React from 'react';

const Backend = () => {
  return (
    <>
      <Container maxWidth='lg'>
        <Grid container spacing={4}>
          {/* PROJECT 1 */}
          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
            >
              <CardMedia
                image='/assets/project/crud.png'
                sx={{ paddingTop: '50%' }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant='subtitle2'>API CRUD</Typography>
                <Typography variant='body2'>
                  API CRUD is a simple CRUD API built with Node.js
                </Typography>
                <Typography sx={{ color: 'blue' }} variant='body1'>
                  Technologies: Express.js, Node.Js, PostgreSQL
                </Typography>
              </CardContent>
              <CardActions>
                <Link
                  underline='none'
                  href='https://github.com/saufiroja/crud-for-react-next'
                >
                  <Button
                    variant='contained'
                    size='small'
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
              </CardActions>
            </Card>
          </Grid>

          {/* PROJECT 2 */}
          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
            >
              <CardMedia
                image='/assets/project/auth.png'
                sx={{ paddingTop: '50%' }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant='subtitle2'>
                  API Authentication Verification
                </Typography>
                <Typography variant='body2'>
                  API Authentication Verification is a simple API built with
                  Node.js
                </Typography>
                <Typography sx={{ color: 'blue' }} variant='body1'>
                  Technologies: Express.js, Node.Js, PostgreSQL
                </Typography>
              </CardContent>
              <CardActions>
                <Link
                  underline='none'
                  href='https://github.com/saufiroja/auth-verification'
                >
                  <Button
                    variant='contained'
                    size='small'
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
              </CardActions>
            </Card>
          </Grid>

          {/* PROJECT 3 */}
          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
            >
              <CardMedia
                image='/assets/project/crud-file-upload.png'
                sx={{ paddingTop: '50%' }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant='subtitle2'>
                  API CRUD with file upload
                </Typography>
                <Typography variant='body2'>
                  API CRUD with file upload is a simple API built with Node.js
                </Typography>
                <Typography sx={{ color: 'blue' }} variant='body1'>
                  Technologies: Express.js, Node.Js, PostgreSQL, Multer
                </Typography>
              </CardContent>
              <CardActions>
                <Link underline='none' href='https://github.com/saufiroja/crud'>
                  <Button
                    variant='contained'
                    size='small'
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
              </CardActions>
            </Card>
          </Grid>

          {/* PROJECT 4 */}
          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
            >
              <CardMedia
                image='/assets/project/crud-nest-js.png'
                sx={{ paddingTop: '50%' }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant='subtitle2'>
                  API CRUD with NestJs
                </Typography>
                <Typography variant='body2'>
                  API CRUD with file upload is a simple API built with Node.js
                </Typography>
                <Typography sx={{ color: 'blue' }} variant='body1'>
                  Technologies: NestJs, PostgreSQL, Typescript
                </Typography>
              </CardContent>
              <CardActions>
                <Link
                  underline='none'
                  href='https://github.com/saufiroja/REST-API-NESTJS'
                >
                  <Button
                    variant='contained'
                    size='small'
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
              </CardActions>
            </Card>
          </Grid>

          {/* PROJECT 5 */}
          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
            >
              <CardMedia
                image='/assets/project/game-rps.png'
                sx={{ paddingTop: '50%' }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant='subtitle2'>
                  Game Rock Paper Scissors
                </Typography>
                <Typography variant='body2'>
                  Game Rock Paper Scissors is a simple built with Node.js and
                  Socket.io
                </Typography>
                <Typography sx={{ color: 'blue' }} variant='body1'>
                  Technologies: Express.js, Node.Js, Socket.io
                </Typography>
              </CardContent>
              <CardActions>
                <Link
                  underline='none'
                  href='https://github.com/saufiroja/socket-game'
                >
                  <Button
                    variant='contained'
                    size='small'
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
              </CardActions>
            </Card>
          </Grid>

          {/* PROJECT 6 */}
          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
            >
              <CardMedia
                image='/assets/project/chat-app.png'
                sx={{ paddingTop: '50%' }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant='subtitle2'>Chat App</Typography>
                <Typography variant='body2'>
                  Chat App is a simple built with Node.js and Socket.io
                </Typography>
                <Typography sx={{ color: 'blue' }} variant='body1'>
                  Technologies: Express.js, Node.Js, Socket.io
                </Typography>
              </CardContent>
              <CardActions>
                <Link
                  underline='none'
                  href='https://github.com/saufiroja/chat-app'
                >
                  <Button
                    variant='contained'
                    size='small'
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
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Backend;
