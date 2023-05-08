import React from 'react'
import {
  Typography,
  Box,
  List,
  Divider
} from '@mui/material'
import AdminUrunListe from '../../components/AdminUrunListe'
function AdminUrunler() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Typography variant='h5' mb={2} sx={{ fontWeight: 'bold' }}>Ürünler</Typography>
      <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
        <List sx={{ maxWidth: "100%" }}>
         <Divider/>
         <AdminUrunListe urun={"Çiftlik Evi (Büyük)"} ozellikler={"Pizza sosu, mozzarella peyniri, salam, mantar"} fiyat={"149.90 TL"} link={"https://raw.githubusercontent.com/SDU-Bilgisayar-Muhendisligi/PieCentralPizza/zehra/photos/urunler/pizzalar/ciftlik-evi.jpg"}/>
         <Divider/>
         <Divider/>
         <AdminUrunListe urun={"Sucuk Mısır (Büyük)"} ozellikler={"Pizza sosu, mozzarella peyniri, sucuk, mısır"} fiyat={"149.90 TL"} link={"https://raw.githubusercontent.com/SDU-Bilgisayar-Muhendisligi/PieCentralPizza/zehra/photos/urunler/pizzalar/sucuk-misir.jpg"}/>
         <Divider/>
         <Divider/>
         <AdminUrunListe urun={"Çokomania"} ozellikler={"Bitter ve beyaz çikolatalı"} fiyat={"19.90 TL"} link={"https://raw.githubusercontent.com/SDU-Bilgisayar-Muhendisligi/PieCentralPizza/zehra/photos/urunler/yanUrunler/cokomania.jpg"}/>
         <Divider/>
         <Divider/>
         <AdminUrunListe urun={"Sufle"} ozellikler={"Eriyen Çikolata ve yumuşak kek"} fiyat={"34.90 TL"} link={"https://raw.githubusercontent.com/SDU-Bilgisayar-Muhendisligi/PieCentralPizza/zehra/photos/urunler/yanUrunler/sufle.jpg"}/>
         <Divider/>
         <Divider/>
         <AdminUrunListe urun={"Lezzet 3'lüsü (Büyük)"} ozellikler={"Pizza sosu, mozzarella peyniri, sosis, mısır, mantar"} fiyat={"149.90 TL"} link={"https://raw.githubusercontent.com/SDU-Bilgisayar-Muhendisligi/PieCentralPizza/zehra/photos/urunler/pizzalar/lezzet-3lusu.jpg"}/>
         <Divider/>
        </List>
      </Box>
    </Box>
  )
}

export default AdminUrunler