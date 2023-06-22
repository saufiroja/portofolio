import { Box, Container, Typography } from '@mui/material';
import React from 'react';

import { experience } from '../../data/experience';

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
        {experience.map((item, index) => () => {
          return (
            <>
              <Box pb={1} key={item.id}>
                <Typography variant='h6'>{item.title}</Typography>
              </Box>
              <Box borderBottom={1} pb={1} key={item.id}>
                <Typography variant='body1'>{item.name}</Typography>
                <Typography variant='body1' pb={1}>
                  {item.date}
                </Typography>
                <Typography variant='body1' sx={{ color: 'gray' }}>
                  {item.description.map((item, index) => () => {
                    return (
                      <>
                        - {item}
                        <br />
                      </>
                    );
                  })}
                </Typography>
              </Box>
            </>
          );
        })}
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
            - Maintain code quality above the bar Fix and improve application
            performance
            <br />- Cooperating with the team in the process of building the
            application
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default Experience;
