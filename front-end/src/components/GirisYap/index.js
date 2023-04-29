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

function GirisYap({ login, closeDialog, closeLogin, openRegister }) {
    const handleRegister = () => {
        closeLogin();
        openRegister();
    }
    return (
        <Dialog open={login} onClose={closeDialog}>
            <DialogTitle>
                <Typography variant='h4' gutterBottom sx={{ fontWeight: "bold", fontFamily: "sans-serif" }}>Giriş Yap</Typography>
            </DialogTitle>
            <DialogContent>
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
            </DialogContent>
            <DialogActions>
                <Grid container rowSpacing={{ xs: 2 }}>
                    <Grid item xs={12}>
                        <Button variant='contained' color='error' size='large' sx={{ width: "100%", textTransform: 'none' }} onClick={closeDialog}><Typography sx={{ fontWeight: "bold" }}>Giriş</Typography></Button>
                    </Grid>
                    <Grid item xs={12}>
                        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <Typography sx={{ fontWeight: "bold" }}>Hesabın yok mu ?</Typography>
                            <Button variant="text" color='error' sx={{ textTransform: 'none', }} onClick={handleRegister}><Typography sx={{ fontWeight: "bold" }}>Kayıt Ol</Typography></Button>
                        </Box>

                    </Grid>
                </Grid>
            </DialogActions>
        </Dialog>
    )
}

export default GirisYap