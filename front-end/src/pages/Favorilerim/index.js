import { useState } from 'react';
import {
  Typography,
  Box,
  List,
  Divider
} from '@mui/material'
import { Select } from 'antd';
import FavoriListe from '../../components/FavoriListe'
import { useAuth } from '../../contexts/AuthContext';
import { kullaniciFavorileriGetir } from '../../api/UrunApi/api';
import { useQuery } from 'react-query';

function Favorilerim() {
  const { user } = useAuth();
  const { isLoading, error, data } = useQuery(['kullaniciFavorileri', user._id], () => kullaniciFavorileriGetir(user._id));
  const [filtre, setFiltre] = useState("tumu");
  const handleChange = (value) => {
    setFiltre(value);
  };
  if (isLoading) {
    return <div> Loading...
    </div>
  }

  if (error) {
    return <div>{error.message}</div>
  }
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Typography variant='h5' sx={{ fontWeight: 'bold', display: "flex", justifyContent: "flex-start" }}>Favorilerim</Typography>
      <Box sx={{
        display: 'flex',
        justifyContent: 'flex-end',

      }}>
        <Select
          suffixIcon={<div style={{ color: '#dc3545' }}>☲</div>}
          style={{ width: 150, backgroundColor: '#D3D3D3', borderRadius: '6px' }}
          onChange={handleChange}
          bordered={false}
          className="custom-select"
          defaultValue="Filtrele"
          options={[
            {
              label: 'Tümü',
              value: 'tumu'
            },
            {
              label: 'Kategori',
              options: [
                {
                  label: 'Pizza',
                  value: 'pizza'
                },
                {
                  label: 'Tatlı',
                  value: 'tatli'
                },
                {
                  label: 'Sos',
                  value: 'sos'
                },
                {
                  label: 'İçecek',
                  value: 'icecek'
                },
                {
                  label: 'Başlangıç',
                  value: 'baslangic'
                },
              ],
            }
          ]}

        />
      </Box>
      <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
        <List sx={{ maxWidth: "100%" }}>
          <Divider />
          <Divider />
          {data.data.favoriler.map((favori, index) => {
            if (filtre === "tumu" || favori.kategori === filtre) {
              return (
                <div key={index}>
                  <FavoriListe urun={favori.urunAdi} ozellikler={favori.urunOzellikler.join(", ")} fiyat={`${favori.urunFiyat} TL`} link={favori.resimUrl} urunId={favori._id} />
                  <Divider />
                  <Divider />
                </div>
              )
            }

          })}
        </List>
      </Box>
    </Box>
  )
}

export default Favorilerim