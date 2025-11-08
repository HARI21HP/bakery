import React from 'react';
import { Container, Box, Typography, Grid, Card, CardContent } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { theme } from '../constants';

const CakeVarietiesPage: React.FC = () => {
  const navigate = useNavigate();

  const varieties = [
    {
      name: 'Brownies',
      path: '/cakes/brownie',
      image: 'https://images.unsplash.com/photo-1606312619723-3abef7bbd373?w=400',
    },
    {
      name: 'Jar Cakes',
      path: '/cakes/jar-cake',
      image: 'https://images.unsplash.com/photo-1612197594562-9380ccd8f1b1?w=400',
    },
    {
      name: 'Dream Cakes',
      path: '/cakes/dream-cake',
      image: 'https://images.unsplash.com/photo-1589919249903-c38f96a1a8c1?w=400',
    },
    {
      name: 'Cupcakes',
      path: '/cakes/cup-cake',
      image: 'https://images.unsplash.com/photo-1606312619651-1a1f3d3eabcf?w=400',
    },
  ];

  return (
    <Box
      sx={{
        minHeight: '100vh',
        py: 6,
        background: `
          radial-gradient(circle at 25% 25%, rgba(255, 182, 193, 0.15) 0%, transparent 50%),
          radial-gradient(circle at 75% 75%, rgba(255, 192, 203, 0.12) 0%, transparent 50%),
          radial-gradient(circle at 75% 25%, rgba(255, 182, 193, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 25% 75%, rgba(255, 192, 203, 0.1) 0%, transparent 50%),
          repeating-conic-gradient(from 0deg at 50% 50%, transparent 0deg, rgba(255, 182, 193, 0.03) 30deg, transparent 60deg),
          ${theme.backgroundColor}
        `,
        position: 'relative',
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Typography variant="h3" gutterBottom textAlign="center" fontWeight="bold" sx={{ mb: 4 }}>
          Cake Varieties
        </Typography>
        <Typography variant="h6" textAlign="center" sx={{ mb: 6, color: theme.secondaryColor }}>
          Explore our delicious collection of handcrafted treats
        </Typography>
        <Grid container spacing={4}>
          {varieties.map((variety) => (
            <Grid item xs={12} sm={6} md={3} key={variety.path}>
              <Card
                sx={{
                  cursor: 'pointer',
                  transition: 'transform 0.3s',
                  '&:hover': { transform: 'scale(1.05)' },
                }}
                onClick={() => navigate(variety.path)}
              >
                <Box
                  component="img"
                  src={variety.image}
                  alt={variety.name}
                  sx={{ width: '100%', height: 250, objectFit: 'cover' }}
                />
                <CardContent>
                  <Typography variant="h5" textAlign="center" fontWeight="600">
                    {variety.name}
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

export default CakeVarietiesPage;
