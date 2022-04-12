import { CallMade, GitHub } from '@mui/icons-material';
import {
  Box,
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

const frontend = () => {
  return (
    <>
      <Container maxWidth='lg'>
        <Box py={{ xs: 5, sm: 1 }}>
          <Typography variant='h5'>Frontend Project</Typography>
        </Box>

        <Grid container spacing={4}>
          {/* PROJECT 1 */}
          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
            >
              <CardMedia
                image='/assets/project/todo-app.png'
                sx={{ paddingTop: '50%' }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant='subtitle2'>Todo App</Typography>
                <Typography variant='body2'>
                  Web Application for managing your todo list.
                </Typography>
                <Typography sx={{ color: 'blue' }} variant='body1'>
                  Technologies: Express.js, Node.Js, PostgreSQL, React.js,
                </Typography>
              </CardContent>
              <CardActions>
                <Link
                  underline='none'
                  href='https://github.com/saufiroja/todo-app'
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
                <Link
                  underline='none'
                  href='https://todo-app-e3b253.netlify.app/'
                  blank='true'
                >
                  <Button variant='contained' size='small'>
                    <CallMade fontSize='small' /> View
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
                image='/assets/project/impostor-app-2.png'
                sx={{ paddingTop: '50%' }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant='subtitle2'>Game List App</Typography>
                <Typography variant='body2'>
                  Web Application that you can play games
                </Typography>
                <Typography sx={{ color: 'blue' }} variant='body1'>
                  Technologies: Next.js, Node.Js
                </Typography>
              </CardContent>
              <CardActions>
                <Link
                  underline='none'
                  href='https://github.com/saufiroja/my-app'
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
                <Link
                  underline='none'
                  href='https://cocky-ptolemy-880e92.netlify.app/'
                  blank='true'
                >
                  <Button variant='contained' size='small'>
                    <CallMade fontSize='small' /> View
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
                image='/assets/project/tracker-covid.png'
                sx={{ paddingTop: '50%' }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant='subtitle2'>Tracker Covid</Typography>
                <Typography variant='body2'>
                  Web Application that you can track the covid-19
                </Typography>
                <Typography sx={{ color: 'blue' }} variant='body1'>
                  Technologies: Node.Js, React.js
                </Typography>
              </CardContent>
              <CardActions>
                <Link
                  underline='none'
                  href='https://github.com/saufiroja/tracker-covid'
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
                <Link
                  underline='none'
                  href='https://tracker-covid-19-8cf178.netlify.app/'
                  blank='true'
                >
                  <Button variant='contained' size='small'>
                    <CallMade fontSize='small' /> View
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

export default frontend;
