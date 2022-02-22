import { Box, Container, Typography } from '@mui/material';
import React from 'react';

const Projects = () => {
  return (
    <>
      <Container maxWidth='md'>
        <Box px={{ xs: 5, sm: 5 }} py={{ xs: 5, sm: 3 }}>
          <Typography variant='h5' align='center'>
            Projects
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default Projects;
