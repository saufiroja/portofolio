import { Box, Container, Typography } from '@mui/material';
import React from 'react';

import { education } from '../../data';

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
      {education.map((data, index) => {
        return (
          <Container maxWidth='lg' key={index}>
            <Box pb={1}>
              <Typography variant='h6'>{data.title}</Typography>
            </Box>
            <Box borderBottom={1} pb={1}>
              <Typography variant='body1'>{data.school}</Typography>
              <Typography variant='body1'>{data.time}</Typography>
            </Box>
          </Container>
        );
      })}
    </>
  );
};

export default Education;
