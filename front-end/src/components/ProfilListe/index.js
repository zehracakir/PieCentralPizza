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
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Link } from 'react-router-dom';
function ProfilListe() {
    return (
        <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Avatar sx={{ bgcolor: red[600], marginRight: '8px', width: 50, height: 50 }} src='https://raw.githubusercontent.com/SDU-Bilgisayar-Muhendisligi/PieCentralPizza/yusuf/photos/avatar.png'></Avatar>
                <Typography variant='h6' sx={{ fontWeight: "bold" }}>Profil</Typography>
            </Box>
            <List sx={{ width: "100%" }}>
                <ListItem sx={{ display: "block", width: "90%" }}>
                    <Link to="hesabim" style={{ textDecoration: "none", color: "black" }}>
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
                <ListItem sx={{ display: "block", width: "90%" }}>
                    <Link to="adreslerim" style={{ textDecoration: "none", color: "black" }}>
                        <ListItemButton>
                            <ListItemIcon>
                                <LocationOnIcon fontSize='large' />
                            </ListItemIcon>

                            <ListItemText>
                                <Typography variant='h6' sx={{ fontWeight: "bold", fontFamily: "serif" }}>
                                    Adreslerim
                                </Typography>
                            </ListItemText>
                        </ListItemButton>
                    </Link>

                </ListItem>
                <ListItem sx={{ display: "block", width: "90%" }}>
                    <Link to="siparislerim" style={{ textDecoration: "none", color: "black" }}>
                        <ListItemButton>
                            <ListItemIcon>
                                <EventNoteIcon fontSize='large' />
                            </ListItemIcon>
                            <ListItemText>
                                <Typography variant='h6' sx={{ fontWeight: "bold", fontFamily: "serif" }}>
                                    Siparişlerim
                                </Typography>
                            </ListItemText>
                        </ListItemButton>
                    </Link>

                </ListItem>
                <ListItem sx={{ display: "block", width: "90%" }}>
                    <Link to="favorilerim" style={{ textDecoration: "none", color: "black" }}>
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
                <ListItem sx={{ display: "block", width: "90%" }}>
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