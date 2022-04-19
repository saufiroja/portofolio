import { GitHub } from '@mui/icons-material';
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
import { backend } from '../../../data';

const Backend = () => {
  return (
    <>
      <Container maxWidth='lg'>
        <Box py={{ xs: 5, sm: 1 }}>
          <Typography variant='h5'>Backend Project</Typography>
        </Box>
        <Grid container spacing={4}>
          {backend.map((data, index) => {
            return (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <CardMedia image={data.image} sx={{ paddingTop: '50%' }} />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant='subtitle2'>{data.title}</Typography>
                    <Typography variant='body2'>{data.content}</Typography>
                    <Typography sx={{ color: 'blue' }} variant='body1'>
                      Technologies: {data.tech}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Link underline='none' href={data.url}>
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
            );
          })}
        </Grid>

        <Box display='flex' justifyContent='center' pt={5} pb={3}>
          <Link underline='none' href='https://www.github.com/saufiroja'>
            <Button
              variant='contained'
              color='info'
              size='large'
              sx={{ color: 'black' }}
            >
              Read More
            </Button>
          </Link>
        </Box>
      </Container>
    </>
  );
};

export default Backend;
