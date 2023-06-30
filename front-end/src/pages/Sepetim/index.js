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
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { kullaniciAdresGetir } from '../../api/KullaniciApi/api';
import { kullaniciSiparisEkle } from '../../api/SiparisApi/api';
import { useQuery } from 'react-query';
import Uyari from '../../components/Uyari';
import Basarili from '../../components/Basarili';
function Sepetim({ link }) {
  const { user, sepet, SepettenSil, SepetSifirla } = useAuth();
  const [adresim, setAdresim] = useState('');
  const [hata, setHata] = useState(false);
  const [siparisVerildi, setSiparisVerildi] = useState(false);
  const { isLoading, error, data } = useQuery(['sepetAdresiGetir', user._id], () => kullaniciAdresGetir(user._id));
  if (isLoading) {
    return <div> Loading...
    </div>
  }

  if (error) {
    return <div>{error.message}</div>
  }
  var total = 0;
  link = "pizzalar"


  const handleChange = (event) => {
    setAdresim(event.target.value);
  };
  const siparisVer = () => {
    if(adresim !== '' && sepet.length > 0) {
      const input = {
        siparisAdres: adresim,
      };
      sepet.map(async (item) => {
        try {
          await kullaniciSiparisEkle(user._id, item.urunId, input);
        } catch (error) {
          console.log(error);
        }
      })
      SepetSifirla();
      setSiparisVerildi(true);
    }else{
      setHata(true);
      setSiparisVerildi(false);
    }
  }
  return (
    <Container maxWidth="lg" sx={{ mt: 15, mb: 15 }}>
      {hata && <Uyari mesaj={sepet.length>0 ? "Lütfen Adres Seçiniz":"Sepetiniz boş"} />}

      {siparisVerildi && <Basarili mesaj="Siparişiniz başarıyla verildi." />}
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
          {data.data.map((item,index) => {
            const dizi = item.adres.split(", ");
            const adresIsmi = dizi[0];
            const adres = dizi[1] + ", " + dizi[2] + ", " + dizi[3]+ ", " + dizi[4];
            
            return(
            
            <MenuItem key={index} value={item._id}>{adresIsmi} : {adres}</MenuItem>
          )})}
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
        onClick={siparisVer}
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
