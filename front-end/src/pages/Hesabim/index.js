import React from 'react'
import {
  Box,
  TextField,
  Button,
  Typography
} from '@mui/material'
import UpdateIcon from '@mui/icons-material/Update';
function Hesabim() {
  return (
    <Box sx={{ width: 500, maxWidth: '100%' }}>
      <Typography variant='h5' mb={2} sx={{ fontWeight: 'bold' }}>Hesabım</Typography>
      <TextField id="isim" label="İsim" variant="outlined" fullWidth margin='normal' InputProps={{ readOnly: true }} defaultValue={"Profil İsmi"} />
      <TextField id="kullaniciAdi" label="Kullanıcı Adı" variant="outlined" fullWidth margin='normal' InputProps={{ readOnly: true }} defaultValue={"Kullanıcı Adı"} />
      <TextField id="email" label="E-Posta" variant="outlined" fullWidth margin='normal' />
      <TextField id="telefonNo" label="Telefon Numarası" variant="outlined" fullWidth margin='normal' />
      <Button variant="contained" color='success' endIcon={<UpdateIcon />}>
        Güncelle
      </Button>
    </Box>
  )
}

export default Hesabim