import { Container } from '@mui/material'
import React from 'react'
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
  Avatar,Button
} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import { Popconfirm } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import UrunAdeti from '../../components/UrunDetayComponent/UrunDetaySagKisim/UrunAdeti';
import { Link } from 'react-router-dom';



function Sepetim({ link }) {
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

  const urunler = [
    {
      resimUrl: "https://raw.githubusercontent.com/SDU-Bilgisayar-Muhendisligi/PieCentralPizza/zehra/photos/urunler/pizzalar/ciftlik-evi.jpg",
      urunAdi: "Çiftlik Evi (Büyük)",
      urunDetay: "Bol Malzemeli",
      urunOzellikler: "Pizza sosu, mozzarella peyniri, salam, mantar",
      urunFiyat: "149.90"
    },
    {
      resimUrl: "https://raw.githubusercontent.com/SDU-Bilgisayar-Muhendisligi/PieCentralPizza/zehra/photos/urunler/pizzalar/festival.jpg",
      urunAdi: "Festival (Büyük)",
      urunDetay: "Bol Malzemeli",
      urunOzellikler: "Pizza sosu, mozzarella peyniri, domates, yeşilbiber, sosis, kekik",
      urunFiyat: "149.90"
    },
    {
      resimUrl: "https://raw.githubusercontent.com/SDU-Bilgisayar-Muhendisligi/PieCentralPizza/zehra/photos/urunler/pizzalar/sebzesever.jpg",
      urunAdi: "Sebzesever (Büyük)",
      urunDetay: "Bol Malzemeli",
      urunOzellikler: "Pizza sosu, mozzarella peyniri, mantar, yeşilbiber, soğan, domates, mısır",
      urunFiyat: "149.90"
    },
    {
      resimUrl: "https://raw.githubusercontent.com/SDU-Bilgisayar-Muhendisligi/PieCentralPizza/zehra/photos/urunler/pizzalar/sucuk-misir.jpg",
      urunAdi: "Sucuk Mısır (Büyük)",
      urunDetay: "Bol Malzemeli",
      urunOzellikler: "Pizza sosu, mozzarella peyniri, sucuk, mısır",
      urunFiyat: "149.90"
    },
    {
      resimUrl: "https://raw.githubusercontent.com/SDU-Bilgisayar-Muhendisligi/PieCentralPizza/zehra/photos/urunler/pizzalar/lezzet-3lusu.jpg",
      urunAdi: "Lezzet 3'lüsü (Büyük)",
      urunDetay: "Bol Malzemeli",
      urunOzellikler: "Pizza sosu, mozzarella peyniri, sosis, mısır, mantar",
      urunFiyat: "149.90"
    },
    {
      resimUrl: "https://raw.githubusercontent.com/SDU-Bilgisayar-Muhendisligi/PieCentralPizza/zehra/photos/urunler/pizzalar/margarita.jpg",
      urunAdi: "Margarita",
      urunDetay: "Bol Malzemeli",
      urunOzellikler: "Pizza sosu, mozzarella peyniri",
      urunFiyat: "149.90"
    }
  ];

  //toplama islemi yapar array de reduce()
  const total = urunler.reduce((acc, obj) => acc + parseFloat(obj.urunFiyat), 0);

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
        urunler.map((item) => (
          <ListItem disablePadding sx={{ maxWidth: "100%" }}>
            <ListItemAvatar>
              <Avatar sx={{ marginRight: '8px', width: 70, height: 50 }} alt="Remy Sharp" src={item.resimUrl} />
            </ListItemAvatar>

            <ListItemText primary={
              <Link to={`/${link}/urun-detay`} style={{ textDecoration: 'none', color: 'black' }}>
                <Typography sx={{ fontWeight: "bold", fontFamily: "Sansserif" }}>{item.urunAdi}</Typography>
              </Link>
            } secondary={<Typography variant='p' sx={{ color: "#757575" }}>{item.urunOzellikler}</Typography>} />
             {item.urunFiyat} TL
            <UrunAdeti></UrunAdeti>
            <Popconfirm
              placement='right'
              title="Sepetten Ürün Sil"
              description="Ürünü Sepetten Silmek İstiyor Musunuz ?"
              onConfirm={() => console.log("Ürün sepetten silindi")}
              okText="Evet"
              cancelText="Hayır"
              icon={<DeleteOutlined style={{ color: '#dc3545' }} />}
            >
              <IconButton edge="end" aria-label="comments">
                <DeleteIcon />
              </IconButton>
            </Popconfirm>

          </ListItem>
        ))
      }

      <Box sx={{mt:3}} >
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
    mt:3
  }}
>
  Siparişi Onayla
</Button>

    </Container>
  );
}

export default Sepetim
