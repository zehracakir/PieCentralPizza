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
import { useQuery} from 'react-query';
import { adminTumSiparisleriGetir,adminDurumaGoreSiparisGetir,adminTariheGoreSiparisGetir } from '../../api/SiparisApi/api';
import { useState,useEffect } from 'react';
import Uyari from '../../components/Uyari'

function AdminSiparisler() {
  const { isLoading, error, data } = useQuery(["siparisler"], () => adminTumSiparisleriGetir());
  const [siparisler, setSiparisler] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  useEffect(() => {
    if (data) {
      setSiparisler(data.data);
    }
  }, [data]);
  const handleFilterChange = async (value) => {
    try {
      let filteredSiparisler;
      if (!value || value === 'tumu') {
        filteredSiparisler = await adminTumSiparisleriGetir();
      } else if (value === 'son-bir-gun' || value === 'son-bir-hafta' || value === 'son-bir-ay') {
        filteredSiparisler = await adminTariheGoreSiparisGetir(value);
      } else if (value === 'hazirlaniyor' || value === 'yolda' || value === 'teslim-edildi') {
        filteredSiparisler = await adminDurumaGoreSiparisGetir(value);
      }
      setSiparisler(filteredSiparisler.data);
      setFetchError(null); // Hata durumunda hatayı sıfırla
    } catch (error) {
      console.error(error);
      setFetchError(error.message); // Hata durumunda hatayı set et
    }
  };
  if (isLoading) {
    return "Loading...";
  }

  if (error) {
    return "Error! " + error.message;
  }
  if (isLoading) {
    return "Loading...";
  }

  if (error) {
    return "Error! " + error.message;
  }

  

  
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
        onChange={handleFilterChange}
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
            value:'teslim-edildi'
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
            value:'son-bir-gun'
          },
          {
            label: 'Son 1 hafta',
            value:'son-bir-hafta'
          },
          {
            label: 'Son 1 ay',
            value:'son-bir-ay'
          },
        ],
      },
    ]}
   
  />
   </Box>
    
     
   
    {fetchError ? <Uyari mesaj="Bu filtreye uygun sonuç yok"/> : <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
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
            <AdminSiparisListe  id={item._id} siparis={item.siparis} siparisId={item._id} siparisTarihi={item.siparisTarihi} siparisDurum={item.siparisDurum}  siparisEden={item.siparisEden} siparisAdres={item.siparisAdres} siparisEdenId={item.siparisEdenId}/>
          ))}
          
       </TableBody>
     </Table>
   </TableContainer>
   
      </List>
      
    </Box>
}
  </Box>
    
  )
}

export default AdminSiparisler
