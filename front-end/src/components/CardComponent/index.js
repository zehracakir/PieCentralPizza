import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/joy/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { CardActionArea, CardActions, Container } from '@mui/material';

function index({imageUrl,name,description,price}) {
    return (
        <Grid item xs={12} sm={6} md={3} sx={{ mb: 2 }}>
            <CardActionArea>
            <Card sx={{ maxWidth: 280, height: 380 }}>
                
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
                        <Typography fontSize="lg" fontWeight="lg" sx={{ ml: 2,fontWeight:'bold' }}>
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
                
                
            </Card>
            </CardActionArea>
        </Grid>
    )
}

export default index
