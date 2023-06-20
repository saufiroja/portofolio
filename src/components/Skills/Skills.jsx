import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';

const languages = ['Javascript', 'Typescript', 'Go'];
const frontend = ['HTML & CSS', 'Bootstrap', 'Material UI', 'React JS', 'NextJS'];
const backend = [
  'NodeJS',
  'Mongo DB',
  'PostgreSQL', 
  'Nestjs', 
  'Docker', 
  'Redis', 
  'GraphQL', 
  'gRPC',
  'MySQL',
  'Unit Test',
  'Elasticsearch',
  'Amazon S3'
];
const tools = [
  'Git', 
  'Postman', 
  'Trello', 
  'Visual Studio Code',
  'Goland',
  'JIRA',
  'Swagger'
];

const Skills = () => {
  return (
    <>
      <Box px={{ xs: 5, sm: 5 }} py={{ xs: 5, sm: 3 }}>
        <Container maxWidth='lg'>
          <Typography variant='h5' align='center'>
            Skill
          </Typography>
          <Grid container spacing={3} mt={1}>
            <Grid item xs={12} md={3}>
              <Box borderBottom={1}>
                <Typography variant='h5' align='center'>
                  Languages
                </Typography>
              </Box>
              {languages.map((language) => {
                return (
                  <Box mt={1} key={language}>
                    <Typography>{language}</Typography>
                  </Box>
                );
              })}
            </Grid>
            <Grid item xs={12} sm={3}>
              <Box borderBottom={1}>
                <Typography variant='h5' align='center'>
                  Frontend
                </Typography>
              </Box>
              {frontend.map((frontend) => {
                return (
                  <Box mt={1} key={frontend}>
                    <Typography>{frontend}</Typography>
                  </Box>
                );
              })}
            </Grid>
            <Grid item xs={12} sm={3}>
              <Box borderBottom={1}>
                <Typography variant='h5' align='center'>
                  Backend
                </Typography>
              </Box>
              {backend.map((backend) => {
                return (
                  <Box mt={1} key={backend}>
                    <Typography>{backend}</Typography>
                  </Box>
                );
              })}
            </Grid>
            <Grid item xs={12} sm={3}>
              <Box borderBottom={1}>
                <Typography variant='h5' align='center'>
                  Tools
                </Typography>
              </Box>
              {tools.map((tool) => {
                return (
                  <Box mt={1} key={tool}>
                    <Typography>{tool}</Typography>
                  </Box>
                );
              })}
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Skills;
