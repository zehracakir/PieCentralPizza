import { Button, Container } from '@mui/material';

function SepeteEkle() {
  return (
    <Container>
        <Button variant="contained" color="error"
    sx={{ textTransform: 'none',width:'100%'}}>
      Sepete Ekle
    </Button>
    </Container>
  );
}

export default SepeteEkle;
