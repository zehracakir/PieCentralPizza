import React from "react";
import { Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import AccordionMalzemeEkleCikar from "../../../components/UrunDetayComponent/AccordionMalzemeEkleCikar";
import SelectHamurSecimi from "../../../components/UrunDetayComponent/SelectHamurSecimi";
import UrunDetaySagKisim from "../../../components/UrunDetayComponent/UrunDetaySagKisim";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

function UrunDetay() {

  const urunDetaylari = {
    urunAdi: "Çiftlik Evi (Büyük)",
    urunDetay: "Yoğun Mozzarella Tadı",
    urunOzellikler: "Pizza sosu, mozzarella peyniri, salam, mantar",
    resimUrl: "https://raw.githubusercontent.com/SDU-Bilgisayar-Muhendisligi/PieCentralPizza/zehra/photos/urunler/pizzalar/ciftlik-evi.jpg",
    urunFiyat: "149.90 TL"
  };

  const theme = useTheme();
  const isLgOrMd = useMediaQuery(theme.breakpoints.down('md'));



  return (
    <Container maxWidth="lg" sx={{ mt: 15, mb: isLgOrMd ? 15 : 30 }}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>

          <Grid item xs={12} md={6}>
            <Typography sx={{ fontWeight: "bold", fontSize: '30px' }}>{urunDetaylari.urunAdi}</Typography>
            <Typography variant="body2" color="text.secondary">{urunDetaylari.urunDetay}</Typography>
            <Typography sx={{ fontWeight: "bold", mt: 2 }}>İçindekiler</Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>{urunDetaylari.urunOzellikler}</Typography>
            <SelectHamurSecimi />

          </Grid>
          <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '360px' }}>
            <UrunDetaySagKisim resimUrl={urunDetaylari.resimUrl} urunFiyat={urunDetaylari.urunFiyat}></UrunDetaySagKisim>
          </Grid>


        </Grid>
      </Box>
      <AccordionMalzemeEkleCikar
        header="Malzeme Ekle Çıkar" />
    </Container>
  );
};

export default UrunDetay;
