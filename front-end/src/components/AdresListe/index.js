import { useState } from 'react'
import {
  ListItem,
  Typography,
  ListItemText,
  IconButton
} from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';
import AdresDuzenle from '../../components/AdresDuzenle';
import { Popconfirm } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import DeleteIcon from '@mui/icons-material/Delete';

function AdresListe({ adresIsmi, adres }) {
  const [open, setOpen] = useState(false)
  const adresDizi = adres.split(",").map(adres => adres.trim());
  const handleClickOpen = () => {
    setOpen(true);
}
  const handleClose = () => {
    setOpen(false);
}
// Soğucak Mh, 2, Kuşadası Aydın
  return (
    <ListItem disablePadding sx={{ maxWidth: "100%" }}>
      <ListItemText primary={<Typography sx={{ fontWeight: "bold", fontFamily: "Sansserif" }}>{adresIsmi}</Typography>} secondary={<Typography variant='p' sx={{ color: "#757575" }}>{adres}</Typography>} />
      <IconButton edge="end" aria-label="comments" onClick={handleClickOpen}>
        <EditIcon />
      </IconButton>
      <Popconfirm
            placement='right'
            title="Adres Sil"
            description="Adresi Silmek istiyor musunuz?"
            onConfirm={() => console.log("Adres silindi")}
            okText="Evet"
            cancelText="Hayır"
            icon={<DeleteOutlined style={{ color: '#dc3545' }} />}
            >
                <IconButton edge="end" aria-label="comments">
                    <DeleteIcon />
                </IconButton>
            </Popconfirm>

      <AdresDuzenle open={open} handleClose={handleClose} sehir={adresDizi[3]} ilce={adresDizi[2]} mahalle={adresDizi[0]} sokak={adresDizi[1]} adresAdi={adresIsmi}/>
    </ListItem>
  )
}

export default AdresListe