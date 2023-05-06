import React from 'react'
import {
    ListItem,
    Typography,
    ListItemText,
    IconButton,
    ListItemAvatar,
    Avatar
} from '@mui/material'
import StarIcon from '@mui/icons-material/Star';
function FavoriListe({ urun, ozellikler, fiyat, link }) {
    return (
        <ListItem disablePadding sx={{ maxWidth: "100%" }}>
            <ListItemAvatar>
                <Avatar sx={{ marginRight: '8px', width: 70, height: 50 }} alt="Remy Sharp" src={link} />
            </ListItemAvatar>
            <ListItemText primary={<Typography sx={{ fontWeight: "bold", fontFamily: "Sansserif" }}>{urun}</Typography>} secondary={<Typography variant='p' sx={{ color: "#757575" }}>{ozellikler}</Typography>} />
            <ListItemText primary={<Typography sx={{ fontFamily: "Sansserif", color: "#757575", textAlign: "right", color: "#F45050" }}>{fiyat}</Typography>} />

            <IconButton edge="end" aria-label="comments">
                <StarIcon />
            </IconButton>
        </ListItem>
    )
}

export default FavoriListe