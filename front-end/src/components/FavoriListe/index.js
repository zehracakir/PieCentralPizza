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

import { Popconfirm } from 'antd';
import { StarOutlined } from '@ant-design/icons';

function FavoriListe({ urun, ozellikler, fiyat, link }) {
    return (
        <ListItem disablePadding sx={{ maxWidth: "100%" }}>
            <ListItemAvatar>
                <Avatar sx={{ marginRight: '8px', width: 70, height: 50 }} alt="Remy Sharp" src={link} />
            </ListItemAvatar>
            <ListItemText primary={<Typography sx={{ fontWeight: "bold", fontFamily: "Sansserif" }}>{urun}</Typography>} secondary={<Typography variant='p' sx={{ color: "#757575" }}>{ozellikler}</Typography>} />
            <ListItemText primary={<Typography sx={{ fontFamily: "Sansserif", textAlign: "right", color: "#dc3545" }}>{fiyat}</Typography>} />
            <Popconfirm
                placement='right'
                title="Favori Sil"
                description="Ürünü favorilerden kaldırmak istiyor musunuz ?"
                onConfirm={() => console.log("Sipariş silindi")}
                okText="Evet"
                cancelText="Hayır"
                icon={<StarOutlined style={{ color: '#dc3545' }} />}
            >
                <IconButton edge="end" aria-label="comments">
                    <StarIcon />
                </IconButton>
            </Popconfirm>
        </ListItem>
    )
}


export default FavoriListe