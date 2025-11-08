import React from 'react';
import { Container, Box, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';
import { offers, theme } from '../constants';

const OffersPage: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: theme.backgroundColor,
        minHeight: '100vh',
        py: 6,
        backgroundImage: 'url(https://images.unsplash.com/photo-1595295333158-4742f28fbd85?w=1600&q=30)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(255, 248, 248, 0.94)',
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Typography variant="h3" gutterBottom textAlign="center" fontWeight="bold" sx={{ mb: 6 }}>
          Special Offers
        </Typography>
        <Grid container spacing={4}>
          {offers.map((offer) => (
            <Grid item xs={12} md={6} key={offer.id}>
              <Card sx={{ height: '100%' }}>
                {offer.image && (
                  <CardMedia
                    component="img"
                    height="250"
                    image={offer.image}
                    alt={offer.title}
                  />
                )}
                <CardContent>
                  <Typography variant="h5" gutterBottom fontWeight="600" color="primary">
                    {offer.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {offer.details}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default OffersPage;
