import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import { Backend, Frontend } from '../../components';

const Projects = () => {
  return (
    <>
      <Container maxWidth='md'>
        <Box px={{ xs: 5, sm: 5 }} py={{ xs: 5, sm: 3 }}>
          <Typography variant='h5' align='center'>
            My Project
          </Typography>
        </Box>
      </Container>

      <Box px={{ xs: 5, sm: 5 }} py={{ xs: 5, sm: 3 }}>
        <Frontend />
      </Box>

      <Box px={{ xs: 5, sm: 5 }} py={{ xs: 5, sm: 3 }}>
        <Backend />
      </Box>
    </>
  );
};

export default Projects;
