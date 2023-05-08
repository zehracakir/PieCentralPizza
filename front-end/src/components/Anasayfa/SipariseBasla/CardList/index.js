import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Box, CardActionArea } from '@mui/material';
import { HashLink } from 'react-router-hash-link';


function CardList({ imageURL, title, link }) {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    }

    const handleMouseLeave = () => {
        setIsHovered(false);
    }

    return (
        <Grid item xs={6} sm={6} md={3} lg={2} sx={{ mb: 2, textAlign: 'center', justifyContent: 'center', maxWidth: '280' }}>
            <Card sx={{ maxWidth: 280, height: 220, boxShadow: 'none', position: 'relative' }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}>
                <CardActionArea>
                    <Box sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                        zIndex: 1,
                        backgroundColor: isHovered ? 'rgba(0, 0, 0, 0.5)' : 'transparent',
                        transition: 'background-color 0.3s ease',
                    }}>
                        <HashLink to={`${link}`} style={{ textDecoration: 'none', color: 'black' }} scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' })}
                        >
                            <CardMedia
                                sx={{ height: 180, position: 'relative', top: isHovered ? '-10px' : '0' }}
                                image={imageURL}
                            />
                            <CardContent sx={{ height: '40px' }}>
                                <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold', fontSize: "18px", textAlign: 'center', color: isHovered ? 'red' : 'inherit' }}>
                                    {title}
                                </Typography>
                            </CardContent>
                        </HashLink>

                    </Box>

                </CardActionArea>
            </Card>
        </Grid>
    )
}

export default CardList
