import React from 'react'
import {
    Container,
    Grid,
} from '@mui/material'
import AdminListe from '../../components/AdminListe';
import { Outlet } from 'react-router-dom';

function Admin() {
    return (
        <Container sx={{ mt: 15, mb: 10, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Grid container>
                <Grid item xs={12} md={4}>
                    <AdminListe />
                </Grid>
                <Grid item xs={12} md={8} maxWidth={'100%'}>
                    <Outlet />
                </Grid>
            </Grid>
        </Container>
    )
}

export default Admin
