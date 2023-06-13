import { Container, Typography } from '@mui/material'
import React from 'react'
import CardList from './CardList';
import Grid from '@mui/material/Grid';

function SipariseBasla() {
  const cards = [
    {
      baslik: 'Pizzalar',
      resimUrl: 'https://raw.githubusercontent.com/SDU-Bilgisayar-Muhendisligi/PieCentralPizza/zehra/photos/anasayfa/sipariseBasla/pizzalarSipariseBasla.png',
      link: '/pizzalar'
    },
    {
      baslik: 'Yan Ürünler',
      resimUrl: 'https://raw.githubusercontent.com/SDU-Bilgisayar-Muhendisligi/PieCentralPizza/zehra/photos/anasayfa/sipariseBasla/yanUrunlerSipariseBasla.png',
      link: '/yan-urunler'
    },
    {
      baslik: 'Tatlılar',
      resimUrl: 'https://raw.githubusercontent.com/SDU-Bilgisayar-Muhendisligi/PieCentralPizza/zehra/photos/anasayfa/sipariseBasla/tatlilarSipariseBasla.png',
      link: '/yan-urunler#tatlilar'
    },
    {
      baslik: 'Soslar',
      resimUrl: 'https://raw.githubusercontent.com/SDU-Bilgisayar-Muhendisligi/PieCentralPizza/zehra/photos/anasayfa/sipariseBasla/soslarSipariseBasla.jpg',
      link: '/yan-urunler#soslar'
    },
    {
      baslik: 'İçecekler',
      resimUrl: 'https://raw.githubusercontent.com/SDU-Bilgisayar-Muhendisligi/PieCentralPizza/zehra/photos/anasayfa/sipariseBasla/iceceklerSipariseBasla.png',
      link: '/yan-urunler#icecekler'
    },
    {
      baslik: 'Başlangıçlar',
      resimUrl: 'https://raw.githubusercontent.com/SDU-Bilgisayar-Muhendisligi/PieCentralPizza/zehra/photos/anasayfa/sipariseBasla/baslangiclarSipariseBasla.jpg',
      link: '/yan-urunler#baslangiclar'
    },

  ];
  return (
    <Container sx={{ mt: 5 }} maxWidth={'lg'}>
      <Typography sx={{ fontWeight: "bold", fontSize: '20px' }}>Siparişe Başla</Typography>
      <Grid container spacing={2}>
        {cards.map((item,index) => (
          <CardList resimUrl={item.resimUrl} baslik={item.baslik} link={item.link} key={index}/>
        ))}
      </Grid>


    </Container>
  )
}

export default SipariseBasla
