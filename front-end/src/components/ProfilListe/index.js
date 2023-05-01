import React from 'react'
import {
    Box,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
    Avatar
} from '@mui/material'
import { red } from '@mui/material/colors'
import FavoriteIcon from '@mui/icons-material/Favorite';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EventNoteIcon from '@mui/icons-material/EventNote';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';
function ProfilListe() {
    return (
        <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Avatar sx={{ bgcolor: red[600], marginRight: '8px' }}>P</Avatar>
                <Typography sx={{ fontWeight: "bold" }}>Profil</Typography>
            </Box>
            <List>
                <ListItem disablePadding>
                    <Link to="hesabim" style={{textDecoration:"none",color:"black"}}>
                        <ListItemButton>
                            <ListItemIcon>
                                <AccountCircleIcon fontSize='large' />
                            </ListItemIcon>

                            <ListItemText>
                                <Typography variant='h6' sx={{ fontWeight: "bold", fontFamily: "serif" }}>
                                    Hesabım
                                </Typography>
                            </ListItemText>
                        </ListItemButton>
                    </Link>

                </ListItem>
                <ListItem disablePadding>
                    <Link to="siparislerim" style={{textDecoration:"none",color:"black"}}>
                        <ListItemButton>
                            <ListItemIcon>
                                <EventNoteIcon fontSize='large' />
                            </ListItemIcon>
                            <ListItemText>
                                <Typography variant='h6' sx={{ fontWeight: "bold", fontFamily: "serif"}}>
                                    Siparişlerim
                                </Typography>
                            </ListItemText>
                        </ListItemButton>
                    </Link>

                </ListItem>
                <ListItem disablePadding>
                    <Link to="favorilerim" style={{textDecoration:"none",color:"black"}}>
                        <ListItemButton>
                            <ListItemIcon>
                                <FavoriteIcon fontSize='large' />
                            </ListItemIcon>
                            <ListItemText>
                                <Typography variant='h6' sx={{ fontWeight: "bold", fontFamily: "revert" }}>
                                    Favorilerim
                                </Typography>
                            </ListItemText>
                        </ListItemButton>
                    </Link>

                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <LogoutIcon fontSize='large' />
                        </ListItemIcon>
                        <ListItemText>
                            <Typography variant='h6' sx={{ fontWeight: "bold", fontFamily: "revert" }}>
                                Çıkış
                            </Typography>
                        </ListItemText>
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    )
}

export default ProfilListe