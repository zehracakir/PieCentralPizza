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
function AdresEkle({ open, handleClose }) {
    return (
        <Dialog open={open} onClose={handleClose} fullWidth maxWidth={"sm"}>
            <DialogTitle>
                <Typography variant='h4' gutterBottom sx={{ fontWeight: "bold", fontFamily: "sans-serif" }}>Yeni Adres Ekle</Typography>
            </DialogTitle>
            <DialogContent>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <TextField
                            autoFocus
                            margin='dense'
                            label="Şehir"
                            id='sehir'
                            name='sehir'
                            type='text'
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            autoFocus
                            margin='dense'
                            label="İlçe"
                            id='ilce'
                            name='ilce'
                            type='text'
                            fullWidth
                        />
                    </Grid>
                </Grid>
                <TextField
                    autoFocus
                    margin="dense"
                    label="Mahalle"
                    id="mahalle"
                    name='mahalle'
                    type="text"
                    fullWidth
                />
                <TextField
                    autoFocus
                    margin="dense"
                    label="Sokak"
                    id="sokak"
                    name='sokak'
                    type="text"
                    fullWidth
                />
                <TextField
                    autoFocus
                    margin="dense"
                    label="Adres Adi"
                    id="adresAdi"
                    name='adresAdi'
                    type="text"
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
                            onClick={handleClose}
                        >
                            <Typography sx={{ fontWeight: "bold" }}>Adresimi Kaydet</Typography>
                        </Button>
                    </Grid>
                </Grid>
            </DialogActions>

        </Dialog>
    )
}

export default AdresEkle