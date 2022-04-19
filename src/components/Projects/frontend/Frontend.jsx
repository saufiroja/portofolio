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
import { frontend } from '../../../data';

const Frontend = () => {
  return (
    <>
      <Container maxWidth='lg'>
        <Box py={{ xs: 5, sm: 1 }}>
          <Typography variant='h5'>Frontend Project</Typography>
        </Box>
        <Grid container spacing={4}>
          {frontend.map((data, index) => {
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
                    <Link underline='none' href={data.view} blank='true'>
                      <Button variant='contained' size='small'>
                        <CallMade fontSize='small' /> View
                      </Button>
                    </Link>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </>
  );
};

export default Frontend;
