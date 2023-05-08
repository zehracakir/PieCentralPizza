import React from "react";
import { Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import UrunAdeti from "../../../components/UrunDetayComponent/UrunDetayAltKisim/UrunAdeti";
import SepeteEkle from "../../../components/UrunDetayComponent/UrunDetayAltKisim/SepeteEkle";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

function YanUrunlerDetay() {
  const urunDetay = {
    name: "Çiftlik Evi (Büyük)",
    urunDetayi:"Efsane Belçika Çikolatası",
    description: "Pizza sosu, mozzarella peyniri, salam, mantar",
    imageUrl: "https://raw.githubusercontent.com/SDU-Bilgisayar-Muhendisligi/PieCentralPizza/zehra/photos/urunler/pizzalar/ciftlik-evi.jpg"
  };
  const theme = useTheme();
  const isLgOrMd = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <Container maxWidth="lg" sx={{ mt: 15, mb: isLgOrMd ? 15 : 30 }}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>

          <Grid item xs={12} md={6}>
            <Typography sx={{ fontWeight: "bold", fontSize: '30px' }}>{urunDetay.name}</Typography>
            <Typography variant="body2" color="text.secondary">{urunDetay.urunDetayi}</Typography>
            <Typography sx={{ fontWeight: "bold", mt: 3 }}>İçindekiler</Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>{urunDetay.description}</Typography>

          </Grid>
          <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <img src={urunDetay.imageUrl} alt="yanUrunResmi" width="50%" />
            <Box sx={{ mt: 3, mb: 3 }}>
              <UrunAdeti />
            </Box>
            <SepeteEkle />
          </Grid>

        </Grid>
      </Box>
    </Container>
  );
};

export default YanUrunlerDetay