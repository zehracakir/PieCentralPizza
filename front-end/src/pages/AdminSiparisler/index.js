import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import AdminSiparisListe from '../../components/AdminSiparisListe'
import  List from '@mui/material/List'
const siparisler=[
  {
    id:1,
    urun:'Festival (Büyük)',
    tarih:'5 May, 18:05',
    durum: 'Siparis hazırlanıyor',
    resimUrl:'https://raw.githubusercontent.com/SDU-Bilgisayar-Muhendisligi/PieCentralPizza/zehra/photos/urunler/pizzalar/festival.jpg',
    kullanici:'zehracakir',
    adres:'Sdü Batı Kampüsü, Mühendislik Fakültesi Bilgisayar mühendisliği bölümü'
  },
  {
    id:2,
    urun:'Çiftlik Evi',
    tarih:'1 May, 17:04',
    durum: 'Siparis yolda',
    resimUrl:'https://raw.githubusercontent.com/SDU-Bilgisayar-Muhendisligi/PieCentralPizza/zehra/photos/urunler/pizzalar/ciftlik-evi.jpg',
    kullanici:'yusufdd',
    adres:'Sdü Batı Kampüsü, Mühendislik Fakültesi Bilgisayar mühendisliği bölümü'
  },
  {
    id:3,
    urun:'Margarita',
    tarih:'23 April, 19:00',
    durum:'Teslim edildi',
    resimUrl:'https://raw.githubusercontent.com/SDU-Bilgisayar-Muhendisligi/PieCentralPizza/zehra/photos/urunler/pizzalar/margarita.jpg',
    kullanici:'zehra_cakir',
    adres:'Sdü Batı Kampüsü, Mühendislik Fakültesi Bilgisayar mühendisliği bölümü'
  }
]
function AdminSiparisler() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
    <Typography variant='h5' mb={2} sx={{ fontWeight: 'bold' }}>Siparişler</Typography>
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <List sx={{ maxWidth: "100%" }}>
      <TableContainer component={Paper} >
     <Table aria-label="collapsible table" sx={{maxWidth:'100%'}}>
       <TableHead sx={{bgcolor:'#dc3545'}}>
         <TableRow >
           <TableCell />
           <TableCell sx={{color:'white',fontWeight:'bold'}}>Fotoğraf</TableCell>
           <TableCell sx={{color:'white',fontWeight:'bold'}}>Kullanıcı</TableCell>
           <TableCell sx={{color:'white',fontWeight:'bold'}}>Sipariş Durumu</TableCell>
           <TableCell sx={{color:'white',fontWeight:'bold'}}>Sipariş Sil</TableCell>
         
         </TableRow>
       </TableHead>
       <TableBody>
       {siparisler.map((item) => (
            <AdminSiparisListe  id={item.id} urun={item.urun} tarih={item.tarih} durum={item.durum} resimUrl={item.resimUrl} kullanici={item.kullanici} adres={item.adres}/>
          ))}
          
       </TableBody>
     </Table>
   </TableContainer>
      </List>
    </Box>
  </Box>
    
  )
}

export default AdminSiparisler
