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
import { kullaniciAdresSil } from '../../api/KullaniciApi/api';
import { useAuth } from '../../contexts/AuthContext';
import { useQueryClient } from 'react-query';
function AdresListe({ adres, adresId }) {
  const { user } = useAuth();
  const queryClient = useQueryClient();
  const [open, setOpen] = useState(false)
  const adresDizi = adres.split(",").map(adres => adres.trim());
  const handleClickOpen = () => {
    setOpen(true);
  }
  const handleClose = () => {
    setOpen(false);
  }
  const adresSil = async () => {
      const response = await kullaniciAdresSil(user._id,adresId);
      queryClient.invalidateQueries(['kullaniciAdres', user._id]);
  }

  return (
    <ListItem disablePadding sx={{ maxWidth: "100%" }}>
      <ListItemText primary={<Typography sx={{ fontWeight: "bold", fontFamily: "Sansserif" }}>{adresDizi[0]}</Typography>} secondary={<Typography variant='p' sx={{ color: "#757575" }}>{adres}</Typography>} />
      <IconButton edge="end" aria-label="comments" onClick={handleClickOpen}>
        <EditIcon />
      </IconButton>
      <Popconfirm
        placement='right'
        title="Adres Sil"
        description="Adresi Silmek istiyor musunuz?"
        onConfirm={() => adresSil()}
        okText="Evet"
        cancelText="Hayır"
        icon={<DeleteOutlined style={{ color: '#dc3545' }} />}
      >
        <IconButton edge="end" aria-label="comments">
          <DeleteIcon />
        </IconButton>
      </Popconfirm>

      <AdresDuzenle open={open} handleClose={handleClose} sehir={adresDizi[4]} ilce={adresDizi[3]} mahalle={adresDizi[1]} sokak={adresDizi[2]} adresAdi={adresDizi[0]} adresId={adresId} />
    </ListItem>
  )
}

export default AdresListe