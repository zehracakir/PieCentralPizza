import { useState } from 'react'
import {
    Typography,
    Box,
    Button,
    List,
    Divider
} from '@mui/material'
import AddLocationIcon from '@mui/icons-material/AddLocation';
import AdresEkle from '../../components/AdresEkle';
import AdresListe from '../../components/AdresListe';
import { useAuth } from '../../contexts/AuthContext';
import { useQuery } from 'react-query'
import { kullaniciAdresGetir } from '../../api/KullaniciApi/api';
function Adreslerim() {
    const [yeniAdres, setYeniAdres] = useState(false)
    const handleYeniAdresClose = () => {
        setYeniAdres(false)
    }
    const handleYeniAdresOpen = () => {
        setYeniAdres(true)
    }
    const { user } = useAuth();
    const { isLoading, error, data } = useQuery(['kullaniciAdres', user._id], () => kullaniciAdresGetir(user._id));
    if (isLoading) {
        return <div> Loading...
        </div>
      }
    
      if (error) {
        return <div>{error.message}</div>
      }
    return (
        <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography variant='h5' mb={2} sx={{ fontWeight: 'bold' }}>Adreslerim</Typography>
            {/* <Typography variant='p' sx={{ fontFamily: "sans-serif" }}>Adres Eklenmedi</Typography> */}
            <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
                <List sx={{ maxWidth: "100%" }}>
                    <Divider />
                    {data.data.map((adres,index) => {
                        return (
                            <div key={index}>
                                <AdresListe adres={adres.adres} adresId={adres._id} />
                                <Divider />
                            </div>
                        )
                    })}
                </List>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                <Button sx={{ mt: 1, textTransform: "none", color: "#019f00", fontWeight: "bold" }} variant="text" startIcon={<AddLocationIcon />} onClick={handleYeniAdresOpen}>Yeni Adres Ekle</Button>
            </Box>
            <AdresEkle open={yeniAdres} setOpen={setYeniAdres} handleClose={handleYeniAdresClose} />
        </Box>
    )
}

export default Adreslerim