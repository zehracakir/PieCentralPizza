import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import {Container } from '@mui/material';
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
      description: "Eşsiz çikolata tadı",
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
  const baslangiclar = [
    {
      imageUrl: "https://cdn.discordapp.com/attachments/1101863159070998649/1104024288857690272/image.png",
      name: "Sarımsaklı Ekmek (2 Dilim)",
      description: "",
      price: "25.90 TL"
    },
    {
      imageUrl: "https://cdn.discordapp.com/attachments/1101863159070998649/1104024390284345475/image.png",
      name: "Sucuklu Mozzarellalı Sarımsaklı Ekmek (4 Dilim)",
      description: "",
      price: "49.90 TL"
    },
    {
      imageUrl: "https://cdn.discordapp.com/attachments/1101863159070998649/1104024444155990076/image.png",
      name: "Sarımsaklı Ekmek (4 Dilim)",
      description: "",
      price: "39.90 TL"
    },
  ];
  const location = useLocation();

  useEffect(() => {
    let timeoutId;
    const handleScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        const tatlilar = document.getElementById("tatlilar");
        const soslar = document.getElementById("soslar");
        const icecekler = document.getElementById("icecekler");
        const baslangiclar = document.getElementById("baslangiclar");

        if (tatlilar && soslar && icecekler && baslangiclar) {
          const top1 = tatlilar.offsetTop;
          const top2 = soslar.offsetTop;
          const top3 = icecekler.offsetTop;
          const top4 = baslangiclar.offsetTop;

          if (window.scrollY < top2 - window.innerHeight / 2) {
            window.history.replaceState(null, "", "#tatlilar");
          } else if (window.scrollY < top3 - window.innerHeight / 2) {
            window.history.replaceState(null, "", "#soslar");
          } else if (window.scrollY < top4 - window.innerHeight / 2) {
            window.history.replaceState(null, "", "#icecekler");
          } else {
            window.history.replaceState(null, "", "#baslangiclar");
          }
        }
      }, 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <div>
      <Container maxWidth="lg" sx={{ mt: 15 }}>
        <section id='tatlilar'>

          <Typography sx={{ fontWeight: 'bold', fontSize: "22px", mt: 3 }}>
            Tatlılar
          </Typography>
          <Grid container spacing={2} sx={{ mt: 1, mb: 5, top: -80 }}>

            {tatlilar.map((item) => (
              <CardComponent imageUrl={item.imageUrl} name={item.name} description={item.description} price={item.price} link={"yan-urunler/tatlilar"} />
            ))}
          </Grid>

        </section>
        <section id='soslar'>
          <Typography sx={{ fontWeight: 'bold', fontSize: "22px" }}>
            Soslar
          </Typography>
          <Grid container spacing={2} sx={{ mt: 1, mb: 5 }}>

            {soslar.map((item) => (
              <CardComponent imageUrl={item.imageUrl} name={item.name} description={item.description} price={item.price} link={"yan-urunler/soslar"} />
            ))}
          </Grid>
        </section>
        <section id='icecekler'>
          <Typography sx={{ fontWeight: 'bold', fontSize: "22px" }}>
            İçecekler
          </Typography>
          <Grid container spacing={2} sx={{ mt: 1, mb: 5 }}>

            {icecekler.map((item) => (
              <CardComponent imageUrl={item.imageUrl} name={item.name} description={item.description} price={item.price} link={"yan-urunler/icecekler"} />
            ))}
          </Grid>
        </section>
        <section id='baslangiclar'>
          <Typography sx={{ fontWeight: 'bold', fontSize: "22px" }}>
            Başlangıçlar
          </Typography>
          <Grid container spacing={2} sx={{ mt: 1, mb: 10 }}>

            {baslangiclar.map((item) => (
              <CardComponent imageUrl={item.imageUrl} name={item.name} description={item.description} price={item.price} link={"yan-urunler/baslangiclar"} />
            ))}
          </Grid>
        </section>
      </Container>

    </div>

  );
}
export default YanUrunler