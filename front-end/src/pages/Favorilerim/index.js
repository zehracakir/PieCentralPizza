import React from 'react'
import {
  Typography,
  Box,
  List,
  Divider
} from '@mui/material'
import FavoriListe from '../../components/FavoriListe'
function Favorilerim() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Typography variant='h5' mb={2} sx={{ fontWeight: 'bold' }}>Favorilerim</Typography>
      <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
        <List sx={{ maxWidth: "70%" }}>
         <Divider/>
         <FavoriListe urun={"Çiftlik Evi (Büyük)"} ozellikler={"Pizza sosu, mozzarella peyniri, salam, mantar"} fiyat={"149.90 TL"} link={"https://raw.githubusercontent.com/SDU-Bilgisayar-Muhendisligi/PieCentralPizza/zehra/photos/urunler/pizzalar/ciftlik-evi.jpg"}/>
         <Divider/>
         <Divider/>
         <FavoriListe urun={"Sucuk Mısır (Büyük)"} ozellikler={"Pizza sosu, mozzarella peyniri, sucuk, mısır"} fiyat={"149.90 TL"} link={"https://raw.githubusercontent.com/SDU-Bilgisayar-Muhendisligi/PieCentralPizza/zehra/photos/urunler/pizzalar/sucuk-misir.jpg"}/>
         <Divider/>
         <Divider/>
         <FavoriListe urun={"Çokomania"} ozellikler={"Bitter ve beyaz çikolatalı"} fiyat={"19.90 TL"} link={"https://raw.githubusercontent.com/SDU-Bilgisayar-Muhendisligi/PieCentralPizza/zehra/photos/urunler/yanUrunler/cokomania.jpg"}/>
         <Divider/>
         <Divider/>
         <FavoriListe urun={"Sufle"} ozellikler={"Eriyen Çikolata ve yumuşak kek"} fiyat={"34.90 TL"} link={"https://raw.githubusercontent.com/SDU-Bilgisayar-Muhendisligi/PieCentralPizza/zehra/photos/urunler/yanUrunler/sufle.jpg"}/>
         <Divider/>
         <Divider/>
         <FavoriListe urun={"Lezzet 3'lüsü (Büyük)"} ozellikler={"Pizza sosu, mozzarella peyniri, sosis, mısır, mantar"} fiyat={"149.90 TL"} link={"https://raw.githubusercontent.com/SDU-Bilgisayar-Muhendisligi/PieCentralPizza/zehra/photos/urunler/pizzalar/lezzet-3lusu.jpg"}/>
         <Divider/>
        </List>
      </Box>
    </Box>
  )
}

export default Favorilerim