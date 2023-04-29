import React from 'react'
import {
  Dialog,
  Button,
  TextField,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
  Grid,
  Box,
  Checkbox,
  FormGroup,
  FormControlLabel
} from '@mui/material'
function KayitOl({ register, closeDialog, closeRegister, openLogin }) {
  const handleLogin = () => {
    closeRegister();
    openLogin();
  }
  return (
    <Dialog open={register} onClose={closeDialog}>
      <DialogTitle>
        <Typography variant='h4' gutterBottom sx={{ fontWeight: "bold", fontFamily: "sans-serif" }}>Kayıt Ol</Typography>
      </DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin='dense'
          id='outlined-required'
          label="Ad Soyad"
          type='text'
          fullWidth
        />
        <TextField
          autoFocus
          margin='dense'
          id='outlined-required'
          label="Kullanıcı Adı"
          type='text'
          fullWidth
        />
        <TextField
          autoFocus
          margin="dense"
          id="outlined-required"
          label="E-Posta"
          type="email"
          fullWidth
        />
        <TextField
          autoFocus
          margin="dense"
          id="outlined-password-input"
          label="Şifre"
          type="password"
          fullWidth
        />
        <FormGroup>
          <FormControlLabel control={<Checkbox/>} label="Pazarlama amaçlı e-posta gönderilmesine izin veriyorum" />
          <FormControlLabel control={<Checkbox />} label="Pazarlama amaçlı SMS gönderilmesine izin veriyorum" />
          <FormControlLabel control={<Checkbox disabled checked/>} label="Üyelik sözleşmesini okudum, onaylıyorum." />
        </FormGroup>
      </DialogContent>
      <DialogActions>
        <Grid container rowSpacing={{ xs: 2 }}>
          <Grid item xs={12}>
            <Button variant='contained' color='error' size='large' sx={{ width: "100%", textTransform: 'none' }} onClick={closeDialog}><Typography sx={{ fontWeight: "bold" }}>Kayıt Ol</Typography></Button>
          </Grid>
          <Grid item xs={12}>
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <Typography sx={{ fontWeight: "bold" }}>Zaten üye misin?</Typography>
              <Button variant="text" color='error' sx={{ textTransform: 'none', }} onClick={handleLogin}><Typography sx={{ fontWeight: "bold" }}>Giriş Yap</Typography></Button>
            </Box>

          </Grid>
        </Grid>
      </DialogActions>
    </Dialog>
  )
}

export default KayitOl