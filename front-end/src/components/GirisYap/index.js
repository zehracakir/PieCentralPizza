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
} from '@mui/material'
import { useFormik } from 'formik'
import validations from './Validation'
function GirisYap({ login, closeDialog, closeLogin, openRegister }) {
    const handleRegister = () => {
        closeLogin();
        openRegister();
    }
    const { handleSubmit, handleChange, values, handleBlur, errors, touched } = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        onSubmit: async (values) => {
            console.log(values, " bilgileri veritabanına gönderilecek");
            closeDialog();
        },
        validationSchema: validations
    })
    return (

        <Dialog open={login} onClose={closeDialog} fullWidth maxWidth={"sm"}>
            <form onSubmit={handleSubmit}>
                <DialogTitle>
                    <Typography variant='h4' gutterBottom sx={{ fontWeight: "bold", fontFamily: "sans-serif" }}>Giriş Yap</Typography>
                </DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        error={Boolean(errors.email && touched.email)}
                        margin="dense"
                        label="E-Posta"
                        id="email"
                        name="email"
                        type="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        helperText={errors.email && touched.email && `${errors.email}`}
                        fullWidth
                    />

                    <TextField
                        autoFocus
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
                </DialogContent>
                <DialogActions>
                    <Grid container rowSpacing={{ xs: 2 }}>
                        <Grid item xs={12}>
                            <Button
                                variant='contained'
                                color='error'
                                size='large'
                                type='submit'
                                sx={{ width: "100%", textTransform: 'none' }}
                            >
                                <Typography sx={{ fontWeight: "bold" }}>Giriş</Typography>
                            </Button>
                        </Grid>
                        <Grid item xs={12}>
                            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <Typography sx={{ fontWeight: "bold" }}>Hesabın yok mu ?</Typography>
                                <Button variant="text" color='error' sx={{ textTransform: 'none', }} onClick={handleRegister}><Typography sx={{ fontWeight: "bold" }}>Kayıt Ol</Typography></Button>
                            </Box>

                        </Grid>
                    </Grid>
                </DialogActions>
            </form>
        </Dialog>


    )
}

export default GirisYap