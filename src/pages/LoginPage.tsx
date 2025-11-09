import React, { useState } from 'react';
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  Grid,
  Link as MuiLink,
  Alert,
  Divider,
} from '@mui/material';
import { LockOutlined } from '@mui/icons-material';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { theme } from '../constants';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { login, isLoading } = useAuth();
  
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');

  const from = (location.state as any)?.from?.pathname || '/';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!formData.email || !formData.password) {
      setError('Please fill in all fields');
      return;
    }

    const { success, error: authError } = await login(formData.email, formData.password);
    if (success) {
      navigate(from, { replace: true });
    } else {
      setError(authError || 'Invalid credentials');
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: theme.backgroundColor,
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        py: 6,
        backgroundImage: 'url(https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=1600&q=30)',
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
      <Container maxWidth="sm" sx={{ position: 'relative', zIndex: 1 }}>
        <Card sx={{ boxShadow: 3 }}>
          <CardContent sx={{ p: 4 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 3 }}>
              <Box
                sx={{
                  backgroundColor: theme.primaryColor,
                  borderRadius: '50%',
                  p: 2,
                  mb: 2,
                }}
              >
                <LockOutlined sx={{ fontSize: 40, color: theme.secondaryColor }} />
              </Box>
              <Typography variant="h4" fontWeight="bold" gutterBottom>
                Welcome Back!
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Sign in to your Pastry Palace account
              </Typography>
            </Box>

            {error && (
              <Alert severity="error" sx={{ mb: 3 }}>
                {error}
              </Alert>
            )}

            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    required
                    type="email"
                    label="Email Address"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="nila@pastrypalace.com"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    required
                    type="password"
                    label="Password"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    placeholder="Enter your password"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    size="large"
                    disabled={isLoading}
                    sx={{
                      backgroundColor: theme.primaryColor,
                      color: theme.secondaryColor,
                      '&:hover': { backgroundColor: '#ff9db3' },
                    }}
                  >
                    {isLoading ? 'Signing In...' : 'Sign In'}
                  </Button>
                </Grid>
              </Grid>
            </form>

            <Divider sx={{ my: 3 }}>
              <Typography variant="body2" color="text.secondary">
                OR
              </Typography>
            </Divider>

            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="body2" color="text.secondary">
                Don't have an account?{' '}
                <MuiLink
                  component="button"
                  variant="body2"
                  onClick={() => navigate('/register')}
                  sx={{ color: theme.primaryColor, fontWeight: 600 }}
                >
                  Sign Up
                </MuiLink>
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                <MuiLink
                  component="button"
                  variant="body2"
                  onClick={() => alert('Password reset feature - Demo only')}
                  sx={{ color: theme.secondaryColor }}
                >
                  Forgot Password?
                </MuiLink>
              </Typography>
            </Box>

            <Alert severity="info" sx={{ mt: 3 }}>
              <Typography variant="body2">
                <strong>Supabase Auth Enabled:</strong> Configure Supabase credentials in .env.local to use real authentication
              </Typography>
            </Alert>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default LoginPage;
