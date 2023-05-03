import { useState } from 'react'
import {
  Box,
  List,
  ListItem,
  Typography,
  ListItemText,
  Divider,
  IconButton
} from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';
import AdresDuzenle from '../AdresDuzenle'
function AdresListe() {
  const [open, setOpen] = useState(false)
  const handleClose = () => {
    setOpen(false);
  }
  const handleClickOpen = () => {
    setOpen(true);
  }
  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <List sx={{ maxWidth: "70%" }}>
        <Divider />
        <ListItem disablePadding sx={{ maxWidth: "100%" }}>
          <ListItemText primary={<Typography sx={{ fontWeight: "bold", fontFamily: "Sansserif" }}>Ev</Typography>} secondary={<Typography variant='p' sx={{ color: "#757575" }}>Soğucak Mh, 2, Kuşadası Aydın</Typography>} />
          <IconButton edge="end" aria-label="comments" onClick={handleClickOpen}>
            <EditIcon />
          </IconButton>
        </ListItem>
        <Divider />
        <ListItem disablePadding>
          <ListItemText primary={<Typography sx={{ fontWeight: "bold", fontFamily: "Sansserif" }}>Okul</Typography>} secondary={<Typography variant='p' sx={{ color: "#757575" }}>Adalet Mh, Parkin içi, Osmangazi Bursa</Typography>} />
          <IconButton edge="end" aria-label="comments" onClick={handleClickOpen}>
            <EditIcon />
          </IconButton>
        </ListItem>
        <Divider />
      </List>
      <AdresDuzenle open={open} handleClose={handleClose} />
    </Box>
  )
}

export default AdresListe