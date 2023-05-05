import React from 'react'
import {
  Box,
  TextField,
  Button,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material'
import UpdateIcon from '@mui/icons-material/Update';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import validations from './Validation';
import { Formik } from 'formik'
function Hesabim() {
  return (
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
          <Accordion sx={{ mt: 2, width: "85%", backgroundColor: "#F9F9F9" }} square>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant='p' sx={{ fontWeight: "bold" }}>Şifre Değiştir</Typography>
            </AccordionSummary>
            <AccordionDetails>
  
              <TextField
                id="eskiSifre"
                name='eskiSifre'
                label="Eski Şifre"
                variant="outlined"
                fullWidth margin='normal'
                type='password'
                error={Boolean(errors.eskiSifre && touched.eskiSifre)}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.eskiSifre}
                helperText={errors.eskiSifre && touched.eskiSifre && `${errors.eskiSifre}`}
              />
              <TextField
                id="sifre"
                name='sifre'
                label="Yeni Şifre"
                variant="outlined"
                fullWidth margin='normal'
                type='password'
                error={Boolean(errors.sifre && touched.sifre)}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.sifre}
                helperText={errors.sifre && touched.sifre && `${errors.sifre}`}
              />
              <TextField
                id="sifreOnayla"
                name='sifreOnayla'
                label="Yeni Şifre Tekrar"
                variant="outlined"
                fullWidth margin='normal'
                type='password'
                error={Boolean(errors.sifreOnayla && touched.sifreOnayla)}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.sifreOnayla}
                helperText={errors.sifreOnayla && touched.sifreOnayla && `${errors.sifreOnayla}`}
              />
              <Button variant="contained" color='error' endIcon={<UpdateIcon />} sx={{ textTransform: "none" }} type='submit'>
                Şifreyi Güncelle
              </Button>
            </AccordionDetails>
          </Accordion>
          <Button variant="contained" color='success' endIcon={<UpdateIcon />} sx={{ mt: 2 }} type='submit'>
            Güncelle
          </Button>
        </Box>
      </form>
      )}
    </Formik>
  )
}

export default Hesabim