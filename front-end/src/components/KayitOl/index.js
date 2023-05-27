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
import { useFormik } from 'formik'
import validations from './Validation'
function KayitOl({ register, closeDialog, closeRegister, openLogin }) {
  const handleLogin = () => {
    closeRegister();
    openLogin();
  }
  const { handleSubmit, handleChange, values, handleBlur, errors, touched } = useFormik({
    initialValues: {
      isim: "",
      kullaniciAdi: "",
      email: "",
      password: "",
      passwordConfirmation:""
    },
    onSubmit: async (values) => {
      console.log(values, " bilgileri veritabanına gönderilecek");
      closeDialog();
    },
    validationSchema: validations
  })
  return (
    <Dialog open={register} onClose={closeDialog} fullWidth maxWidth={"sm"}>
      <form onSubmit={handleSubmit}>
        <DialogTitle>
          <Typography variant='h4' gutterBottom sx={{ fontWeight: "bold", fontFamily: "sans-serif" }}>Kayıt Ol</Typography>
        </DialogTitle>
        <DialogContent>
          <TextField
            error={Boolean(errors.isim && touched.isim)}
            margin='dense'
            label="İsim"
            id='isim'
            name='isim'
            type='text'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.isim}
            helperText={errors.isim && touched.isim && `${errors.isim}`}
            fullWidth
          />
          <TextField
            error={Boolean(errors.kullaniciAdi && touched.kullaniciAdi)}
            margin='dense'
            label="Kullanıcı Adı"
            id='kullaniciAdi'
            name='kullaniciAdi'
            type='text'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.kullaniciAdi}
            helperText={errors.kullaniciAdi && touched.kullaniciAdi && `${errors.kullaniciAdi}`}
            fullWidth
          />
          <TextField
            error={Boolean(errors.email && touched.email)}
            margin="dense"
            label="E-Posta"
            id="email"
            name='email'
            type="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            helperText={errors.email && touched.email && `${errors.email}`}
            fullWidth
          />
          <TextField
            error={Boolean(errors.password && touched.password)}
            margin="dense"
            label="Şifre"
            id="password"
            name='password'
            type="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
            helperText={errors.password && touched.password && `${errors.password}`}
            fullWidth
          />
          <TextField 
            error={Boolean(errors.passwordConfirmation && touched.passwordConfirmation)}
            margin="dense"
            label="Şifre Onay"
            id="passwordConfirmation"
            name='passwordConfirmation'
            type="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.passwordConfirmation}
            helperText={errors.passwordConfirmation && touched.passwordConfirmation && `${errors.passwordConfirmation}`}
            fullWidth
          />
          <FormGroup>
            <FormControlLabel control={<Checkbox />} label="Pazarlama amaçlı e-posta gönderilmesine izin veriyorum" />

            <FormControlLabel control={<Checkbox disabled checked />} label="Üyelik sözleşmesini okudum, onaylıyorum." />
          </FormGroup>
        </DialogContent>
        <DialogActions>
          <Grid container rowSpacing={{ xs: 2 }}>
            <Grid item xs={12}>
              <Button
                variant='contained'
                color='error'
                size='large'
                sx={{ width: "100%", textTransform: 'none' }}
                type='submit'
              >
                <Typography sx={{ fontWeight: "bold" }}>Kayıt Ol</Typography>
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Typography sx={{ fontWeight: "bold" }}>Zaten üye misin?</Typography>
                <Button variant="text" color='error' sx={{ textTransform: 'none', }} onClick={handleLogin}><Typography sx={{ fontWeight: "bold" }}>Giriş Yap</Typography></Button>
              </Box>

            </Grid>
          </Grid>
        </DialogActions>
      </form>

    </Dialog>
  )
}

export default KayitOl