import { Box, Container, Typography } from '@mui/material';
import React from 'react';

const Education = () => {
  return (
    <>
      <Container maxWidth='lg'>
        <Box px={{ xs: 5, sm: 5 }} py={{ xs: 5, sm: 3 }}>
          <Typography variant='h5' align='center'>
            Education
          </Typography>
        </Box>
      </Container>
      <Container maxWidth='lg'>
        <Box pb={1}>
          <Typography variant='h6'>Full-Stack Web Development</Typography>
        </Box>
        <Box borderBottom={1} pb={1}>
          <Typography variant='body1'>Binar Academy</Typography>
          <Typography variant='body1'>
            11 August 2021 - 18 March 2022
          </Typography>
        </Box>
        <Box pb={1} pt={1}>
          <Typography variant='h6'>Back End Development and API</Typography>
        </Box>
        <Box borderBottom={1} pb={1}>
          <Typography variant='body1'>FreeCodeCamp</Typography>
          <Typography variant='body1'>
            01 December 2021 - 18 March 2022
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default Education;
