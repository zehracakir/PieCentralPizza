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

import validations from './Validation'
import { useFormik } from 'formik'
import { useAuth } from '../../contexts/AuthContext'
import { kullaniciAdresEkle } from '../../api/KullaniciApi/api'
import { useQueryClient } from 'react-query';

function AdresEkle({ open, handleClose }) {
    const { user } = useAuth();
    const queryClient = useQueryClient();

    const { handleSubmit, handleBlur, handleChange, values, errors, touched } = useFormik({
        initialValues: {
            sehir: '',
            ilce: '',
            mahalle: '',
            sokak: '',
            adresAdi: ''
        },
        onSubmit: async (values, bag) => {
            try {
              const response = await kullaniciAdresEkle(user._id, values);
              queryClient.invalidateQueries(['kullaniciAdres', user._id]);
            } catch (error) {
                bag.setErrors({ general: error});  
            }
            console.log(values, "--> değerleri veritabanına yazılacak");
            handleClose();
        },
        validationSchema: validations
    })
    return (
        <Dialog 
        open={open} 
        onClose={handleClose} 
        fullWidth maxWidth={"sm"} 
        >
            <form onSubmit={handleSubmit}>
                <DialogTitle>
                    <Typography variant='h4' gutterBottom sx={{ fontWeight: "bold", fontFamily: "sans-serif" }}>Yeni Adres Ekle</Typography>
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
                        </Grid>
                    </Grid>
                </DialogActions>
            </form>
        </Dialog>


    )
}

export default AdresEkle