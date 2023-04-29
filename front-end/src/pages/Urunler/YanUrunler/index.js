import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import CardComponent from "../../../components/CardComponent"
function YanUrunler() {
    const tatlilar = [
        {
          imageUrl: "https://raw.githubusercontent.com/SDU-Bilgisayar-Muhendisligi/PieCentralPizza/zehra/photos/urunler/yanUrunler/bombe.jpg",
          name: "Bombe",
          description: "",
          price: "14.90 TL"
        },
        {
          imageUrl: "https://raw.githubusercontent.com/SDU-Bilgisayar-Muhendisligi/PieCentralPizza/zehra/photos/urunler/yanUrunler/cokomania.jpg",
          name: "Çokomania",
          description: "Bitter ve beyaz çikolatalı",
          price: "19.90 TL"
        },
        {
          imageUrl: "https://raw.githubusercontent.com/SDU-Bilgisayar-Muhendisligi/PieCentralPizza/zehra/photos/urunler/yanUrunler/sufle.jpg",
          name: "Sufle",
          description: "Pizza sosu, mozzarella peyniri, mantar, yeşilbiber, soğan, domates, mısır",
          price: "34.90 TL"
        },
      ];
      const soslar = [
        {
          imageUrl: "https://raw.githubusercontent.com/SDU-Bilgisayar-Muhendisligi/PieCentralPizza/zehra/photos/urunler/yanUrunler/sweet-chili-sos.jpg",
          name: "Ketçap",
          description: "Acısız",
          price: "9.90 TL"
        },
        {
          imageUrl: "https://raw.githubusercontent.com/SDU-Bilgisayar-Muhendisligi/PieCentralPizza/zehra/photos/urunler/yanUrunler/sweet-chili-sos.jpg",
          name: "Ketçap",
          description: "Acılı",
          price: "9.90 TL"
        },
        {
          imageUrl: "https://raw.githubusercontent.com/SDU-Bilgisayar-Muhendisligi/PieCentralPizza/zehra/photos/urunler/yanUrunler/mayonez.jpg",
          name: "Mayonez",
          description: "",
          price: "9.90 TL"
        },
      ];
      const icecekler = [
        {
          imageUrl: "https://raw.githubusercontent.com/SDU-Bilgisayar-Muhendisligi/PieCentralPizza/zehra/photos/urunler/yanUrunler/pepsi-33-cl.jpg",
          name: "Pepsi",
          description: "330 ml",
          price: "15.90 TL"
        },
        {
          imageUrl: "https://raw.githubusercontent.com/SDU-Bilgisayar-Muhendisligi/PieCentralPizza/zehra/photos/urunler/yanUrunler/ice-tea-seftali.jpg",
          name: "Ice Tea Şeftali",
          description: "1 L",
          price: "29.90 TL"
        },
        {
          imageUrl: "https://raw.githubusercontent.com/SDU-Bilgisayar-Muhendisligi/PieCentralPizza/zehra/photos/urunler/yanUrunler/icim-ayran-kutu.png",
          name: "Ayran",
          description: "330 ml",
          price: "9.90 TL"
        },
      ];
    return (
        <div>
            <Container maxWidth="lg" sx={{mt:15}}>
                <Typography sx={{fontWeight:'bold',fontSize:"22px"}}>
                    Tatlılar
                </Typography>
                <Grid container spacing={2} sx={{mt:1,mb:10}}>
                  
                   {tatlilar.map((item) => (
        <CardComponent imageUrl={item.imageUrl} name={item.name} description={item.description} price={item.price}/>
      ))}
                </Grid>
                <Typography sx={{fontWeight:'bold',fontSize:"22px"}}>
                    Soslar
                </Typography>
                <Grid container spacing={2} sx={{mt:1,mb:10}}>
                  
                   {soslar.map((item) => (
        <CardComponent imageUrl={item.imageUrl} name={item.name} description={item.description} price={item.price}/>
      ))}
                </Grid>
                <Typography sx={{fontWeight:'bold',fontSize:"22px"}}>
                    İçecekler
                </Typography>
                <Grid container spacing={2} sx={{mt:1,mb:10}}>
                  
                   {icecekler.map((item) => (
        <CardComponent imageUrl={item.imageUrl} name={item.name} description={item.description} price={item.price}/>
      ))}
                </Grid>
            </Container>

        </div>

    );
}
export default YanUrunler