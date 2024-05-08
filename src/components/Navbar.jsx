import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Groups2Icon from "@mui/icons-material/Groups2";

import DarkModeTwoToneIcon from '@mui/icons-material/DarkModeTwoTone';
const pages = ['About Us', 'Services', 'Contact Us'];

function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [darkMode, setDarkMode] = useState(false)


  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.body.classList.remove('light-mode');
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
      document.body.classList.add('light-mode');
    }
  };


  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  return (
    <AppBar position="fixed" sx={{ backgroundColor: 'rgba(25,118,210,1)' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Groups2Icon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            component="a"
            href="/home"
            noWrap
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.2rem',
              color: 'inherit',
              textDecoration: 'none',
              fontSize: '35px'
            }}
          >
            TalentX
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
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
                display: { xs: 'block', md: 'none' }

              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu} >
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Groups2Icon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              fontSize: '20px'
            }}
          >
            TalentX
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2, color: 'white',
                  display: 'block',
                  fontWeight: 'bold',
                  fontSize: '16px',
                  lettterSpacing: '.2rem',
                  '&:focus': { outline: 'none' },
                  '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' },

                }}>
                {page}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>

            <Button
              variant="contain"
              color="primary"
              onClick={() => { /* Add your button click handler here */ }}
              sx={{
                mr: 1, fontColor: 'white',
                fontWeight: 'bold',
                fontSize: '12px',
                justifyContent: 'flex-end',
                letterSpacing: '.2rem',
                '&:focus': { outline: 'none' },
                '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' },


              }}
            >
              Sign in
            </Button>
            <Button
              variant="contain"
              color="primary"
              onClick={() => { /* Add your button click handler here */ }}
              sx={{
                mr: 1, fontColor: 'white',
                fontWeight: 'bold',
                fontSize: '12px',
                justifyContent: 'flex-end',
                letterSpacing: '.2rem',
                '&:focus': { outline: 'none' },
                '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' },
              }}
            >
              Register
            </Button>

            <Tooltip title="Toogle Theme">
              <IconButton onClick={handleDarkModeToggle} 
              sx={{ p: 0, 
                color: 'inherit', 
                '&:focus': { outline: 'none' },
                justifyContent: 'flex-end',
                
                }}>
                <DarkModeTwoToneIcon />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar