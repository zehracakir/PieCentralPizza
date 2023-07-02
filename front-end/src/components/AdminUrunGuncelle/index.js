import React from 'react'
import {
  Dialog,
  Button,
  TextField,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,

} from '@mui/material'
import { Formik } from 'formik'
import validations from './Validation';
import { adminUrunGuncelle } from '../../api/UrunApi/api';
import { useQueryClient } from 'react-query';
function AdminUrunGuncelle({ open, handleClose,urunid,urunAdi,urunDetay,urunOzellikler,resimUrl,urunFiyat,stok,kategori }) {
  const queryClient = useQueryClient();
  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth={"sm"}>
      <Formik
        initialValues={{
          urunAdi: urunAdi,
          urunDetay: urunDetay,
          urunOzellikler: urunOzellikler,
          resimUrl: resimUrl,
          urunFiyat: urunFiyat,
          stok: stok,
          kategori:kategori
        }}
        onSubmit={ async (values,bag) => {
          try {
            const response = await adminUrunGuncelle(urunid,values);
            queryClient.invalidateQueries(['urunler']);
            handleClose();
          } catch (error) {
            bag.setErrors({ general: error}); 
            console.log(error); 
          }
          console.log(values, "--> değerleri veritabanına yazılacak");
          handleClose();
        }}
        validationSchema={validations}
      >
        {({ handleSubmit, handleBlur, handleChange, values, errors, touched }) => (
          <form onSubmit={handleSubmit}>
            <DialogTitle>
              <Typography variant='h4' gutterBottom sx={{ fontWeight: "bold", fontFamily: "sans-serif" }}>Ürünü Güncelle</Typography>
            </DialogTitle>
            <DialogContent>
              <TextField
                id="urunAdi"
                label="Ürün Adı"
                name='urunAdi'
                variant="outlined"
                type='text'
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
                value={values.urunFiyat}
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
                value={values.stok}
                onChange={handleChange}
                onBlur={handleBlur}

                helperText={errors.stok && touched.stok && `${errors.stok}`}
              />
              <TextField
                id="kategori"
                label="Kategori"
                name='kategori'
                variant="outlined"
                fullWidth margin='normal'
                error={Boolean(errors.kategori && touched.kategori)}
                value={values.kategori}
                onChange={handleChange}
                onBlur={handleBlur}

                helperText={errors.kategori && touched.kategori && `${errors.kategori}`}
              />
            </DialogContent>
            <DialogActions>

              <Button
                variant='contained'
                color='error'
                size='large'
                sx={{ width: "100%", textTransform: 'none' }}
                type='submit'
              >
                <Typography sx={{ fontWeight: "bold" }}>Güncelle</Typography>
              </Button>


            </DialogActions>
          </form>
        )}
      </Formik>
    </Dialog>
  )
}

export default AdminUrunGuncelle