import React from "react";
import { Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import UrunAdeti from "../../../components/UrunDetayComponent/UrunDetaySagKisim/UrunAdeti";
import SepeteEkle from "../../../components/UrunDetayComponent/UrunDetaySagKisim/SepeteEkle";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import IconButton from '@mui/joy/IconButton';
import { useState } from 'react';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
function UrunDetaySagKisim({resimUrl,urunFiyat}) {
  const [isFavorite, setIsFavorite] = useState(false);
  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
};
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} maxWidth={'100%'}>
      <IconButton onClick={handleFavoriteClick}
                        size="sm"
                        variant="plain"
                        color="neutral"
                        sx={{ml:'auto',mr:4}}>
                        {isFavorite ? <FavoriteBorderRoundedIcon style={{ color: '#dc3545' }} /> : <FavoriteBorderRoundedIcon />}
            </IconButton>
            <img src={resimUrl} alt="yanUrunResmi" width="50%" />
            <Box sx={{ mt: 3, mb: 3 }}>
              <UrunAdeti />
            </Box>
            <SepeteEkle urunFiyat={urunFiyat}/>
    </Box>
  )
}

export default UrunDetaySagKisim
