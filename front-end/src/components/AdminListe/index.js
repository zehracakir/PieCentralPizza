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
import AddCircleIcon from '@mui/icons-material/AddCircle';
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';
import PeopleIcon from '@mui/icons-material/People';
import EventNoteIcon from '@mui/icons-material/EventNote';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
function AdminListe() {
    const { Logout } = useAuth();
    const location = useLocation(); // Sayfa yolunu alın
    const currentPath = location.pathname; // Sayfa yolunun tamamını alın
    return (
        <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Avatar sx={{ marginRight: '8px', width: 50, height: 50, bgcolor: '#dc3545' }}>A</Avatar>
                <Typography variant='h6' sx={{ fontWeight: "bold" }}>Admin</Typography>
            </Box>
            <List sx={{ width: "100%" }}>
                <ListItem sx={{ display: "block", width: "90%" }}>
                    <Link to="admin-yeni-urun" style={{ textDecoration: "none", color: "black" }}>
                        <ListItemButton >
                            <ListItemIcon >
                                <AddCircleIcon fontSize='large' sx={{ color: currentPath.includes('admin-yeni-urun') || currentPath === "/admin" ? '#dc3545' : 'grey' }} />
                            </ListItemIcon>

                            <ListItemText>
                                <Typography variant='h6' sx={{ fontWeight: "bold", fontFamily: "serif" }}>
                                    Yeni Ürün
                                </Typography>
                            </ListItemText>
                        </ListItemButton>
                    </Link>

                </ListItem>
                <ListItem sx={{ display: "block", width: "90%" }}>
                    <Link to="admin-urunler" style={{ textDecoration: "none", color: "black" }}>
                        <ListItemButton>
                            <ListItemIcon>
                                <LocalPizzaIcon fontSize='large' sx={{ color: currentPath.includes('admin-urunler') ? '#dc3545' : 'grey' }} />
                            </ListItemIcon>

                            <ListItemText>
                                <Typography variant='h6' sx={{ fontWeight: "bold", fontFamily: "serif" }}>
                                    Ürünler
                                </Typography>
                            </ListItemText>
                        </ListItemButton>
                    </Link>

                </ListItem>
                <ListItem sx={{ display: "block", width: "90%" }}>
                    <Link to="admin-kullanicilar" style={{ textDecoration: "none", color: "black" }}>
                        <ListItemButton>
                            <ListItemIcon>
                                <PeopleIcon fontSize='large' sx={{ color: currentPath.includes('admin-kullanicilar') ? '#dc3545' : 'grey' }} />
                            </ListItemIcon>
                            <ListItemText>
                                <Typography variant='h6' sx={{ fontWeight: "bold", fontFamily: "serif" }}>
                                    Kullanıcılar
                                </Typography>
                            </ListItemText>
                        </ListItemButton>
                    </Link>

                </ListItem>
                <ListItem sx={{ display: "block", width: "90%" }}>
                    <Link to="admin-siparisler" style={{ textDecoration: "none", color: "black" }}>
                        <ListItemButton>
                            <ListItemIcon>
                                <EventNoteIcon fontSize='large' sx={{ color: currentPath.includes('admin-siparisler') ? '#dc3545' : 'grey' }} />
                            </ListItemIcon>
                            <ListItemText>
                                <Typography variant='h6' sx={{ fontWeight: "bold", fontFamily: "serif" }}>
                                    Siparişler
                                </Typography>
                            </ListItemText>
                        </ListItemButton>
                    </Link>

                </ListItem>
                <ListItem sx={{ display: "block", width: "90%" }}>
                        <ListItemButton onClick={Logout}>
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

export default AdminListe