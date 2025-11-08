import React from 'react';
import {
  Container,
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  Button,
  Avatar,
  Divider,
} from '@mui/material';
import { Email, Person, ShoppingBag, Favorite } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useCart } from '../contexts/CartContext';
import { useWishlist } from '../contexts/WishlistContext';
import { theme } from '../constants';

const ProfilePage: React.FC = () => {
  const navigate = useNavigate();
  const { user, isAuthenticated, logout } = useAuth();
  const { cart } = useCart();
  const { wishlist } = useWishlist();

  if (!isAuthenticated) {
    navigate('/login');
    return null;
  }

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <Box sx={{ backgroundColor: theme.backgroundColor, minHeight: '100vh', py: 6 }}>
      <Container maxWidth="md">
        <Typography variant="h3" gutterBottom textAlign="center" fontWeight="bold" sx={{ mb: 4 }}>
          My Profile
        </Typography>

        <Card sx={{ mb: 3 }}>
          <CardContent sx={{ p: 4 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
              <Avatar
                sx={{
                  width: 80,
                  height: 80,
                  backgroundColor: theme.primaryColor,
                  color: theme.secondaryColor,
                  fontSize: 32,
                  fontWeight: 'bold',
                  mr: 3,
                }}
              >
                {user?.name.charAt(0).toUpperCase()}
              </Avatar>
              <Box>
                <Typography variant="h5" fontWeight="600">
                  {user?.name}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {user?.email}
                </Typography>
              </Box>
            </Box>

            <Divider sx={{ my: 3 }} />

            <Grid container spacing={3}>
              <Grid item xs={12} sm={4}>
                <Box
                  sx={{
                    textAlign: 'center',
                    p: 2,
                    borderRadius: 2,
                    backgroundColor: theme.backgroundColor,
                  }}
                >
                  <Person sx={{ fontSize: 40, color: theme.primaryColor, mb: 1 }} />
                  <Typography variant="h6" fontWeight="600">
                    Profile
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Member
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Box
                  sx={{
                    textAlign: 'center',
                    p: 2,
                    borderRadius: 2,
                    backgroundColor: theme.backgroundColor,
                    cursor: 'pointer',
                  }}
                  onClick={() => navigate('/cart')}
                >
                  <ShoppingBag sx={{ fontSize: 40, color: theme.primaryColor, mb: 1 }} />
                  <Typography variant="h6" fontWeight="600">
                    {cart.length}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Items in Cart
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Box
                  sx={{
                    textAlign: 'center',
                    p: 2,
                    borderRadius: 2,
                    backgroundColor: theme.backgroundColor,
                    cursor: 'pointer',
                  }}
                  onClick={() => navigate('/wishlist')}
                >
                  <Favorite sx={{ fontSize: 40, color: theme.primaryColor, mb: 1 }} />
                  <Typography variant="h6" fontWeight="600">
                    {wishlist.length}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Wishlist Items
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        <Card>
          <CardContent sx={{ p: 4 }}>
            <Typography variant="h6" fontWeight="600" gutterBottom>
              Account Details
            </Typography>
            <Divider sx={{ my: 2 }} />
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Person sx={{ mr: 2, color: theme.secondaryColor }} />
                  <Box>
                    <Typography variant="body2" color="text.secondary">
                      Full Name
                    </Typography>
                    <Typography variant="body1" fontWeight="500">
                      {user?.name}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Email sx={{ mr: 2, color: theme.secondaryColor }} />
                  <Box>
                    <Typography variant="body2" color="text.secondary">
                      Email Address
                    </Typography>
                    <Typography variant="body1" fontWeight="500">
                      {user?.email}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
            <Divider sx={{ my: 3 }} />
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Button
                  variant="outlined"
                  fullWidth
                  onClick={() => alert('Edit profile feature - Demo only')}
                >
                  Edit Profile
                </Button>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button
                  variant="contained"
                  fullWidth
                  onClick={handleLogout}
                  sx={{
                    backgroundColor: theme.secondaryColor,
                    '&:hover': { backgroundColor: '#5a5563' },
                  }}
                >
                  Logout
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default ProfilePage;
