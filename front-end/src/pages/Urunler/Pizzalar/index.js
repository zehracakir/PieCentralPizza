import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import CardComponent from "../../../components/CardComponent"

function Pizzalar() {
  
  const pizzalar = [
    {
      imageUrl: "https://raw.githubusercontent.com/SDU-Bilgisayar-Muhendisligi/PieCentralPizza/zehra/photos/urunler/pizzalar/ciftlik-evi.jpg",
      name: "Çiftlik Evi (Büyük)",
      description: "Pizza sosu, mozzarella peyniri, salam, mantar",
      price: "149.90 TL"
    },
    {
      imageUrl: "https://raw.githubusercontent.com/SDU-Bilgisayar-Muhendisligi/PieCentralPizza/zehra/photos/urunler/pizzalar/festival.jpg",
      name: "Festival (Büyük)",
      description: "Pizza sosu, mozzarella peyniri, domates, yeşilbiber, sosis, kekik",
      price: "149.90 TL"
    },
    {
      imageUrl: "https://raw.githubusercontent.com/SDU-Bilgisayar-Muhendisligi/PieCentralPizza/zehra/photos/urunler/pizzalar/sebzesever.jpg",
      name: "Sebzesever (Büyük)",
      description: "Pizza sosu, mozzarella peyniri, mantar, yeşilbiber, soğan, domates, mısır",
      price: "149.90 TL"
    },
    {
      imageUrl: "https://raw.githubusercontent.com/SDU-Bilgisayar-Muhendisligi/PieCentralPizza/zehra/photos/urunler/pizzalar/sucuk-misir.jpg",
      name: "Sucuk Mısır (Büyük)",
      description: "Pizza sosu, mozzarella peyniri, sucuk, mısır",
      price: "149.90 TL"
    },
    {
      imageUrl: "https://raw.githubusercontent.com/SDU-Bilgisayar-Muhendisligi/PieCentralPizza/zehra/photos/urunler/pizzalar/lezzet-3lusu.jpg",
      name: "Lezzet 3'lüsü (Büyük)",
      description: "Pizza sosu, mozzarella peyniri, sosis, mısır, mantar",
      price: "149.90 TL"
    },
    {
      imageUrl: "https://raw.githubusercontent.com/SDU-Bilgisayar-Muhendisligi/PieCentralPizza/zehra/photos/urunler/pizzalar/margarita.jpg",
      name: "Margarita",
      description: "Pizza sosu, mozzarella peyniri",
      price: "149.90 TL"
    }
  ];
  return (
    <div>
      <Container maxWidth="lg" sx={{ mt: 15 }}>
        <section id='pizzalar'>
        <Typography sx={{ fontWeight: 'bold', fontSize: "22px" }}>
          Pizzalar
        </Typography>
        <Grid container spacing={2} sx={{ mt: 1, mb: 10 }}>

          {pizzalar.map((item) => (
            <CardComponent imageUrl={item.imageUrl} name={item.name} description={item.description} price={item.price} link={"pizzalar"} />
          ))}
        </Grid>
        </section>
      </Container>

    </div>

  );
}
export default Pizzalar