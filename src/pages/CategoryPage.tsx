import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Box, Typography, Grid } from '@mui/material';
import ProductCard from '../components/ProductCard';
import { products, theme } from '../constants';

const CategoryPage: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  const categoryProducts = products.filter((p) => p.category === category);

  const categoryNames: Record<string, string> = {
    'brownie': 'Brownies',
    'jar-cake': 'Jar Cakes',
    'dream-cake': 'Dream Cakes',
    'cup-cake': 'Cupcakes',
  };

  return (
    <Box sx={{ backgroundColor: theme.backgroundColor, minHeight: '100vh', py: 6 }}>
      <Container maxWidth="lg">
        <Typography variant="h3" gutterBottom textAlign="center" fontWeight="bold" sx={{ mb: 6 }}>
          {categoryNames[category || ''] || 'Products'}
        </Typography>
        {categoryProducts.length > 0 ? (
          <Grid container spacing={3}>
            {categoryProducts.map((product) => (
              <Grid item xs={12} sm={6} md={4} key={product.id}>
                <ProductCard product={product} />
              </Grid>
            ))}
          </Grid>
        ) : (
          <Typography variant="h6" textAlign="center" color="text.secondary">
            No products available in this category yet.
          </Typography>
        )}
      </Container>
    </Box>
  );
};

export default CategoryPage;
