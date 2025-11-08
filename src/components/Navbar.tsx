import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Badge, Box, Menu, MenuItem } from '@mui/material';
import { ShoppingCart, Favorite, AccountCircle } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { useWishlist } from '../contexts/WishlistContext';
import { useAuth } from '../contexts/AuthContext';
import { theme } from '../constants';

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const { cart } = useCart();
  const { wishlist } = useWishlist();
  const { user, logout, isAuthenticated } = useAuth();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const menuItems = [
    { label: 'Home', path: '/' },
    { label: 'Nilas Treats', path: '/nilas-treats' },
    { label: 'Cake Varieties', path: '/cakes' },
    { label: 'Customize', path: '/customize' },
    { label: 'Offers', path: '/offers' },
    { label: 'Feedback', path: '/feedback' },
  ];

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    logout();
    handleMenuClose();
    navigate('/');
  };

  return (
    <AppBar position="sticky" sx={{ backgroundColor: theme.primaryColor }}>
      <Toolbar>
        <Box
          sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            flexGrow: 1, 
            cursor: 'pointer' 
          }}
          onClick={() => navigate('/')}
        >
          <Box
            component="img"
            src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=100&h=100&fit=crop&q=80"
            alt="Pastry Palace Logo"
            sx={{
              height: 45,
              width: 45,
              borderRadius: '50%',
              mr: 1.5,
              border: '3px solid white',
              objectFit: 'cover',
              boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
            }}
          />
          <Typography
            variant="h6"
            sx={{ fontWeight: 600, color: theme.secondaryColor }}
          >
            Pastry Palace
          </Typography>
        </Box>
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
          {menuItems.map((item) => (
            <Button
              key={item.path}
              sx={{ color: theme.secondaryColor }}
              onClick={() => navigate(item.path)}
            >
              {item.label}
            </Button>
          ))}
        </Box>
        <IconButton color="inherit" onClick={() => navigate('/wishlist')}>
          <Badge badgeContent={wishlist.length} color="error">
            <Favorite sx={{ color: theme.secondaryColor }} />
          </Badge>
        </IconButton>
        <IconButton color="inherit" onClick={() => navigate('/cart')}>
          <Badge badgeContent={cart.length} color="error">
            <ShoppingCart sx={{ color: theme.secondaryColor }} />
          </Badge>
        </IconButton>
        
        {isAuthenticated ? (
          <>
            <IconButton
              color="inherit"
              onClick={handleMenuOpen}
              sx={{ ml: 1 }}
            >
              <AccountCircle sx={{ color: theme.secondaryColor }} />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem disabled>
                <Typography variant="body2" fontWeight="600">
                  {user?.name}
                </Typography>
              </MenuItem>
              <MenuItem onClick={() => { handleMenuClose(); navigate('/profile'); }}>
                Profile
              </MenuItem>
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
          </>
        ) : (
          <Button
            sx={{ ml: 1, color: theme.secondaryColor }}
            onClick={() => navigate('/login')}
          >
            Login
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
