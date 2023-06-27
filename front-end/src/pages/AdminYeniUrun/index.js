import React from 'react'
import {
  Box,
  TextField,
  Button,
  Typography,
} from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import validations from './Validation';
import { Formik } from 'formik'
import Uyari from '../../components/Uyari';

function AdminYeniUrun() {
  
  return (
    <Formik
      initialValues={{
        urunAdi: '',
        urunDetay: '',
        urunOzellikler: '',
        resimUrl: '',
        urunFiyat: null,
        stok: null,
      }}
      onSubmit={(values) => {
        console.log(values, " --> veri tabanına iletildi");
      }}
      validationSchema={validations}
    >
      {({ handleSubmit, handleBlur, handleChange, values, errors, touched }) => (
        <form onSubmit={handleSubmit}>
          <Box sx={{ width: 500, maxWidth: '100%' }}>
            <Typography variant='h5' mb={2} sx={{ fontWeight: 'bold' }}>Yeni Ürün</Typography>
            {errors.general && <Uyari mesaj={"Bu kullanıcı daha önceden kayıtlı"} />}
            <TextField
              id="urunAdi"
              label="Ürün Adı"
              name='urunAdi'
              variant="outlined"
              fullWidth margin='normal'
              error={Boolean(errors.urunAdi && touched.urunAdi)}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.urunAdi}
              helperText={errors.urunAdi && touched.urunAdi && `${errors.urunAdi}`}
            />
            <TextField
              id="urunDetay"
              label="Ürün Detay"
              name='urunDetay'
              variant="outlined"
              fullWidth margin='normal'
              error={Boolean(errors.urunDetay && touched.urunDetay)}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.urunDetay}
              helperText={errors.urunDetay && touched.urunDetay && `${errors.urunDetay}`}
            />

            <TextField
              id="urunOzellikler"
              label="Özellikler"
              name='urunOzellikler'
              variant="outlined"
              fullWidth margin='normal'
              error={Boolean(errors.urunOzellikler && touched.urunOzellikler)}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.urunOzellikler}
              helperText={errors.urunOzellikler && touched.urunOzellikler && `${errors.urunOzellikler}`}
            />
            <TextField
              id="resimUrl"
              label="Ürün Resmi"
              name='resimUrl'
              variant="outlined"
              fullWidth margin='normal'
              error={Boolean(errors.resimUrl && touched.resimUrl)}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.resimUrl}
              helperText={errors.resimUrl && touched.resimUrl && `${errors.resimUrl}`}
            />
            <TextField
              id="urunFiyat"
              label="Ürün Fiyatı"
              name='urunFiyat'
              variant="outlined"
              fullWidth margin='normal'
              error={Boolean(errors.urunFiyat && touched.urunFiyat)}
              onChange={handleChange}
              onBlur={handleBlur}

              helperText={errors.urunFiyat && touched.urunFiyat && `${errors.urunFiyat}`}
            />
            <TextField
              id="stok"
              label="Stok"
              name='stok'
              variant="outlined"
              fullWidth margin='normal'
              error={Boolean(errors.stok && touched.stok)}
              onChange={handleChange}
              onBlur={handleBlur}

              helperText={errors.stok && touched.stok && `${errors.stok}`}
            />

            <Button variant="contained" color='success' endIcon={<AddIcon />} sx={{ mt: 2 }} type='submit'>
              Yeni Ürün
            </Button>
          </Box>
        </form>
      )}
    </Formik>
  )
}

export default AdminYeniUrun