import { useState } from 'react';
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
import GirisYap from '../GirisYap';
import KayitOl from '../KayitOl';
import UrunArama from '../UrunArama';
import { Link } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LogoutIcon from '@mui/icons-material/Logout';
const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [login, setLogin] = useState(false);
  const [register, setRegister] = useState(false);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const closeLogin = () => {
    setLogin(false);
  }
  const openLogin = () => {
    setLogin(true);
  }
  const closeRegister = () => {
    setRegister(false);
  }
  const openRegister = () => {
    setRegister(true);
  }
  const closeDialog = () => {
    setLogin(false);
    setRegister(false);
  }

  return (
    <>
      <GirisYap login={login} closeDialog={closeDialog} closeLogin={closeLogin} openRegister={openRegister} />
      <KayitOl register={register} closeDialog={closeDialog} closeRegister={closeRegister} openLogin={openLogin} />
      <AppBar position="fixed" sx={{ bgcolor: "white", mt: 0 }}>
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Link to={'/'}>
              <img src="https://raw.githubusercontent.com/SDU-Bilgisayar-Muhendisligi/PieCentralPizza/zehra/photos/PieCentral%20Pizza%20sonlogo3.png" alt="photo" width={"204px"} height={"80px"}></img>
            </Link>

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

                <Link to={'/pizzalar'} style={{ textDecoration: 'none', color: 'black' }}>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">Pizzalar</Typography>
                  </MenuItem>
                </Link>
                <Link to={'/yan-urunler'} style={{ textDecoration: 'none', color: 'black' }}>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">Yan Ürünler</Typography>
                  </MenuItem>
                </Link>
                <Link to={'/hakkimizda'} style={{ textDecoration: 'none', color: 'black' }}>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">Hakkımızda</Typography>
                  </MenuItem>
                </Link>
                <MenuItem>
                  <UrunArama />
                </MenuItem>
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
              <Link to={"/yan-urunler"} style={{ textDecoration: 'none' }}>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'black', display: 'block', ml: 5, textTransform: 'none' }}
                ><Typography sx={{ fontWeight: 'bold' }}>
                    Yan Ürünler
                  </Typography>

                </Button>
              </Link>
              <Link to={'/hakkimizda'} style={{ textDecoration: 'none' }}>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'black', display: 'block', ml: 5, textTransform: 'none' }}
                ><Typography sx={{ fontWeight: 'bold' }}>
                    Hakkımızda
                  </Typography>

                </Button>
              </Link>
              <UrunArama />
            </Box>
            <Link to='/profil/sepetim'>
              <IconButton aria-label="cart" sx={{ color: 'black', mr: 1 }} size='sm'>
                <StyledBadge badgeContent={4} color="error">
                  <ShoppingCartIcon />
                </StyledBadge>
              </IconButton>
            </Link>
            <IconButton aria-label="cart" sx={{ color: 'black', mr: 1 }} size='sm'>
                  <LogoutIcon />
            </IconButton>
            <Button variant="text" sx={{ color: "black", fontWeight: 'bold', border: "none", textTransform: 'none' }} startIcon={<AccountCircleIcon sx={{ color: 'black' }} />} onClick={openLogin}>Giriş Yap
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </>

  );
}
export default Navbar



