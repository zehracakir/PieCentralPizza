import { Container, Typography } from '@mui/material'
import React from 'react'
import CardList from './CardList';
import Grid from '@mui/material/Grid';

function SipariseBasla() {
  const cards = [
    {
      title: 'Pizzalar',
      imageURL: 'https://raw.githubusercontent.com/SDU-Bilgisayar-Muhendisligi/PieCentralPizza/zehra/photos/anasayfa/sipariseBasla/pizzalarSipariseBasla.png',
      link: '/pizzalar'
    },
    {
      title: 'Yan Ürünler',
      imageURL: 'https://raw.githubusercontent.com/SDU-Bilgisayar-Muhendisligi/PieCentralPizza/zehra/photos/anasayfa/sipariseBasla/yanUrunlerSipariseBasla.png',
      link: '/yan-urunler'
    },
    {
      title: 'Tatlılar',
      imageURL: 'https://raw.githubusercontent.com/SDU-Bilgisayar-Muhendisligi/PieCentralPizza/zehra/photos/anasayfa/sipariseBasla/tatlilarSipariseBasla.png',
      link: '/yan-urunler#tatlilar'
    },
    {
      title: 'Soslar',
      imageURL: 'https://raw.githubusercontent.com/SDU-Bilgisayar-Muhendisligi/PieCentralPizza/zehra/photos/anasayfa/sipariseBasla/soslarSipariseBasla.jpg',
      link: '/yan-urunler#soslar'
    },
    {
      title: 'İçecekler',
      imageURL: 'https://raw.githubusercontent.com/SDU-Bilgisayar-Muhendisligi/PieCentralPizza/zehra/photos/anasayfa/sipariseBasla/iceceklerSipariseBasla.png',
      link: '/yan-urunler#icecekler'
    },
    {
      title: 'Başlangıçlar',
      imageURL: 'https://raw.githubusercontent.com/SDU-Bilgisayar-Muhendisligi/PieCentralPizza/zehra/photos/anasayfa/sipariseBasla/baslangiclarSipariseBasla.jpg',
      link: '/yan-urunler#baslangiclar'
    },

  ];
  return (
    <Container sx={{ mt: 5 }} maxWidth={'lg'}>
      <Typography sx={{ fontWeight: "bold", fontSize: '20px' }}>Siparişe Başla</Typography>
      <Grid container spacing={2}>
        {cards.map((item) => (
          <CardList imageURL={item.imageURL} title={item.title} link={item.link} />
        ))}
      </Grid>


    </Container>
  )
}

export default SipariseBasla
