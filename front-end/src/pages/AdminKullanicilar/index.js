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
import AdminKullaniciListe from '../../components/AdminKullaniciListe'
import  List from '@mui/material/List'
import TuneIcon from '@mui/icons-material/Tune';
import { Select } from 'antd';

const kullanicilar=[
  {
    id:1,
    email:'zehracakir@email.com',
    kayitTarihi:'5 May, 18:05',
    telefonNo:'05558741212',
    kullaniciAdi:'zehracakir',
    adres:'Sdü Batı Kampüsü, Mühendislik Fakültesi Bilgisayar mühendisliği bölümü'
  },
  {
    id:2,
    email:'yusufdd@gmail.com',
    kayitTarihi:'15 May, 18:05',
    telefonNo:'05558741212',
    kullaniciAdi:'yusufdd',
    adres:'Sdü Batı Kampüsü, Mühendislik Fakültesi Bilgisayar mühendisliği bölümü'
  },
  {
    id:3,
    email:'zehra_cakir@hotmail.com',
    kayitTarihi:'23 April, 19:00',
    telefonNo:'05558741212',
    kullaniciAdi:'zehra_cakir',
    adres:'Sdü Batı Kampüsü, Mühendislik Fakültesi Bilgisayar mühendisliği bölümü'
  }
]
const handleChange = (value) => {
  console.log(`selected ${value}`);
};
function AdminKullanicilar() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
    
 
   <Typography variant='h5'  sx={{ fontWeight: 'bold' }}>Kullanıcılar</Typography>
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
        label: 'Kayıt Olma Tarihi',
        options: [
          {
            label: 'En Yeni',
            value:'enYeni'
          },
          {
            label: 'En Eski',
            value:'enEski'
          },
          
        ],
      },
      {
        label: 'Kullanıcı Adına Göre',
        options: [
          {
            label: 'Büyükten Küçüğe',
            value:'büyüktenKücüge'
          },
          {
            label: 'Küçükten Büyüğe',
            value:'kücüktenBüyüge'
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
           <TableCell sx={{color:'white',fontWeight:'bold'}}>Kullanıcı Profili</TableCell>
           <TableCell sx={{color:'white',fontWeight:'bold'}}>Kullanıcı Adı</TableCell>
           <TableCell sx={{color:'white',fontWeight:'bold'}}>Kayıt Tarihi</TableCell>
           <TableCell sx={{color:'white',fontWeight:'bold'}}>Kullanıcı Sil</TableCell>
         
         </TableRow>
       </TableHead>
       <TableBody>
       {kullanicilar.map((item) => (
            <AdminKullaniciListe  id={item.id} email={item.email} kullaniciAdi={item.kullaniciAdi} kayitTarihi={item.kayitTarihi} telefonNo={item.telefonNo} adres={item.adres}/>
          ))}
          
       </TableBody>
     </Table>
   </TableContainer>
   
      </List>
      
    </Box>
    
  </Box>
    
  )
}

export default AdminKullanicilar

