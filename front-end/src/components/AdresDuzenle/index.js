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
} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import { Formik } from 'formik'
import validations from './Validation';
function AdresDuzenle({ open, handleClose, sehir, ilce, mahalle, sokak, adresAdi }) {
  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth={"sm"}>
      <Formik
        initialValues={{
          sehir: sehir,
          ilce: ilce,
          mahalle: mahalle,
          sokak: sokak,
          adresAdi: adresAdi
        }}
        onSubmit={(values) => {
          console.log(values, "--> değerleri veritabanına yazılacak");
          handleClose();
        }}
        validationSchema={validations}
      >
        {({ handleSubmit, handleBlur, handleChange, values, errors, touched }) => (
          <form onSubmit={handleSubmit}>
            <DialogTitle>
              <Typography variant='h4' gutterBottom sx={{ fontWeight: "bold", fontFamily: "sans-serif" }}>Adresini Düzenle</Typography>
            </DialogTitle>
            <DialogContent>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <TextField
                    margin='dense'
                    label="Şehir"
                    id='sehir'
                    name='sehir'
                    type='text'
                    error={Boolean(errors.sehir && touched.sehir)}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.sehir}
                    helperText={errors.sehir && touched.sehir && `${errors.sehir}`}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    margin='dense'
                    label="İlçe"
                    id='ilce'
                    name='ilce'
                    type='text'
                    error={Boolean(errors.ilce && touched.ilce)}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.ilce}
                    helperText={errors.ilce && touched.ilce && `${errors.ilce}`}
                    fullWidth
                  />
                </Grid>
              </Grid>
              <TextField
                margin="dense"
                label="Mahalle"
                id="mahalle"
                name='mahalle'
                type="text"
                error={Boolean(errors.mahalle && touched.mahalle)}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.mahalle}
                helperText={errors.mahalle && touched.mahalle && `${errors.mahalle}`}
                fullWidth
              />
              <TextField
                margin="dense"
                label="Sokak"
                id="sokak"
                name='sokak'
                type="text"
                error={Boolean(errors.sokak && touched.sokak)}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.sokak}
                helperText={errors.sokak && touched.sokak && `${errors.sokak}`}
                fullWidth
              />
              <TextField
                margin="dense"
                label="Adres Adi"
                id="adresAdi"
                name='adresAdi'
                type="text"
                error={Boolean(errors.adresAdi && touched.adresAdi)}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.adresAdi}
                helperText={errors.adresAdi && touched.adresAdi && `${errors.adresAdi}`}
                fullWidth
              />
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
                    <Typography sx={{ fontWeight: "bold" }}>Adresimi Kaydet</Typography>
                  </Button>
                  <Button variant="text" startIcon={<DeleteIcon />} sx={{ width: "100%", textTransform: 'none', color: "#616161" }} onClick={handleClose}>
                    <Typography variant='p' sx={{ fontWeight: "bold" }}>Adresimi Sil</Typography>
                  </Button>
                </Grid>
              </Grid>
            </DialogActions>
          </form>
        )}
      </Formik>
    </Dialog>
  )
}

export default AdresDuzenle