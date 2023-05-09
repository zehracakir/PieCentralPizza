import { Button, Container } from '@mui/material';

function SepeteEkle({urunFiyat}) {

  return (
    <Container>
      <Button variant="contained" color="error"
        sx={{ textTransform: 'none', width: '100%' }}>
        Sepete Ekle {urunFiyat}
      
      </Button>
    
    </Container>
  );
}

export default SepeteEkle;
