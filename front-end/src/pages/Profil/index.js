import React from 'react'
import {
    Container,
    Grid,
} from '@mui/material'
import ProfilListe from '../../components/ProfilListe';
import { Outlet } from 'react-router-dom';
// mt 15; mb 10
function Profil() {
    return (
        <Container sx={{ mt: 5, mb: 10, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Grid container>
                <Grid item xs={12} md={4}>
                    <ProfilListe />
                </Grid>
                <Grid item xs={12} md={8}>
                    <Outlet />
                </Grid>
            </Grid>
        </Container>
    )
}

export default Profil