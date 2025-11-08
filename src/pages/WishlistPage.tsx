import React from 'react';
import { Container, Box, Typography, Grid } from '@mui/material';
import ProductCard from '../components/ProductCard';
import { useWishlist } from '../contexts/WishlistContext';
import { theme } from '../constants';

const WishlistPage: React.FC = () => {
  const { wishlist } = useWishlist();

  return (
    <Box
      sx={{
        minHeight: '100vh',
        py: 6,
        background: `
          radial-gradient(circle at 15% 15%, rgba(255, 182, 193, 0.15) 0%, transparent 40%),
          radial-gradient(circle at 85% 85%, rgba(255, 192, 203, 0.15) 0%, transparent 40%),
          radial-gradient(circle at 85% 15%, rgba(255, 182, 193, 0.1) 0%, transparent 40%),
          radial-gradient(circle at 15% 85%, rgba(255, 192, 203, 0.1) 0%, transparent 40%),
          repeating-linear-gradient(60deg, transparent, transparent 40px, rgba(255, 182, 193, 0.02) 40px, rgba(255, 182, 193, 0.02) 80px),
          ${theme.backgroundColor}
        `,
        position: 'relative',
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Typography variant="h3" gutterBottom textAlign="center" fontWeight="bold" sx={{ mb: 6 }}>
          My Wishlist ❤️
        </Typography>
        {wishlist.length > 0 ? (
          <Grid container spacing={3}>
            {wishlist.map((product) => (
              <Grid item xs={12} sm={6} md={4} key={product.id}>
                <ProductCard product={product} />
              </Grid>
            ))}
          </Grid>
        ) : (
          <Box sx={{ textAlign: 'center', py: 8 }}>
            <Typography variant="h5" color="text.secondary">
              Your wishlist is empty
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mt: 2 }}>
              Add items to your wishlist to save them for later!
            </Typography>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default WishlistPage;
