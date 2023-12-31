import React, { useState, useEffect } from "react";
import { Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import AccordionMalzemeEkleCikar from "../../../components/UrunDetayComponent/AccordionMalzemeEkleCikar";
import SelectHamurSecimi from "../../../components/UrunDetayComponent/SelectHamurSecimi";
import UrunDetaySagKisim from "../../../components/UrunDetayComponent/UrunDetaySagKisim";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useQuery } from 'react-query';
import { urunDetayGetir } from '../../../api/UrunApi/api';
import { useParams } from 'react-router-dom';
function UrunDetay() {
  const [fiyat, setFiyat] = useState(0);

  const theme = useTheme();
  const isLgOrMd = useMediaQuery(theme.breakpoints.down('md'));
  const { urunid } = useParams();
  const { data, isLoading, isError } = useQuery(["urunDetaylari", urunid], () => urunDetayGetir(urunid));
  useEffect(() => {
    if (!isLoading && !isError) {
      setFiyat(data.urunFiyat);
    }
  }, [data, isLoading, isError]);
  const fiyatBelirle = (fiyat) => {
    setFiyat(fiyat);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }

  return (
    <Container maxWidth="lg" sx={{ mt: 15, mb: isLgOrMd ? 15 : 30 }}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>

          <Grid item xs={12} md={6}>
            <Typography sx={{ fontWeight: "bold", fontSize: '30px' }}>{data.urunAdi}</Typography>
            <Typography variant="body2" color="text.secondary">{data.urunDetay}</Typography>
            <Typography sx={{ fontWeight: "bold", mt: 2 }}>İçindekiler</Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
              {data.urunOzellikler.length > 0 ? data.urunOzellikler.map((ozellik, index) => {
                return (
                  <React.Fragment key={index}>
                    {ozellik}
                    {index !== data.urunOzellikler.length - 1 && ','}
                    &nbsp;
                  </React.Fragment>
                );
              }) : null}
            </Typography>
            <SelectHamurSecimi />

          </Grid>
          <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '360px' }}>
            <UrunDetaySagKisim urunId={urunid} urunAdi={data.urunAdi} resimUrl={data.resimUrl} urunFiyat={fiyat} fiyatBelirle={fiyatBelirle} urunOzellikler={data.urunOzellikler}></UrunDetaySagKisim>
          </Grid>


        </Grid>
      </Box>
      <AccordionMalzemeEkleCikar
        header="Malzeme Ekle Çıkar"
        urunFiyat={fiyat}
        fiyatBelirle={fiyatBelirle}
      />
    </Container>
  );
};

export default UrunDetay;
