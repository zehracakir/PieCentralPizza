import * as React from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import AdminSiparisListe from '../../components/AdminSiparisListe'
import  List from '@mui/material/List'
import { Select } from 'antd';

const siparisler=[
  {
    id:1,
    urunAdi:'Festival (Büyük)',
    siparisTarihi:'5 May, 18:05',
    siparisDurum: 'Hazırlanıyor',
    resimUrl:'https://raw.githubusercontent.com/SDU-Bilgisayar-Muhendisligi/PieCentralPizza/zehra/photos/urunler/pizzalar/festival.jpg',
    siparisEden:'zehracakir',
    siparisAdres:'Sdü Batı Kampüsü, Mühendislik Fakültesi Bilgisayar mühendisliği bölümü'
  },
  {
    id:2,
    urunAdi:'Çiftlik Evi',
    siparisTarihi:'1 May, 17:04',
    siparisDurum: 'Yolda',
    resimUrl:'https://raw.githubusercontent.com/SDU-Bilgisayar-Muhendisligi/PieCentralPizza/zehra/photos/urunler/pizzalar/ciftlik-evi.jpg',
    siparisEden:'yusufdd',
    siparisAdres:'Sdü Batı Kampüsü, Mühendislik Fakültesi Bilgisayar mühendisliği bölümü'
  },
  {
    id:3,
    urunAdi:'Margarita',
    siparisTarihi:'23 April, 19:00',
    siparisDurum:'Teslim edildi',
    resimUrl:'https://raw.githubusercontent.com/SDU-Bilgisayar-Muhendisligi/PieCentralPizza/zehra/photos/urunler/pizzalar/margarita.jpg',
    siparisEden:'zehra_cakir',
    siparisAdres:'Sdü Batı Kampüsü, Mühendislik Fakültesi Bilgisayar mühendisliği bölümü'
  },
  {
    id:3,
    urunAdi:'Margarita',
    siparisTarihi:'23 April, 19:00',
    siparisDurum:'Hazırlanıyor',
    resimUrl:'https://raw.githubusercontent.com/SDU-Bilgisayar-Muhendisligi/PieCentralPizza/zehra/photos/urunler/pizzalar/margarita.jpg',
    siparisEden:'ali_veli',
    siparisAdres:'Sdü Batı Kampüsü, Mühendislik Fakültesi Bilgisayar mühendisliği bölümü'
  },
]
const handleChange = (value) => {
  console.log(`selected ${value}`);
};
function AdminSiparisler() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
    
 
   <Typography variant='h5'  sx={{ fontWeight: 'bold' }}>Siparişler</Typography>
   <Box  sx={{
      display:'flex',
      justifyContent:'flex-end',
      
    }}>
      <Select
        suffixIcon={<div style={{ color: '#dc3545' }}>☲</div>}
        style={{width:150 ,backgroundColor:'#D3D3D3', borderRadius:'6px'}}
        onChange={handleChange}
        bordered={false}
        className="custom-select"
      
    defaultValue="Filtrele"
  

    options={[
      {
        label:'Tümü',
        value:'tumu'
      },
      {
        label: 'Sipariş Durumu',
        options: [
          {
            label: 'Teslim edildi',
            value:'teslimEdildi'
          },
          {
            label: 'Hazırlanıyor',
            value:'hazirlaniyor'
          },
          {
            label: 'Yolda',
            value:'yolda'
          },
        ],
      },
      {
        label: 'Tarih',
        options: [
          {
            label: 'Son 1 gün',
            value:'sonBirGun'
          },
          {
            label: 'Son 1 hafta',
            value:'sonBirHafta'
          },
          {
            label: 'Son 1 ay',
            value:'sonBirAy'
          },
        ],
      },
    ]}
   
  />
   </Box>
    
     
   
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <List sx={{ maxWidth: "100%" }}>
      <TableContainer component={Paper} >
     <Table aria-label="collapsible table" sx={{ overflowX: 'auto',
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
    }}}>
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
            <AdminSiparisListe  id={item.id} urunAdi={item.urunAdi} siparisTarihi={item.siparisTarihi} siparisDurum={item.siparisDurum} resimUrl={item.resimUrl} siparisEden={item.siparisEden} siparisAdres={item.siparisAdres}/>
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
