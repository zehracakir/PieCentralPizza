import React from 'react'
import {
  Typography,
  Box,
  List,
  Divider
} from '@mui/material'
import SiparisListe from '../../components/SiparisListe'
import { kullaniciSiparisleriGetir } from '../../api/SiparisApi/api'
import { useAuth } from '../../contexts/AuthContext'
import { useQuery } from 'react-query'
function Siparislerim() {
  const { user } = useAuth();
  const { isLoading, error, data } = useQuery(['kullaniciSiparis', user._id], () => kullaniciSiparisleriGetir(user._id));
  if (isLoading) {
    return <div> Loading...
    </div>
  }

  if (error) {
    return <div>{error.message}</div>
  }
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Typography variant='h5' mb={2} sx={{ fontWeight: 'bold' }}>Siparişlerim</Typography>
      <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
        <List sx={{ maxWidth: "100%" }}>
          <Divider />
          {data.data.siparisler.map((siparis,index) => {
            const options = { 
              year: "numeric", 
              month: "long", 
              day: "numeric", 
              hour: "numeric", 
              minute: "numeric" 
            };
            const date = new Date(siparis.siparisTarihi);
            const tarih = new Intl.DateTimeFormat("tr-TR", options).format(date);
            return (
              <div key={index}>
                <SiparisListe urun={siparis.siparis[0].urunAdi} tarih={tarih} durum={siparis.siparisDurum} link={siparis.siparis[0].resimUrl} siparisId={siparis._id}/>
                <Divider />
              </div>
            )
          })}
        </List>
      </Box>
    </Box>
  )
}

export default Siparislerim