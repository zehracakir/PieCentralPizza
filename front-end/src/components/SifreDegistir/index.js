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
import LockResetIcon from '@mui/icons-material/LockReset';
import { useAuth } from '../../contexts/AuthContext';
import { kullaniciSifreGuncelle } from '../../api/KullaniciApi/api';
import Uyari from '../Uyari';
function SifreDegistir({ open, handleClose }) {
    const { user, Logout } = useAuth();
    const { handleSubmit, handleBlur, handleChange, values, errors, touched } = useFormik({
        initialValues: {
            eskiSifre: '',
            sifre: '',
            sifreOnayla: ''
        },
        onSubmit: async (values, bag) => {
            try {
                const response = await kullaniciSifreGuncelle(user._id,{
                    eskiSifre: values.eskiSifre,
                    yeniSifre: values.sifre
                });
                handleClose();
                Logout();
            } catch (error) {
                bag.setErrors({ general: error });
            }
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
                    <Typography variant='h4' gutterBottom sx={{ fontWeight: "bold", fontFamily: "sans-serif" }}>Sifre Degistir</Typography>
                </DialogTitle>
                <DialogContent>
                {errors.general && <Uyari mesaj={errors.general.response.data.hata} />}

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
                </DialogContent>
                <DialogActions>
                    <Grid container rowSpacing={{ xs: 2 }}>
                        <Grid item xs={12}>
                            <Button
                                variant="contained"
                                size='large'
                                color='success'
                                endIcon={<LockResetIcon />}
                                sx={{ width: "100%", textTransform: "none" }}
                                type='submit'
                            >
                                <Typography sx={{ fontWeight: "bold" }}>Şifreyi Güncelle</Typography>
                            </Button>
                        </Grid>
                    </Grid>
                </DialogActions>
            </form>
        </Dialog>


    )
}

export default SifreDegistir