import React from 'react';
import { Box, Container, Typography, Link as MuiLink, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { theme } from '../constants';

const Footer: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: theme.secondaryColor,
        color: 'white',
        py: 4,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Typography variant="body1" sx={{ mb: 2 }}>
              © 2025 Pastry Palace. Crafted with love by Nila.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ display: 'flex', gap: 2, justifyContent: { xs: 'flex-start', md: 'flex-end' } }}>
              <MuiLink
                component="button"
                color="inherit"
                underline="hover"
                onClick={() => navigate('/privacy-policy')}
                sx={{ cursor: 'pointer' }}
              >
                Privacy Policy
              </MuiLink>
              <MuiLink
                component="button"
                color="inherit"
                underline="hover"
                onClick={() => navigate('/terms-conditions')}
                sx={{ cursor: 'pointer' }}
              >
                Terms & Conditions
              </MuiLink>
              <MuiLink
                component="button"
                color="inherit"
                underline="hover"
                onClick={() => navigate('/contact')}
                sx={{ cursor: 'pointer' }}
              >
                Contact Us
              </MuiLink>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
