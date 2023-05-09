import React from 'react'
import {
  Typography,
  Box,
  List,
  Divider
} from '@mui/material'
import { Select } from 'antd';
import FavoriListe from '../../components/FavoriListe'
function Favorilerim() {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Typography variant='h5' sx={{ fontWeight: 'bold', display: "flex", justifyContent: "flex-start" }}>Favorilerim</Typography>
      <Box sx={{
        display: 'flex',
        justifyContent: 'flex-end',

      }}>
        <Select
          suffixIcon={<div style={{ color: '#dc3545' }}>☲</div>}
          style={{ width: 150, backgroundColor: '#D3D3D3', borderRadius: '6px' }}
          onChange={handleChange}
          bordered={false}
          className="custom-select"
          defaultValue="Filtrele"
          options={[
            {
              label: 'Tümü',
              value: 'tumu'
            },
            {
              label: 'Kategori',
              options: [
                {
                  label: 'Pizza',
                  value: 'pizza'
                },
                {
                  label: 'Tatlı',
                  value: 'tatli'
                },
                {
                  label: 'Sos',
                  value: 'sos'
                },
                {
                  label: 'İçecek',
                  value: 'icecek'
                },
                {
                  label: 'Başlangıç',
                  value: 'baslangic'
                },
              ],
            }
          ]}

        />
      </Box>
      <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
        <List sx={{ maxWidth: "100%" }}>
          <Divider />
          <FavoriListe urun={"Çiftlik Evi (Büyük)"} ozellikler={"Pizza sosu, mozzarella peyniri, salam, mantar"} fiyat={"149.90 TL"} link={"https://raw.githubusercontent.com/SDU-Bilgisayar-Muhendisligi/PieCentralPizza/zehra/photos/urunler/pizzalar/ciftlik-evi.jpg"} />
          <Divider />
          <Divider />
          <FavoriListe urun={"Sucuk Mısır (Büyük)"} ozellikler={"Pizza sosu, mozzarella peyniri, sucuk, mısır"} fiyat={"149.90 TL"} link={"https://raw.githubusercontent.com/SDU-Bilgisayar-Muhendisligi/PieCentralPizza/zehra/photos/urunler/pizzalar/sucuk-misir.jpg"} />
          <Divider />
          <Divider />
          <FavoriListe urun={"Çokomania"} ozellikler={"Bitter ve beyaz çikolatalı"} fiyat={"19.90 TL"} link={"https://raw.githubusercontent.com/SDU-Bilgisayar-Muhendisligi/PieCentralPizza/zehra/photos/urunler/yanUrunler/cokomania.jpg"} />
          <Divider />
          <Divider />
          <FavoriListe urun={"Sufle"} ozellikler={"Eriyen Çikolata ve yumuşak kek"} fiyat={"34.90 TL"} link={"https://raw.githubusercontent.com/SDU-Bilgisayar-Muhendisligi/PieCentralPizza/zehra/photos/urunler/yanUrunler/sufle.jpg"} />
          <Divider />
          <Divider />
          <FavoriListe urun={"Lezzet 3'lüsü (Büyük)"} ozellikler={"Pizza sosu, mozzarella peyniri, sosis, mısır, mantar"} fiyat={"149.90 TL"} link={"https://raw.githubusercontent.com/SDU-Bilgisayar-Muhendisligi/PieCentralPizza/zehra/photos/urunler/pizzalar/lezzet-3lusu.jpg"} />
          <Divider />
        </List>
      </Box>
    </Box>
  )
}

export default Favorilerim