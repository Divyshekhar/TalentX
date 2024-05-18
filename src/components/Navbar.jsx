import { useState } from 'react';
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
import PropTypes from 'prop-types';
import DarkModeTwoToneIcon from '@mui/icons-material/DarkModeTwoTone';
import { NavLink } from 'react-router-dom';
const pages = [
   { name: "Home", path: "/"},
   { name: "About Us", path: "/about"},
   { name: "Contact Us", path: "/contact"},
   { name: "Subscription", path: "/subscriptions" }

];

function NavBar({ darkTheme, setDarkTheme }) {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  return (
    <AppBar position="fixed" sx={{
        backgroundColor: darkTheme?'rgb(156,39,176)':'rgba(25,118,210,1)',
        transition: 'backgroundColor 0.3s ease-in-out'
        
        }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Groups2Icon sx={{ 
            display: { xs: 'none', md: 'flex' }, 
            color: darkTheme?"white":"black",
            transition: 'color 0.3s ease-in-out',
            mr: 1 }} />
          <Typography
            variant="h6"
            component= {NavLink}
            to="/"
            noWrap
            sx={{
              
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.2rem',
              color: darkTheme?"white":"black",
              textDecoration: 'none',
              fontSize: '35px',
              transition: 'color 0.3s ease-in-out'
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
                <MenuItem key={page.name} onClick={handleCloseNavMenu} >
                  <Typography display='flex' justifyContent={'center'}>
                    <NavLink to={page.path}>{page.name}</NavLink>
                    </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Groups2Icon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component= {NavLink}
            to="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: darkTheme?"white":"black",
              textDecoration: 'none',
              fontSize: '20px'
            }}
          >
            TalentX
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                onClick={handleCloseNavMenu}
                component={NavLink}
                to={page.path}
                sx={{
                  my: 2, 
                  color: darkTheme ? 'white' : 'black',
                  display: 'block',
                  fontWeight: 'bold',
                  fontSize: '16px',
                  lettterSpacing: '.2rem',
                  '&:focus': { outline: 'none' },
                  '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' },

                }}>
                {page.name}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>

            <Button
              variant="contain"
              color="primary"
              component= {NavLink}
              to='/signin'
              sx={{
                mr: 1, 
                color: darkTheme?"white":"black",
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
              component={NavLink}
              to='/register'
              sx={{
                mr: 1, 
                color: darkTheme?"white":"black",
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
              <IconButton onClick={() => {
                setDarkTheme(prevState => !prevState);
              }}
                sx={{
                  p: 0,
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

NavBar.propTypes = {
  setDarkTheme: PropTypes.func.isRequired,
  darkTheme: PropTypes.bool.isRequired
};


export default NavBar