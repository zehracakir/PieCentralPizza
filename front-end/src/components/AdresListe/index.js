import React from 'react'
import {
  ListItem,
  Typography,
  ListItemText,
  IconButton
} from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';
function AdresListe({ handleClickOpen, adresIsmi, adres }) {
  return (
    <ListItem disablePadding sx={{ maxWidth: "100%" }}>
      <ListItemText primary={<Typography sx={{ fontWeight: "bold", fontFamily: "Sansserif" }}>{adresIsmi}</Typography>} secondary={<Typography variant='p' sx={{ color: "#757575" }}>{adres}</Typography>} />
      <IconButton edge="end" aria-label="comments" onClick={handleClickOpen}>
        <EditIcon />
      </IconButton>
    </ListItem>
  )
}

export default AdresListe