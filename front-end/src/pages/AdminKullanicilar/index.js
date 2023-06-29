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
import AdminKullaniciListe from '../../components/AdminKullaniciListe'
import List from '@mui/material/List'
import { Select } from 'antd';
import { adminTumKullanicilariGetir } from '../../api/KullaniciApi/api';
import { useQuery } from 'react-query';
const handleChange = (value) => {
  console.log(`selected ${value}`);
};
function AdminKullanicilar() {
  const {isLoading,error,data}=useQuery(["kullanicilar"],()=>adminTumKullanicilariGetir());
  if(isLoading){
  return "Loading..."
  } 

if(error) return "Error! "+ error.message;

  const kullanicilar = data.data;
  console.log(kullanicilar);
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>


      <Typography variant='h5' sx={{ fontWeight: 'bold' }}>Kullanıcılar</Typography>
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
              label: 'Kayıt Olma Tarihi',
              options: [
                {
                  label: 'En Yeni',
                  value: 'enYeni'
                },
                {
                  label: 'En Eski',
                  value: 'enEski'
                },

              ],
            },
            {
              label: 'Kullanıcı Adına Göre',
              options: [
                {
                  label: 'Büyükten Küçüğe',
                  value: 'büyüktenKücüge'
                },
                {
                  label: 'Küçükten Büyüğe',
                  value: 'kücüktenBüyüge'
                },
              ],
            },
          ]}

        />
      </Box>



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
                  <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Kullanıcı Profili</TableCell>
                  <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Kullanıcı Adı</TableCell>
                  <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Kayıt Tarihi</TableCell>
                  <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Kullanıcı Sil</TableCell>

                </TableRow>
              </TableHead>
              <TableBody>
                {kullanicilar.map((item) => (
                  <AdminKullaniciListe userid={item._id} email={item.email} kullaniciAdi={item.kullaniciAdi} kayitTarihi={item.kayitTarihi} telefonNo={item.telefonNo} adres={item.adres} />
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

