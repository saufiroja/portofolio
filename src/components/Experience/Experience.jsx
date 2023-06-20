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
          <Typography variant='h6'>Back End Developer</Typography>
        </Box>
        <Box borderBottom={1} pb={1}>
          <Typography variant='body1'>PT ICE Messanger Indonesia</Typography>
          <Typography variant='body1' pb={1}>
            August 2022 - Present
          </Typography>
          <Typography variant='body1' sx={{ color: 'gray' }}>
            - The focus will be on back/end Go development
            <br />
            - Designing and developing advanced backend platform
            <br />
            - Maintain code quality above the bar Fix and improve application performance
            <br />
            - Cooperating with the team in the process of building the application- The focus will be on back/end Go development - Designing and developing advanced backend platform - Maintain code quality above the bar Fix and improve application performance - Cooperating with the team in the process of building the application
          </Typography>
        </Box>
        <Box pb={1}>
          <Typography variant='h6'>Back End Developer</Typography>
        </Box>
        <Box borderBottom={1} pb={1}>
          <Typography variant='body1'>Moto Hexagon</Typography>
          <Typography variant='body1' pb={1}>
            June 2023 - June 2023
          </Typography>
        </Box>
        <Box pb={1}>
          <Typography variant='h6'>Full Stack Web Development</Typography>
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
