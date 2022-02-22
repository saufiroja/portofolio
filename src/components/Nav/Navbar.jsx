import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleHome = () => {
    navigate('/');
  };
  const handleAbout = () => {
    navigate('/about');
  };
  const handleSkills = () => {
    navigate('/skills');
  };
  const handleProjects = () => {
    navigate('/projects');
  };
  const handleEducation = () => {
    navigate('/education');
  };
  const handleCertificate = () => {
    navigate('/certificate');
  };
  const handleExperience = () => {
    navigate('/experience');
  };

  return (
    <AppBar position='static' sx={{ backgroundColor: 'rgb(29, 28, 28)' }}>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <Typography
            variant='h6'
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            <Button sx={{ color: 'white' }} onClick={handleHome}>
              Muhammad Saufi Roja
            </Button>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size='large'
              onClick={handleOpenNavMenu}
              color='inherit'
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id='menu-appbar'
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <MenuItem onClick={handleHome}>
                <Typography textAlign='center'>Home</Typography>
              </MenuItem>
              <MenuItem onClick={handleAbout}>
                <Typography textAlign='center'>About</Typography>
              </MenuItem>
              <MenuItem onClick={handleSkills}>
                <Typography textAlign='center'>Skills</Typography>
              </MenuItem>
              <MenuItem onClick={handleProjects}>
                <Typography textAlign='center'>Projects</Typography>
              </MenuItem>
              <MenuItem onClick={handleEducation}>
                <Typography textAlign='center'>Education</Typography>
              </MenuItem>
              <MenuItem onClick={handleCertificate}>
                <Typography textAlign='center'>Certificate</Typography>
              </MenuItem>
              <MenuItem onClick={handleExperience}>
                <Typography textAlign='center'>Experience</Typography>
              </MenuItem>
            </Menu>
          </Box>
          <Typography
            variant='h6'
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            Muhammad Saufi Roja
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Button
              onClick={handleHome}
              sx={{ color: 'white', display: 'block' }}
            >
              Home
            </Button>
            <Button
              onClick={handleAbout}
              sx={{ color: 'white', display: 'block' }}
            >
              About
            </Button>
            <Button
              onClick={handleSkills}
              sx={{ color: 'white', display: 'block' }}
            >
              Skills
            </Button>
            <Button
              onClick={handleProjects}
              sx={{ color: 'white', display: 'block' }}
            >
              Projects
            </Button>
            <Button
              onClick={handleEducation}
              sx={{ color: 'white', display: 'block' }}
            >
              Education
            </Button>
            <Button
              onClick={handleCertificate}
              sx={{ color: 'white', display: 'block' }}
            >
              Certificate
            </Button>
            <Button
              onClick={handleExperience}
              sx={{ color: 'white', display: 'block' }}
            >
              Experience
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
