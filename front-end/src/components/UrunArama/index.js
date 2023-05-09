import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "#404258",
  '&:hover': {
    backgroundColor: "#474E68",
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '50ch',
      '&:focus': {
        width: '75ch',
      },
    },
  },
}));
function UrunArama() {
  return (
    <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center", mt:10}}>
      <AppBar position="static">
        <Toolbar sx={{bgcolor:"#F6F1F1"}}>
          <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%" }}>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Aratacağınız ürünü giriniz..."
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default UrunArama;