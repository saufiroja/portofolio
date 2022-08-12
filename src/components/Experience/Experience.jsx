import { Box, Container, Typography } from '@mui/material';
import React from 'react';

const Experience = () => {
  return (
    <>
      <Container maxWidth='md'>
        <Box px={{ xs: 5, sm: 5 }} py={{ xs: 5, sm: 3 }}>
          <Typography variant='h5' align='center'>
            Experience
          </Typography>
        </Box>
      </Container>
      <Container maxWidth='lg'>
        <Box pb={1}>
          <Typography variant='h6'>Maintener</Typography>
        </Box>
        <Box borderBottom={1} pb={1}>
          <Typography variant='body1'>Bellshade</Typography>
          <Typography variant='body1' pb={1}>
            July 2022 - present
          </Typography>
          <Typography variant='body1' sx={{ color: 'gray' }}>
            - Maintained code repository in Github
            <br />
            - Learned how to contribute on Open-Source Project
            <br />
            - Made free learning resource for Indonesian Learner
            <br />- https://github.com/bellshade/Golang
          </Typography>
        </Box>
        <Box pb={1}>
          <Typography variant='h6'>Full-Stack Web Development</Typography>
        </Box>
        <Box borderBottom={1} pb={1}>
          <Typography variant='body1'>Binar Academy</Typography>
          <Typography variant='body1' pb={1}>
            August 2021 - March 2022
          </Typography>
          <Typography variant='body1' sx={{ color: 'gray' }}>
            - Developing REST APIs using NodeJS, Javascript
            <br />
            - Evaluated and analyzed performance from the Trello every 1 week
            <br />
            - Deploy web using heroku and netlify
            <br />- Creating a working directory using github
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default Experience;
