import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import CardComponent from "../../../components/CardComponent"

function Pizzalar() {

  const pizzalar = [
    {
      resimUrl: "https://raw.githubusercontent.com/SDU-Bilgisayar-Muhendisligi/PieCentralPizza/zehra/photos/urunler/pizzalar/ciftlik-evi.jpg",
      urunAdi: "Çiftlik Evi (Büyük)",
      urunDetay: "Bol Malzemeli",
      urunOzellikler: "Pizza sosu, mozzarella peyniri, salam, mantar",
      urunFiyat: "149.90 TL"
    },
    {
      resimUrl: "https://raw.githubusercontent.com/SDU-Bilgisayar-Muhendisligi/PieCentralPizza/zehra/photos/urunler/pizzalar/festival.jpg",
      urunAdi: "Festival (Büyük)",
      urunDetay: "Bol Malzemeli",
      urunOzellikler: "Pizza sosu, mozzarella peyniri, domates, yeşilbiber, sosis, kekik",
      urunFiyat: "149.90 TL"
    },
    {
      resimUrl: "https://raw.githubusercontent.com/SDU-Bilgisayar-Muhendisligi/PieCentralPizza/zehra/photos/urunler/pizzalar/sebzesever.jpg",
      urunAdi: "Sebzesever (Büyük)",
      urunDetay: "Bol Malzemeli",
      urunOzellikler: "Pizza sosu, mozzarella peyniri, mantar, yeşilbiber, soğan, domates, mısır",
      urunFiyat: "149.90 TL"
    },
    {
      resimUrl: "https://raw.githubusercontent.com/SDU-Bilgisayar-Muhendisligi/PieCentralPizza/zehra/photos/urunler/pizzalar/sucuk-misir.jpg",
      urunAdi: "Sucuk Mısır (Büyük)",
      urunDetay: "Bol Malzemeli",
      urunOzellikler: "Pizza sosu, mozzarella peyniri, sucuk, mısır",
      urunFiyat: "149.90 TL"
    },
    {
      resimUrl: "https://raw.githubusercontent.com/SDU-Bilgisayar-Muhendisligi/PieCentralPizza/zehra/photos/urunler/pizzalar/lezzet-3lusu.jpg",
      urunAdi: "Lezzet 3'lüsü (Büyük)",
      urunDetay: "Bol Malzemeli",
      urunOzellikler: "Pizza sosu, mozzarella peyniri, sosis, mısır, mantar",
      urunFiyat: "149.90 TL"
    },
    {
      resimUrl: "https://raw.githubusercontent.com/SDU-Bilgisayar-Muhendisligi/PieCentralPizza/zehra/photos/urunler/pizzalar/margarita.jpg",
      urunAdi: "Margarita",
      urunDetay: "Bol Malzemeli",
      urunOzellikler: "Pizza sosu, mozzarella peyniri",
      urunFiyat: "149.90 TL"
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
              <CardComponent resimUrl={item.resimUrl} urunAdi={item.urunAdi} urunDetay={item.urunDetay} urunOzellikler={item.urunOzellikler} urunFiyat={item.urunFiyat} link={"pizzalar"} />
            ))}
          </Grid>
        </section>
      </Container>

    </div>

  );
}
export default Pizzalar