import React from 'react';
import { Container, Box, Typography } from '@mui/material';
import { theme } from '../constants';

const NilasTreatsPage: React.FC = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        py: 6,
        background: `
          radial-gradient(ellipse at 30% 20%, rgba(255, 182, 193, 0.18) 0%, transparent 60%),
          radial-gradient(ellipse at 70% 80%, rgba(255, 192, 203, 0.15) 0%, transparent 60%),
          repeating-linear-gradient(90deg, transparent, transparent 50px, rgba(255, 182, 193, 0.03) 50px, rgba(255, 182, 193, 0.03) 100px),
          repeating-linear-gradient(0deg, transparent, transparent 50px, rgba(255, 192, 203, 0.03) 50px, rgba(255, 192, 203, 0.03) 100px),
          ${theme.backgroundColor}
        `,
        position: 'relative',
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Typography variant="h3" gutterBottom textAlign="center" fontWeight="bold" sx={{ mb: 4 }}>
          Nila's Treats
        </Typography>
        <Box
          sx={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=1000&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: 450,
            borderRadius: 3,
            mb: 4,
            boxShadow: 3,
            position: 'relative',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.3) 100%)',
              borderRadius: 3,
            },
          }}
        />
        <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
          Discover Exclusive Handmade Delights
        </Typography>
        <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
          Welcome to Nila's special collection! As our passionate home baker, Nila crafts each treat
          with love and attention to detail. Every item in this collection represents hours of
          perfecting recipes, selecting the finest ingredients, and baking with heart.
        </Typography>
        <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
          From classic favorites to innovative creations, Nila's treats are made fresh to order,
          ensuring you get the best quality and taste. Each cake tells a story of tradition,
          creativity, and the joy of home baking.
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.8, fontStyle: 'italic' }}>
          "Baking is not just my passion, it's my way of spreading happiness one slice at a time." - Nila
        </Typography>
      </Container>
    </Box>
  );
};

export default NilasTreatsPage;
