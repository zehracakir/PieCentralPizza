import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import {Container } from '@mui/material';
import CardComponent from "../../../components/CardComponent"

function YanUrunler() {

  const tatlilar = [
    {
      resimUrl: "https://raw.githubusercontent.com/SDU-Bilgisayar-Muhendisligi/PieCentralPizza/zehra/photos/urunler/yanUrunler/bombe.jpg",
      urunAdi: "Bombe",
      urunDetay:"Efsane Belçika Çikolatası",
      urunOzellikler: "",
      urunFiyat: "14.90 TL"
    },
    {
      resimUrl: "https://raw.githubusercontent.com/SDU-Bilgisayar-Muhendisligi/PieCentralPizza/zehra/photos/urunler/yanUrunler/cokomania.jpg",
      urunAdi: "Çokomania",
      urunDetay:"Efsane Belçika Çikolatası",
      urunOzellikler: "Bitter ve beyaz çikolatalı",
      urunFiyat: "19.90 TL"
    },
    {
      resimUrl: "https://raw.githubusercontent.com/SDU-Bilgisayar-Muhendisligi/PieCentralPizza/zehra/photos/urunler/yanUrunler/sufle.jpg",
      urunAdi: "Sufle",
      urunDetay:"Efsane Belçika Çikolatası",
      urunOzellikler: "Eşsiz çikolata tadı",
      urunFiyat: "34.90 TL"
    },
  ];
  const soslar = [
    {
      resimUrl: "https://raw.githubusercontent.com/SDU-Bilgisayar-Muhendisligi/PieCentralPizza/zehra/photos/urunler/yanUrunler/sweet-chili-sos.jpg",
      urunAdi: "Ketçap",
      urunDetay:"Efsane Soslar",
      urunOzellikler: "Acısız",
      urunFiyat: "9.90 TL"
    },
    {
      resimUrl: "https://raw.githubusercontent.com/SDU-Bilgisayar-Muhendisligi/PieCentralPizza/zehra/photos/urunler/yanUrunler/sweet-chili-sos.jpg",
      urunAdi: "Ketçap",
      urunDetay:"Efsane Soslar",
      urunOzellikler: "Acılı",
      urunFiyat: "9.90 TL"
    },
    {
      resimUrl: "https://raw.githubusercontent.com/SDU-Bilgisayar-Muhendisligi/PieCentralPizza/zehra/photos/urunler/yanUrunler/mayonez.jpg",
      urunAdi: "Mayonez",
      urunDetay:"Efsane Soslar",
      urunOzellikler: "",
      urunFiyat: "9.90 TL"
    },
  ];
  const icecekler = [
    {
      resimUrl: "https://raw.githubusercontent.com/SDU-Bilgisayar-Muhendisligi/PieCentralPizza/zehra/photos/urunler/yanUrunler/pepsi-33-cl.jpg",
      urunAdi: "Pepsi",
      urunDetay:"Yanında İyi Gider",
      urunOzellikler: "330 ml",
      urunFiyat: "15.90 TL"
    },
    {
      resimUrl: "https://raw.githubusercontent.com/SDU-Bilgisayar-Muhendisligi/PieCentralPizza/zehra/photos/urunler/yanUrunler/ice-tea-seftali.jpg",
      urunAdi: "Ice Tea Şeftali",
      urunDetay:"Yanında İyi Gider",
      urunOzellikler: "1 L",
      urunFiyat: "29.90 TL"
    },
    {
      resimUrl: "https://raw.githubusercontent.com/SDU-Bilgisayar-Muhendisligi/PieCentralPizza/zehra/photos/urunler/yanUrunler/icim-ayran-kutu.png",
      urunAdi: "Ayran",
      urunDetay:"Yanında İyi Gider",
      urunOzellikler: "330 ml",
      urunFiyat: "9.90 TL"
    },
  ];
  const baslangiclar = [
    {
      resimUrl: "https://cdn.discordapp.com/attachments/1101863159070998649/1104024288857690272/image.png",
      urunAdi: "Sarımsaklı Ekmek (2 Dilim)",
      urunDetay:"Pizzadan önce iyi gider",
      urunOzellikler: "",
      urunFiyat: "25.90 TL"
    },
    {
      resimUrl: "https://cdn.discordapp.com/attachments/1101863159070998649/1104024390284345475/image.png",
      urunAdi: "Sucuklu Mozzarellalı Sarımsaklı Ekmek (4 Dilim)",
      urunDetay:"Pizzadan önce iyi gider",
      urunOzellikler: "",
      urunFiyat: "49.90 TL"
    },
    {
      resimUrl: "https://cdn.discordapp.com/attachments/1101863159070998649/1104024444155990076/image.png",
      urunAdi: "Sarımsaklı Ekmek (4 Dilim)",
      urunDetay:"Pizzadan önce iyi gider",
      urunOzellikler: "",
      urunFiyat: "39.90 TL"
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
              <CardComponent resimUrl={item.resimUrl} urunAdi={item.urunAdi} urunDetay={item.urunDetay} urunOzellikler={item.urunOzellikler} urunFiyat={item.urunFiyat} link={"yan-urunler/tatlilar"} />
            ))}
          </Grid>

        </section>
        <section id='soslar'>
          <Typography sx={{ fontWeight: 'bold', fontSize: "22px" }}>
            Soslar
          </Typography>
          <Grid container spacing={2} sx={{ mt: 1, mb: 5 }}>

            {soslar.map((item) => (
              <CardComponent resimUrl={item.resimUrl} urunAdi={item.urunAdi} urunDetay={item.urunDetay}  urunOzellikler={item.urunOzellikler} urunFiyat={item.urunFiyat} link={"yan-urunler/soslar"} />
            ))}
          </Grid>
        </section>
        <section id='icecekler'>
          <Typography sx={{ fontWeight: 'bold', fontSize: "22px" }}>
            İçecekler
          </Typography>
          <Grid container spacing={2} sx={{ mt: 1, mb: 5 }}>

            {icecekler.map((item) => (
              <CardComponent resimUrl={item.resimUrl} urunAdi={item.urunAdi} urunDetay={item.urunDetay}  urunOzellikler={item.urunOzellikler} urunFiyat={item.urunFiyat} link={"yan-urunler/icecekler"} />
            ))}
          </Grid>
        </section>
        <section id='baslangiclar'>
          <Typography sx={{ fontWeight: 'bold', fontSize: "22px" }}>
            Başlangıçlar
          </Typography>
          <Grid container spacing={2} sx={{ mt: 1, mb: 10 }}>

            {baslangiclar.map((item) => (
              <CardComponent resimUrl={item.resimUrl} urunAdi={item.urunAdi} urunDetay={item.urunDetay}  urunOzellikler={item.urunOzellikler} urunFiyat={item.urunFiyat} link={"yan-urunler/baslangiclar"} />
            ))}
          </Grid>
        </section>
      </Container>

    </div>

  );
}
export default YanUrunler