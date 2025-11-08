import React from 'react';
import {
  Container,
  Box,
  Typography,
  Grid,
  Button,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { products, theme } from '../constants';

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const featuredProducts = products.filter((p) => p.category === 'featured');

  return (
    <Box
      sx={{
        background: `
          radial-gradient(circle at 15% 20%, rgba(255, 182, 193, 0.08) 0%, transparent 50%),
          radial-gradient(circle at 85% 80%, rgba(255, 192, 203, 0.08) 0%, transparent 50%),
          radial-gradient(circle at 50% 50%, rgba(255, 182, 193, 0.05) 0%, transparent 70%),
          repeating-linear-gradient(45deg, transparent, transparent 60px, rgba(255, 182, 193, 0.02) 60px, rgba(255, 182, 193, 0.02) 120px),
          ${theme.backgroundColor}
        `,
        minHeight: '100vh',
      }}
    >
      {/* Hero Section */}
      <Box
        sx={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=1600&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '600px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          textAlign: 'center',
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(135deg, rgba(255, 182, 193, 0.7) 0%, rgba(109, 104, 117, 0.7) 100%)',
          },
        }}
      >
        <Box sx={{ position: 'relative', zIndex: 1, px: 2 }}>
          <Typography variant="h2" gutterBottom fontWeight="bold">
            Welcome to Pastry Palace
          </Typography>
          <Typography variant="h5" sx={{ mb: 3 }}>
            Delight in every bite — handcrafted cakes and treats from our home bakery.
          </Typography>
          <Button
            variant="contained"
            size="large"
            onClick={() => navigate('/cakes')}
            sx={{
              backgroundColor: theme.primaryColor,
              color: theme.secondaryColor,
              '&:hover': { backgroundColor: '#ff9db3' },
            }}
          >
            Explore Our Collection
          </Button>
        </Box>
      </Box>

      {/* Featured Cakes Section */}
      <Container
        maxWidth="lg"
        sx={{
          py: 6,
          background: `
            radial-gradient(circle at 20% 30%, rgba(255, 182, 193, 0.12) 0%, transparent 40%),
            radial-gradient(circle at 80% 70%, rgba(255, 192, 203, 0.1) 0%, transparent 40%),
            repeating-radial-gradient(circle at 50% 50%, transparent 0, transparent 30px, rgba(255, 182, 193, 0.03) 30px, rgba(255, 182, 193, 0.03) 60px),
            ${theme.backgroundColor}
          `,
          position: 'relative',
        }}
      >
        <Box sx={{ position: 'relative', zIndex: 1 }}>
        <Typography variant="h4" gutterBottom textAlign="center" fontWeight="600" sx={{ mb: 4 }}>
          Featured Cakes
        </Typography>
        <Grid container spacing={3}>
          {featuredProducts.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
        </Box>
      </Container>

      {/* All Products Section */}
      <Container
        maxWidth="lg"
        sx={{
          py: 6,
          background: `
            radial-gradient(circle at 10% 20%, rgba(255, 182, 193, 0.1) 0%, transparent 35%),
            radial-gradient(circle at 90% 80%, rgba(255, 192, 203, 0.1) 0%, transparent 35%),
            radial-gradient(circle at 50% 50%, rgba(255, 182, 193, 0.05) 0%, transparent 50%),
            linear-gradient(45deg, transparent 48%, rgba(255, 182, 193, 0.02) 48%, rgba(255, 182, 193, 0.02) 52%, transparent 52%),
            linear-gradient(-45deg, transparent 48%, rgba(255, 192, 203, 0.02) 48%, rgba(255, 192, 203, 0.02) 52%, transparent 52%),
            ${theme.backgroundColor}
          `,
          backgroundSize: '100% 100%, 100% 100%, 100% 100%, 80px 80px, 80px 80px, 100% 100%',
          position: 'relative',
        }}
      >
        <Box sx={{ position: 'relative', zIndex: 1 }}>
        <Typography variant="h4" gutterBottom textAlign="center" fontWeight="600" sx={{ mb: 4 }}>
          Our Complete Collection
        </Typography>
        <Grid container spacing={3}>
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default HomePage;
