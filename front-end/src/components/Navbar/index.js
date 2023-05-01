import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';



function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);


  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  return (
    <AppBar position="fixed" sx={{ bgcolor: "white", mt: 0 }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <img src="https://raw.githubusercontent.com/SDU-Bilgisayar-Muhendisligi/PieCentralPizza/zehra/photos/PieCentral%20Pizza%20sonlogo3.png" alt="photo" width={"300px"} height={"80px"}></img>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'flex-end' }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="black"
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
                display: { xs: 'block', md: 'none' },
              }}
            >

              <Link to={'/pizzalar'} style={{ textDecoration: 'none', color:'black' }}>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Pizzalar</Typography>
                </MenuItem>
              </Link>
              <Link to={'yan-urunler'} style={{ textDecoration: 'none', color:'black' }}>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Yan Ürünler</Typography>
                </MenuItem>
              </Link>
              <Link to={'/hakkimizda'} style={{ textDecoration: 'none', color:'black' }}>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Hakkımızda</Typography>
                </MenuItem>
              </Link>

            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Link to={"/pizzalar"} style={{ textDecoration: 'none' }}>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'black', display: 'block', ml: 5, textTransform: 'none' }}
              ><Typography sx={{ fontWeight: 'bold' }}>
                  Pizzalar
                </Typography>

              </Button>
            </Link>
            <Link to={"/yan-urunler"} style={{ textDecoration: 'none'}}>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'black', display: 'block', ml: 5, textTransform: 'none' }}
              ><Typography sx={{ fontWeight: 'bold' }}>
                  Yan Ürünler
                </Typography>

              </Button>
            </Link>
            <Link to={'/hakkimizda'} style={{ textDecoration: 'none'}}>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'black', display: 'block', ml: 5, textTransform: 'none' }}
              ><Typography sx={{ fontWeight: 'bold' }}>
                  Hakkımızda
                </Typography>

              </Button>
            </Link>

          </Box>
          <Button variant="text" sx={{ color: "black", fontWeight: 'bold', border: "none", textTransform: 'none' }} startIcon={<AccountCircleIcon sx={{ color: 'black' }} />}>Giriş Yap</Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar
