import { Button, Container } from '@mui/material';
import { useAuth } from '../../../../contexts/AuthContext';
function SepeteEkle({ urunAdi, urunFiyat, urunId, urunOzellikler, resimUrl, count }) {
  const { user, SepeteEkle } = useAuth();
  const handleSepeteEkle = async () => {
    if (user) {
      SepeteEkle({
        urunAdi: urunAdi,
        urunFiyat: urunFiyat,
        urunId: urunId,
        urunOzellikler: urunOzellikler,
        resimUrl: resimUrl,
        adet: count
      })
    }
  }
  return (
    <Container>
      <Button onClick={handleSepeteEkle} variant="contained" color="error"
        sx={{ textTransform: 'none', width: '100%' }}>
        Sepete Ekle {urunFiyat} TL
      </Button>

    </Container>
  );
}

export default SepeteEkle;
