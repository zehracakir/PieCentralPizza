import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/joy/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { CardActionArea, CardActions } from '@mui/material';
import { useState, useEffect } from 'react';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import IconButton from '@mui/joy/IconButton';
import { Link } from 'react-router-dom';
import './style.css'
import { useAuth } from '../../contexts/AuthContext';
import { kullaniciFavoriEkle } from '../../api/UrunApi/api';
import { kullaniciFavorileriGetir } from '../../api/UrunApi/api';
import { kullaniciFavoriSil } from '../../api/UrunApi/api';
import { useQueryClient } from 'react-query';

function CardComponent({ resimUrl, urunAdi, urunDetay, urunOzellikler, urunFiyat, link, urunid }) {
    const queryClient = useQueryClient();
    const { user } = useAuth();
    const [isFavorite, setIsFavorite] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
            if(!user) return;
            const favoriler = await kullaniciFavorileriGetir(user._id);
            setIsFavorite(favoriler.data.favoriler.some((urun) => urun.urunAdi === urunAdi));
        };
        fetchData();
    }, [isFavorite]);
    const handleFavoriteClick = async () => {
        if(!isFavorite){
            await kullaniciFavoriEkle(user._id, urunid);
            setIsFavorite(!isFavorite);
            queryClient.invalidateQueries(['kullaniciFavorileri', user._id]);

        }else{
            await kullaniciFavoriSil(user._id, urunid);
            setIsFavorite(!isFavorite);
            queryClient.invalidateQueries(['kullaniciFavorileri', user._id]);

        }

    };
    return (
        <Grid item xs={12} sm={6} md={4} lg={3} sx={{ mb: 2 }}>

            <Card sx={{ maxWidth: 280, height: 'auto' }} className="card-image">
                    <IconButton onClick={handleFavoriteClick}
                        size="sm"
                        variant="plain"
                        color="neutral"
                        sx={{ ml: 'auto', justifyContent: 'flex-end', display: 'flex' }}>
                        {isFavorite ? <FavoriteBorderRoundedIcon style={{ color: '#dc3545' }} /> : <FavoriteBorderRoundedIcon />}
                    </IconButton>
                <CardActionArea>
                    <Link to={`/${link}/urun-detay/${urunid}`} style={{ textDecoration: 'none', color: 'black' }}>
                        <CardMedia
                            sx={{ height: 180 }}
                            image={resimUrl}
                        />
                        <CardContent sx={{ height: '95px' }}>
                            <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold', fontSize: "18px" }}>
                                {urunAdi}
                            </Typography>
                            <Typography variant="body2" >
                                {urunDetay}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {urunOzellikler.length > 0 ? urunOzellikler.map((ozellik, index) => {
                                    return (
                                        <React.Fragment key={index}>
                                            {ozellik}
                                            {index !== urunOzellikler.length - 1 && ','}
                                            &nbsp;
                                        </React.Fragment>
                                    );
                                }) : null}
                            </Typography>
                        </CardContent>
                        <CardActions sx={{ display: 'flex' }}>
                            <div>
                                <Typography fontSize="lg" fontWeight="lg" sx={{ ml: 2, fontWeight: 'bold' }}>
                                    {urunFiyat} TL
                                </Typography>
                            </div>
                            <Button
                                variant="solid"
                                size="md"
                                color="danger"
                                sx={{ ml: 'auto', mr: 2, borderRadius: 20, textTransform: 'none' }}
                            >
                                Sipariş Ver
                            </Button>
                        </CardActions >
                    </Link>

                </CardActionArea>
            </Card>

        </Grid>
    )
}

export default CardComponent
