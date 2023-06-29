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
import { adminTumUrunleriGetir } from '../../api/UrunApi/api';
import { useQuery } from 'react-query';
function AdminUrunler() {
  const {isLoading,error,data}=useQuery(["urunler"],()=>adminTumUrunleriGetir());
  if(isLoading){
  return "Loading..."
  } 

if(error) return "Error! "+ error.message;

  const urunler = data;
  // console.log(urunler);
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
                  <AdminUrunListe urunid={item._id} urunAdi={item.urunAdi} urunOzellikler={item.urunOzellikler} urunFiyat={item.urunFiyat} resimUrl={item.resimUrl} urunDetay={item.urunDetay} stok={item.stok} kategori={item.kategori}/>
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