import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {
  Typography,
  Box,
  List,
} from '@mui/material'
import AdminUrunListe from '../../components/AdminUrunListe'
function AdminUrunler() {
  const urunler = [
    {
      resimUrl: "https://raw.githubusercontent.com/SDU-Bilgisayar-Muhendisligi/PieCentralPizza/zehra/photos/urunler/pizzalar/ciftlik-evi.jpg",
      urunAdi: "Çiftlik Evi (Büyük)",
      urunDetay: "Bol Malzemeli",
      urunOzellikler: "Pizza sosu, mozzarella peyniri, salam, mantar",
      urunFiyat: "149.90 TL"
    },
    {
      resimUrl: "https://raw.githubusercontent.com/SDU-Bilgisayar-Muhendisligi/PieCentralPizza/zehra/photos/urunler/pizzalar/festival.jpg",
      urunAdi: "Festival (Büyük)",
      urunDetay: "Bol Malzemeli",
      urunOzellikler: "Pizza sosu, mozzarella peyniri, domates, yeşilbiber, sosis, kekik",
      urunFiyat: "149.90 TL"
    },
    {
      resimUrl: "https://raw.githubusercontent.com/SDU-Bilgisayar-Muhendisligi/PieCentralPizza/zehra/photos/urunler/pizzalar/sebzesever.jpg",
      urunAdi: "Sebzesever (Büyük)",
      urunDetay: "Bol Malzemeli",
      urunOzellikler: "Pizza sosu, mozzarella peyniri, mantar, yeşilbiber, soğan, domates, mısır",
      urunFiyat: "149.90 TL"
    },
    {
      resimUrl: "https://raw.githubusercontent.com/SDU-Bilgisayar-Muhendisligi/PieCentralPizza/zehra/photos/urunler/pizzalar/sucuk-misir.jpg",
      urunAdi: "Sucuk Mısır (Büyük)",
      urunDetay: "Bol Malzemeli",
      urunOzellikler: "Pizza sosu, mozzarella peyniri, sucuk, mısır",
      urunFiyat: "149.90 TL"
    },
    {
      resimUrl: "https://raw.githubusercontent.com/SDU-Bilgisayar-Muhendisligi/PieCentralPizza/zehra/photos/urunler/pizzalar/lezzet-3lusu.jpg",
      urunAdi: "Lezzet 3'lüsü (Büyük)",
      urunDetay: "Bol Malzemeli",
      urunOzellikler: "Pizza sosu, mozzarella peyniri, sosis, mısır, mantar",
      urunFiyat: "149.90 TL"
    },
    {
      resimUrl: "https://raw.githubusercontent.com/SDU-Bilgisayar-Muhendisligi/PieCentralPizza/zehra/photos/urunler/pizzalar/margarita.jpg",
      urunAdi: "Margarita",
      urunDetay: "Bol Malzemeli",
      urunOzellikler: "Pizza sosu, mozzarella peyniri",
      urunFiyat: "149.90 TL"
    }
  ];
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Typography variant='h5' mb={2} sx={{ fontWeight: 'bold' }}>Ürünler</Typography>
      <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
        <List sx={{ maxWidth: "100%" }}>
          <TableContainer component={Paper} >
            <Table aria-label="collapsible table" sx={{
              overflowX: 'auto',
              maxWidth: '100%',
              '&::-webkit-scrollbar': {
                height: '0.4rem',
              },
              '&::-webkit-scrollbar-thumb': {
                backgroundColor: 'rgba(0,0,0,0.3)',
                borderRadius: '0.5rem',
              },
              '&::-webkit-scrollbar-track': {
                backgroundColor: 'transparent',
              }
            }}>
              <TableHead sx={{ bgcolor: '#dc3545' }}>
                <TableRow >
                  <TableCell />
                  <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Ürün Fotoğrafı</TableCell>
                  <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Ürün Adı</TableCell>
                  <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Ürünü Güncelle</TableCell>
                  <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Ürünü Sil</TableCell>

                </TableRow>
              </TableHead>
              <TableBody>
                {urunler.map((item) => (
                  <AdminUrunListe id={item.id} urunAdi={item.urunAdi} urunOzellikler={item.urunOzellikler} urunFiyat={item.urunFiyat} resimUrl={item.resimUrl} urunDetay={item.urunDetay} />
                ))}

              </TableBody>
            </Table>
          </TableContainer>

        </List>
      </Box>
    </Box>
  )
}

export default AdminUrunler