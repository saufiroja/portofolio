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

import { certificate } from '../../data';

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
          {certificate.map((data, index) => {
            return (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                  }}
                >
                  <CardMedia sx={{ paddingTop: '70%' }} image={data.image} />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant='subtitle2'>{data.title}</Typography>
                    <Link href={data.link} underline='none' blank>
                      <Button variant='contained' size='small'>
                        View
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </>
  );
};

export default Certificate;
