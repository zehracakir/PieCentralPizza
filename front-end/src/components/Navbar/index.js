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
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import GirisYap from '../GirisYap';
import KayitOl from '../KayitOl';
import UrunArama from '../UrunArama';
const pages = ['Pizzalar', 'Yan Ürünler', 'Hakkımızda'];


function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [login, setLogin] = useState(false);
  const [register, setRegister] = useState(false);

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

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  return (
    <>
      <GirisYap login={login} closeDialog={closeDialog} closeLogin={closeLogin} openRegister={openRegister} />
      <KayitOl register={register} closeDialog={closeDialog} closeRegister={closeRegister} openLogin={openLogin} />
      <AppBar position="fixed" sx={{ bgcolor: "white", mt: 0 }}>
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <img src="https://raw.githubusercontent.com/SDU-Bilgisayar-Muhendisligi/PieCentralPizza/zehra/photos/PieCentral%20Pizza%20sonlogo3.png" alt="photo" width={204} height={"80px"}></img>

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
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
                <MenuItem>
                  <UrunArama />
                </MenuItem>
                

              </Menu>
            </Box>
            <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'black', display: 'block', ml: 5, textTransform: 'none' }}
                ><Typography sx={{ fontWeight: 'bold' }}>
                    {page}
                  </Typography>

                </Button>
              ))}
              <UrunArama />
            </Box>
            <Button variant="text" sx={{ color: "black", fontWeight: 'bold', border: "none", textTransform: 'none' }} startIcon={<AccountCircleIcon sx={{ color: 'black' }} />} onClick={openLogin}>Giriş Yap</Button>
          </Toolbar>
        </Container>
      </AppBar>
    </>

  );
}

export default Navbar