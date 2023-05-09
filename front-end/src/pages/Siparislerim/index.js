import React from 'react'
import {
  Typography,
  Box,
  List,
  Divider
} from '@mui/material'
import SiparisListe from '../../components/SiparisListe'
function Siparislerim() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Typography variant='h5' mb={2} sx={{ fontWeight: 'bold' }}>Siparişlerim</Typography>
      <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
        <List sx={{ maxWidth: "100%" }}>
          <Divider />
          <SiparisListe urun="Festival" tarih={"5 May, 18:05"} durum={"Sipariş verildi"} link={"https://raw.githubusercontent.com/SDU-Bilgisayar-Muhendisligi/PieCentralPizza/zehra/photos/urunler/pizzalar/festival.jpg"} />
          <Divider />
          <SiparisListe urun="Ciftlik Evi" tarih="1 May, 17:04" durum="teslim edildi" link="https://raw.githubusercontent.com/SDU-Bilgisayar-Muhendisligi/PieCentralPizza/zehra/photos/urunler/pizzalar/ciftlik-evi.jpg" />
          <Divider />
          <Divider />
          <SiparisListe urun="Margarita" tarih={"23 April, 18:05"} durum={"teslim edildi"} link={"https://github.com/SDU-Bilgisayar-Muhendisligi/PieCentralPizza/blob/zehra/photos/urunler/pizzalar/margarita.jpg?raw=true"} />
          <Divider />
        </List>
      </Box>
    </Box>
  )
}

export default Siparislerim