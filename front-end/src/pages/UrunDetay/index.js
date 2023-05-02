import React from "react";
import { Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import AccordionMalzemeEkleCikar from "../../components/UrunDetayComponent/AccordionMalzemeEkleCikar";
import SelectHamurSecimi from "../../components/UrunDetayComponent/SelectHamurSecimi";
import UrunAdeti from "../../components/UrunDetayComponent/UrunDetayAltKisim/UrunAdeti";
import SepeteEkle from "../../components/UrunDetayComponent/UrunDetayAltKisim/SepeteEkle";
function UrunDetay ()  {
  const urunDetay = {
    name: "Çiftlik Evi (Büyük)",
    description: "Pizza sosu, mozzarella peyniri, salam, mantar",
    imageUrl: "https://raw.githubusercontent.com/SDU-Bilgisayar-Muhendisligi/PieCentralPizza/zehra/photos/urunler/pizzalar/ciftlik-evi.jpg"
  };
  

  
  
 
  return (
    <Container maxWidth="lg" sx={{mt:15,mb:10}}>
       <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
      
        <Grid item xs={12} md={6}>
          <Typography sx={{fontWeight:"bold",fontSize:'30px'}}>{urunDetay.name}</Typography>
          <Typography sx={{fontWeight:"bold",mt:3}}>İçindekiler</Typography>
          <Typography variant="body2" color="text.secondary" sx={{mb:3}}>{urunDetay.description}</Typography> 
      <SelectHamurSecimi/>
      
        </Grid>
        <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <img src={urunDetay.imageUrl} alt="pizzaResmi" width="50%"/>
        <Box sx={{ mt: 3,mb:3 }}>
    <UrunAdeti />
    
      
    
  </Box>
  <SepeteEkle />
        </Grid>
        
      </Grid>
    </Box>
    <AccordionMalzemeEkleCikar
        header="Malzeme Ekle Çıkar"/>
    
   
    
      

      
    </Container>
  );
};

export default UrunDetay