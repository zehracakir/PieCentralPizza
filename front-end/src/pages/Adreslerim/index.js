import { useState } from 'react'
import {
    Typography,
    Box,
    Button
} from '@mui/material'
import AddLocationIcon from '@mui/icons-material/AddLocation';
import AdresEkle from '../../components/AdresEkle';
import AdresListe from '../../components/AdresListe';
function Adreslerim() {
    const [open, setOpen] = useState(false)
    const handleClose = () => {
        setOpen(false);
    }
    const handleClickOpen = () => {
        setOpen(true);
    }
    return (
        <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography variant='h5' mb={2} sx={{ fontWeight: 'bold' }}>Adreslerim</Typography>
            {/* <Typography variant='p' sx={{ fontFamily: "sans-serif" }}>Adres Eklenmedi</Typography> */}
            <AdresListe />
            <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                <Button sx={{ mt: 1, textTransform: "none", color: "#019f00", fontWeight: "bold" }} variant="text" startIcon={<AddLocationIcon />} onClick={handleClickOpen}>Yeni Adres Ekle</Button>
            </Box>
            <AdresEkle open={open} setOpen={setOpen} handleClose={handleClose} />
        </Box>
    )
}

export default Adreslerim