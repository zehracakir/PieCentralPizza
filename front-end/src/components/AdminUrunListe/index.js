import React from 'react'
import {
    ListItem,
    Typography,
    ListItemText,
    IconButton,
    ListItemAvatar,
    Avatar
} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { Popconfirm } from 'antd';
import AdminUrunGuncelle from '../AdminUrunGuncelle';
import { useState } from 'react';
const confirm = () => {
    console.log("silindi")
};
function AdminUrunListe({ urun, ozellikler, fiyat, link }) {
    const [open, setOpen] = useState(false);
    const handleClose = () => {
        setOpen(false)
    }
    const clickOpen = () => {
        setOpen(true)
    }
    return (
        <ListItem disablePadding sx={{ maxWidth: "100%" }}>
            <ListItemAvatar>
                <Avatar sx={{ marginRight: '8px', width: 70, height: 50 }} alt="Remy Sharp" src={link} />
            </ListItemAvatar>
            <ListItemText primary={<Typography sx={{ fontWeight: "bold", fontFamily: "Sansserif" }}>{urun}</Typography>} secondary={<Typography variant='p' sx={{ color: "#757575" }}>{ozellikler}</Typography>} />
            <ListItemText primary={<Typography sx={{ fontFamily: "Sansserif", color: "#757575", textAlign: "right", color: "#F45050" }}>{fiyat}</Typography>} />

            <AdminUrunGuncelle open={open} handleClose={handleClose} />
            <IconButton edge="end" aria-label="comments" onClick={clickOpen}>
                <ModeEditIcon />
            </IconButton>
            <Popconfirm
                placement="right"
                title="Ürünü Sil"
                description="Ürünü silmek istiyor musunuz ?"
                onConfirm={confirm}
                okText="Evet"
                cancelText="Hayır"
                
            >
                <IconButton edge="end" aria-label="comments">
                    <DeleteIcon />
                </IconButton>
            </Popconfirm>

        </ListItem>
    )
}

export default AdminUrunListe