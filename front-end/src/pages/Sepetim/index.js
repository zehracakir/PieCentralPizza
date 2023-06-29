import { Container } from '@mui/material'
import React, { useState } from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Typography from '@mui/material/Typography';
import {
  ListItem,
  ListItemText,
  IconButton,
  ListItemAvatar,
  Avatar, Button
} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import { Popconfirm } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import UrunAdeti from '../../components/UrunDetayComponent/UrunDetaySagKisim/UrunAdeti';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';


function Sepetim({ link }) {
  var total = 0;
  const { sepet, SepettenSil } = useAuth();
  link = "pizzalar"
  const [adresim, setAdresim] = React.useState('');

  const handleChange = (event) => {
    setAdresim(event.target.value);
  };

  const adreslerim = [
    {
      adresIsmi: 'İş Yeri',
      adres: "Yukarı dikmen mh, 664, Çankaya, Ankara"
    },
    {
      adresIsmi: 'Ev',
      adres: "Soğucak Mh, 2, Kuşadası, Aydın"
    },
    {
      adresIsmi: 'Okul',
      adres: "Çünür mh, SDU Mühendislik Fakültesi, Merkez, Isparta"
    },

  ];



  //toplama islemi yapar array de reduce()
  // const total = urunler.reduce((acc, obj) => acc + parseFloat(obj.urunFiyat), 0);

  return (
    <Container maxWidth="lg" sx={{ mt: 15, mb: 15 }}>
      <Typography variant='h5' sx={{ fontWeight: 'bold', display: "flex", justifyContent: "flex-start", mb: 3 }}>Sepetim</Typography>
      <FormControl fullWidth sx={{ mb: 3 }}>
        <InputLabel id="demo-simple-select-label">Adres</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={adresim}
          label="Adres"
          onChange={handleChange}
        >
          {adreslerim.map((item) => (
            <MenuItem value={item.adres}>{item.adresIsmi} : {item.adres}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <Typography variant='h5' sx={{ fontSize: '18px', display: "flex", justifyContent: "flex-start", mb: 3 }}>Ürünler</Typography>
      {
        sepet.map((item, index) => {
          total = total + item.urunFiyat;
          return (
            <ListItem key={index} disablePadding sx={{ maxWidth: "100%" }}>
              <ListItemAvatar>
                <Avatar sx={{ marginRight: '8px', width: 70, height: 50 }} alt="Remy Sharp" src={item.resimUrl} />
              </ListItemAvatar>

              <ListItemText primary={
                <Link to={`/${link}/urun-detay`} style={{ textDecoration: 'none', color: 'black' }}>
                  <Typography sx={{ fontWeight: "bold", fontFamily: "Sansserif" }}>{item.urunAdi}</Typography>
                </Link>
              } secondary={<Typography variant='p' sx={{ color: "#757575" }}>{item.urunOzellikler.join(", ")}</Typography>} />
              {item.urunFiyat} TL
              <Popconfirm
                placement='right'
                title="Sepetten Ürün Sil"
                description="Ürünü Sepetten Silmek İstiyor Musunuz ?"
                onConfirm={() => SepettenSil(item)}
                okText="Evet"
                cancelText="Hayır"
                icon={<DeleteOutlined style={{ color: '#dc3545' }} />}
              >
                <IconButton edge="end" aria-label="comments">
                  <DeleteIcon />
                </IconButton>
              </Popconfirm>

            </ListItem>
          )
        })
      }

      <Box sx={{ mt: 3 }} >
        <Typography fontSize={18} color='error'>Toplam Fiyat : {total} TL</Typography>
      </Box>
      <Button
        variant="contained"
        color="error"
        sx={{
          textTransform: 'none',
          width: '50',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          margin: '0 auto',
          mt: 3
        }}
      >
        Siparişi Onayla
      </Button>

    </Container>
  );
}

export default Sepetim
