import React from "react";
import Box from '@mui/material/Box';
import UrunAdeti from "../../../components/UrunDetayComponent/UrunDetaySagKisim/UrunAdeti";
import SepeteEkle from "../../../components/UrunDetayComponent/UrunDetaySagKisim/SepeteEkle";
import IconButton from '@mui/joy/IconButton';
import { useState, useEffect } from 'react';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import { useAuth } from '../../../contexts/AuthContext';
import { kullaniciFavoriEkle } from '../../../api/UrunApi/api';
import { kullaniciFavorileriGetir } from '../../../api/UrunApi/api';
import { kullaniciFavoriSil } from '../../../api/UrunApi/api';
import { useQueryClient } from 'react-query';

function UrunDetaySagKisim({ resimUrl, urunFiyat, urunId, urunAdi }) {
  const queryClient = useQueryClient();

  const { user } = useAuth();
  const [isFavorite, setIsFavorite] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      const favoriler = await kullaniciFavorileriGetir(user._id);
      setIsFavorite(favoriler.data.favoriler.some((urun) => urun.urunAdi === urunAdi));
    };
    fetchData();
  }, [isFavorite]);
  const handleFavoriteClick = async () => {
    if (!isFavorite) {
      await kullaniciFavoriEkle(user._id, urunId);
      setIsFavorite(!isFavorite);
      queryClient.invalidateQueries(['kullaniciFavorileri', user._id]);
    } else {
      await kullaniciFavoriSil(user._id, urunId);
      setIsFavorite(!isFavorite);
      queryClient.invalidateQueries(['kullaniciFavorileri', user._id]);
    }

  };
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} maxWidth={'100%'}>
      <IconButton onClick={handleFavoriteClick}
        size="sm"
        variant="plain"
        color="neutral"
        sx={{ ml: 'auto', mr: 4 }}>
        {isFavorite ? <FavoriteBorderRoundedIcon style={{ color: '#dc3545' }} /> : <FavoriteBorderRoundedIcon />}
      </IconButton>
      <img src={resimUrl} alt="yanUrunResmi" width="50%" />
      <Box sx={{ mt: 3, mb: 3 }}>
        <UrunAdeti />
      </Box>
      <SepeteEkle urunFiyat={urunFiyat} />
    </Box>
  )
}

export default UrunDetaySagKisim
