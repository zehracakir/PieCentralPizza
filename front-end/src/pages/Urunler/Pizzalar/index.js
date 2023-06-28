import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import CardComponent from "../../../components/CardComponent"
import {useQuery } from 'react-query';
import { kategoriyeGoreUrunGetir } from '../../../api/UrunApi/api';
function Pizzalar() {
  const kategori = 'pizza';
const {isLoading,error,data}=useQuery("pizzalar",()=>kategoriyeGoreUrunGetir(kategori));

// console.log(data);

if(isLoading) return "Loading..."

if(error) return "Error! "+ error.message;

  const pizzalar = data;
  return (
    <div>
      <Container maxWidth="lg" sx={{ mt: 15 }}>
        <section id='pizzalar'>
          <Typography sx={{ fontWeight: 'bold', fontSize: "22px" }}>
            Pizzalar
          </Typography>
          <Grid container spacing={2} sx={{ mt: 1, mb: 10 }}>

            {pizzalar.map((item) => (
              <CardComponent resimUrl={item.resimUrl} urunAdi={item.urunAdi} urunDetay={item.urunDetay} urunOzellikler={item.urunOzellikler} urunFiyat={item.urunFiyat} link={"pizzalar"} urunid={item._id} />
            ))}
          </Grid>
        </section>
      </Container>

    </div>

  );
}
export default Pizzalar