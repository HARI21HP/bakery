import React from 'react';
import {
  Container,
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  IconButton,
  Grid,
  Divider,
} from '@mui/material';
import { Add, Remove, Delete } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { theme } from '../constants';

const CartPage: React.FC = () => {
  const navigate = useNavigate();
  const { cart, updateQuantity, removeFromCart, getTotal } = useCart();

  return (
    <Box
      sx={{
        minHeight: '100vh',
        py: 6,
        background: `
          radial-gradient(circle at 20% 30%, rgba(255, 182, 193, 0.12) 0%, transparent 45%),
          radial-gradient(circle at 80% 70%, rgba(255, 192, 203, 0.12) 0%, transparent 45%),
          linear-gradient(45deg, transparent 45%, rgba(255, 182, 193, 0.02) 45%, rgba(255, 182, 193, 0.02) 55%, transparent 55%),
          linear-gradient(-45deg, transparent 45%, rgba(255, 192, 203, 0.02) 45%, rgba(255, 192, 203, 0.02) 55%, transparent 55%),
          ${theme.backgroundColor}
        `,
        backgroundSize: '100% 100%, 100% 100%, 60px 60px, 60px 60px, 100% 100%',
        position: 'relative',
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Typography variant="h3" gutterBottom textAlign="center" fontWeight="bold" sx={{ mb: 6 }}>
          Shopping Cart 🛒
        </Typography>
        {cart.length > 0 ? (
          <Grid container spacing={3}>
            <Grid item xs={12} md={8}>
              {cart.map((item) => (
                <Card key={item.id} sx={{ mb: 2 }}>
                  <CardContent>
                    <Grid container spacing={2} alignItems="center">
                      <Grid item xs={3}>
                        <Box
                          component="img"
                          src={item.image}
                          alt={item.title}
                          sx={{ width: '100%', height: 100, objectFit: 'cover', borderRadius: 1 }}
                        />
                      </Grid>
                      <Grid item xs={5}>
                        <Typography variant="h6">{item.title}</Typography>
                        <Typography variant="body2" color="text.secondary">
                          ₹{item.price}
                        </Typography>
                      </Grid>
                      <Grid item xs={3}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <IconButton
                            size="small"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            <Remove />
                          </IconButton>
                          <Typography>{item.quantity}</Typography>
                          <IconButton
                            size="small"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Add />
                          </IconButton>
                        </Box>
                      </Grid>
                      <Grid item xs={1}>
                        <IconButton color="error" onClick={() => removeFromCart(item.id)}>
                          <Delete />
                        </IconButton>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              ))}
            </Grid>
            <Grid item xs={12} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h5" gutterBottom fontWeight="600">
                    Order Summary
                  </Typography>
                  <Divider sx={{ my: 2 }} />
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography>Subtotal:</Typography>
                    <Typography>₹{getTotal()}</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                    <Typography>Delivery:</Typography>
                    <Typography>Free</Typography>
                  </Box>
                  <Divider sx={{ my: 2 }} />
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
                    <Typography variant="h6" fontWeight="bold">
                      Total:
                    </Typography>
                    <Typography variant="h6" fontWeight="bold" color="primary">
                      ₹{getTotal()}
                    </Typography>
                  </Box>
                  <Button
                    variant="contained"
                    fullWidth
                    size="large"
                    onClick={() => navigate('/checkout')}
                    sx={{ backgroundColor: theme.primaryColor, color: theme.secondaryColor }}
                  >
                    Proceed to Checkout
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        ) : (
          <Box sx={{ textAlign: 'center', py: 8 }}>
            <Typography variant="h5" color="text.secondary">
              Your cart is empty
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mt: 2, mb: 3 }}>
              Start adding some delicious treats!
            </Typography>
            <Button
              variant="contained"
              onClick={() => navigate('/')}
              sx={{ backgroundColor: theme.primaryColor, color: theme.secondaryColor }}
            >
              Browse Products
            </Button>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default CartPage;
