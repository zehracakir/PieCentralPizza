import React, { useEffect } from "react";
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import CardComponent from "../../../components/CardComponent"
import {useQuery } from 'react-query';
import { kategoriyeGoreUrunGetir } from '../../../api/UrunApi/api';


function YanUrunler() {

  const tatlilarQuery = useQuery("tatlilar", () => kategoriyeGoreUrunGetir("tatli"));
  const soslarQuery = useQuery("soslar", () => kategoriyeGoreUrunGetir("sos"));
  const iceceklerQuery = useQuery("icecekler", () => kategoriyeGoreUrunGetir("icecek"));
  const baslangiclarQuery = useQuery("baslangiclar", () => kategoriyeGoreUrunGetir("baslangic"));

  const tatlilar = tatlilarQuery.data;
  // console.log(tatlilar)
  const soslar = soslarQuery.data;
  const icecekler = iceceklerQuery.data;
  const baslangiclar = baslangiclarQuery.data;

 

  useEffect(() => {
    let timeoutId;
    const handleScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        const sections = document.querySelectorAll("section[id]");
        const scrollPosition = window.scrollY;
  
        sections.forEach((section) => {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          const offset = window.innerHeight / 2;
  
          if (scrollPosition >= top - offset && scrollPosition < top + height - offset) {
            window.history.replaceState(null, "", `#${section.id}`);
          }
        });
      }, 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (
    tatlilarQuery.isLoading ||
    soslarQuery.isLoading ||
    iceceklerQuery.isLoading ||
    baslangiclarQuery.isLoading
  ) {
    return <div>Loading...</div>;
  }

  if (
    tatlilarQuery.isError ||
    soslarQuery.isError ||
    iceceklerQuery.isError ||
    baslangiclarQuery.isError
  ) {
    return <div>Error fetching data</div>;
  }

  return (
    <div>
      <Container maxWidth="lg" sx={{ mt: 15 }}>
        <section id='tatlilar'>

          <Typography sx={{ fontWeight: 'bold', fontSize: "22px", mt: 3 }}>
            Tatlılar
          </Typography>
          
          <Grid container spacing={2} sx={{ mt: 1, mb: 5, top: -80 }}>

            {tatlilar.map((item) => (
              <CardComponent resimUrl={item.resimUrl} urunAdi={item.urunAdi} urunDetay={item.urunDetay} urunOzellikler={item.urunOzellikler} urunFiyat={item.urunFiyat} link={"yan-urunler/tatlilar"} urunid={item._id} />
            ))}
          </Grid>

        </section>
        <section id='soslar'>
          <Typography sx={{ fontWeight: 'bold', fontSize: "22px" }}>
            Soslar
          </Typography>
          <Grid container spacing={2} sx={{ mt: 1, mb: 5 }}>

            {soslar.map((item) => (
              <CardComponent resimUrl={item.resimUrl} urunAdi={item.urunAdi} urunDetay={item.urunDetay} urunOzellikler={item.urunOzellikler} urunFiyat={item.urunFiyat} link={"yan-urunler/soslar"} urunid={item._id}/>
            ))}
          </Grid>
        </section>
        <section id='icecekler'>
          <Typography sx={{ fontWeight: 'bold', fontSize: "22px" }}>
            İçecekler
          </Typography>
          <Grid container spacing={2} sx={{ mt: 1, mb: 5 }}>

            {icecekler.map((item) => (
              <CardComponent resimUrl={item.resimUrl} urunAdi={item.urunAdi} urunDetay={item.urunDetay} urunOzellikler={item.urunOzellikler} urunFiyat={item.urunFiyat} link={"yan-urunler/icecekler"} urunid={item._id}/>
            ))}
          </Grid>
        </section>
        <section id='baslangiclar'>
          <Typography sx={{ fontWeight: 'bold', fontSize: "22px" }}>
            Başlangıçlar
          </Typography>
          <Grid container spacing={2} sx={{ mt: 1, mb: 10 }}>

            {baslangiclar.map((item) => (
              <CardComponent resimUrl={item.resimUrl} urunAdi={item.urunAdi} urunDetay={item.urunDetay} urunOzellikler={item.urunOzellikler} urunFiyat={item.urunFiyat} link={"yan-urunler/baslangiclar"} urunid={item._id}/>
            ))}
          </Grid>
        </section>
      </Container>

    </div>

  );
}
export default YanUrunler