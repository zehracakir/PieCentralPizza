import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/joy/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { CardActionArea, CardActions } from '@mui/material';
import { useState } from 'react';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import IconButton from '@mui/joy/IconButton';
import { Link } from 'react-router-dom';
import style from './style.css'

function CardComponent({ imageUrl, name, description, price, link }) {
    const [isFavorite, setIsFavorite] = useState(false);

    const handleFavoriteClick = () => {
        setIsFavorite(!isFavorite);
    };
    return (
        <Grid item xs={12} sm={6} md={4} lg={3} sx={{ mb: 2 }}>

            <Card sx={{ maxWidth: 280, height: 'auto' }} className="card-image">
                <CardActionArea>
                    <IconButton onClick={handleFavoriteClick}
                        size="sm"
                        variant="plain"
                        color="neutral"
                        sx={{ ml: 'auto', alignSelf: 'flex-start' }}>
                        {isFavorite ? <FavoriteBorderRoundedIcon style={{ color: 'red' }} /> : <FavoriteBorderRoundedIcon />}
                    </IconButton>
                    <Link to={`/${link}/urun-detay`} style={{ textDecoration: 'none', color: 'black' }}>
                        <CardMedia
                            sx={{ height: 180 }}
                            image={imageUrl}
                        />
                        <CardContent sx={{ height: '95px' }}>
                            <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold', fontSize: "18px" }}>
                                {name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {description}
                            </Typography>
                        </CardContent>
                        <CardActions sx={{ display: 'flex' }}>
                            <div>
                                <Typography fontSize="lg" fontWeight="lg" sx={{ ml: 2, fontWeight: 'bold' }}>
                                    {price}
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
