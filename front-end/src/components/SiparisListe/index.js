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
import { Popconfirm } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

function SiparisListe({ urun, tarih, durum, link }) {
    return (
        <ListItem disablePadding sx={{ maxWidth: "100%" }}>
            <ListItemAvatar>
                <Avatar sx={{ marginRight: '8px', width: 70, height: 50 }} alt="Remy Sharp" src={link} />
            </ListItemAvatar>
            <ListItemText primary={<Typography sx={{ fontWeight: "bold", fontFamily: "Sansserif" }}>{urun}</Typography>} secondary={<Typography variant='p' sx={{ color: "#757575" }}>{tarih} tarihinde {durum}</Typography>} />
            <Popconfirm
            placement='right'
            title="Sipariş Sil"
            description="Siparişi silmek istiyor musunuz ?"
            onConfirm={() => console.log("Sipariş silindi")}
            okText="Evet"
            cancelText="Hayır"
            icon={<DeleteOutlined style={{ color: '#dc3545' }} />}
            >
                <IconButton edge="end" aria-label="comments">
                    <DeleteIcon />
                </IconButton>
            </Popconfirm>

        </ListItem>
    )
}

export default SiparisListe