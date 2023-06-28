import React from "react";
import { Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import UrunDetaySagKisim from "../../../components/UrunDetayComponent/UrunDetaySagKisim";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import {useQuery } from 'react-query';
import { urunDetayGetir } from '../../../api/UrunApi/api';
import { useParams } from 'react-router-dom';

function YanUrunlerDetay() {

  const theme = useTheme();
  const isLgOrMd = useMediaQuery(theme.breakpoints.down('md'));
  const { urunid } = useParams();
  const { data, isLoading, isError } = useQuery(["urunDetaylari", urunid], () => urunDetayGetir(urunid));
  console.log(data);
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
            <Typography sx={{ fontWeight: "bold", mt: 3 }}>İçindekiler</Typography>
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

          </Grid>
          <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',height: '360px'}} maxWidth={'100%'}>
          <UrunDetaySagKisim resimUrl={data.resimUrl} urunFiyat={data.urunFiyat} TL></UrunDetaySagKisim>
            
          </Grid>

        </Grid>
      </Box>
    </Container>
  );
};

export default YanUrunlerDetay