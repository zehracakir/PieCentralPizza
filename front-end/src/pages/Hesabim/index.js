import React from 'react'
import {
  Box,
  TextField,
  Button,
  Typography,
} from '@mui/material'
import { useState } from 'react';
import UpdateIcon from '@mui/icons-material/Update';
import LockResetIcon from '@mui/icons-material/LockReset';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import validations from './Validation';
import { Formik } from 'formik'
import SifreDegistir from '../../components/SifreDegistir';
function Hesabim() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  }

  return (
    <>
      <Formik
        initialValues={{
          kullaniciAdi: '',
          email: '',
          telefonNo: '',
          eskiSifre: '',
          sifre: '',
          sifreOnayla: '',
        }}
        onSubmit={(values) => {
          console.log(values, " --> veri tabanına iletildi");
        }}
        validationSchema={validations}
      >
        {({ handleSubmit, handleBlur, handleChange, values, errors, touched }) => (
          <form onSubmit={handleSubmit}>
            <Box sx={{ width: 500, maxWidth: '100%' }}>
              <Typography variant='h5' mb={2} sx={{ fontWeight: 'bold' }}>Hesabım</Typography>
              <TextField
                id="isim"
                label="İsim"
                name='isim'
                variant="outlined"
                fullWidth margin='normal'
                InputProps={{ readOnly: true }}
                defaultValue={"Profil İsmi"}
              />
              <TextField
                id="kullaniciAdi"
                label="Kullanıcı Adı"
                name='kullaniciAdi'
                variant="outlined"
                fullWidth margin='normal'
                error={Boolean(errors.kullaniciAdi && touched.kullaniciAdi)}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.kullaniciAdi}
                helperText={errors.kullaniciAdi && touched.kullaniciAdi && `${errors.kullaniciAdi}`}
              />

              <TextField
                id="email"
                label="E-Posta"
                name='email'
                variant="outlined"
                fullWidth margin='normal'
                error={Boolean(errors.email && touched.email)}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                helperText={errors.email && touched.email && `${errors.email}`}
              />
              <TextField
                id="telefonNo"
                label="Telefon Numarası"
                name='telefonNo'
                variant="outlined"
                fullWidth margin='normal'
                error={Boolean(errors.telefonNo && touched.telefonNo)}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.telefonNo}
                helperText={errors.telefonNo && touched.telefonNo && `${errors.telefonNo}`}
              />
              <Box sx={{display:"flex", justifyContent:"space-between"}}>
                <Button variant="outlined" color='success' endIcon={<LockResetIcon />} sx={{ textTransform: "none" }} onClick={handleOpen}>
                  <Typography variant='p'>Şifre Değiştir</Typography>
                </Button>
                <br />
                <Button variant="contained" color='success' endIcon={<UpdateIcon />} type='submit'>
                  Güncelle
                </Button>
              </Box>


            </Box>
          </form>
        )}
      </Formik>
      <SifreDegistir open={open} handleClose={handleClose} />
    </>

  )
}

export default Hesabim