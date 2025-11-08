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
  Switch,
  FormControlLabel,
} from '@mui/material';
import { theme, products } from '../constants';

const AdminPage: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [credentials, setCredentials] = useState({ username: '', password: '' });

  const handleLogin = () => {
    // Demo login - accept any credentials
    if (credentials.username && credentials.password) {
      setIsLoggedIn(true);
    } else {
      alert('Please enter credentials');
    }
  };

  if (!isLoggedIn) {
    return (
      <Box sx={{ backgroundColor: theme.backgroundColor, minHeight: '100vh', py: 6 }}>
        <Container maxWidth="sm">
          <Typography variant="h3" gutterBottom textAlign="center" fontWeight="bold" sx={{ mb: 4 }}>
            Admin Login 🔐
          </Typography>
          <Card>
            <CardContent sx={{ p: 4 }}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Username"
                    value={credentials.username}
                    onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    type="password"
                    label="Password"
                    value={credentials.password}
                    onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    fullWidth
                    size="large"
                    onClick={handleLogin}
                    sx={{ backgroundColor: theme.primaryColor, color: theme.secondaryColor }}
                  >
                    Login
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Container>
      </Box>
    );
  }

  return (
    <Box sx={{ backgroundColor: theme.backgroundColor, minHeight: '100vh', py: 6 }}>
      <Container maxWidth="lg">
        <Typography variant="h3" gutterBottom textAlign="center" fontWeight="bold" sx={{ mb: 4 }}>
          Admin Dashboard
        </Typography>
        <Card>
          <CardContent sx={{ p: 4 }}>
            <Typography variant="h5" gutterBottom fontWeight="600">
              Manage Products
            </Typography>
            <Grid container spacing={2} sx={{ mt: 2 }}>
              {products.map((product) => (
                <Grid item xs={12} key={product.id}>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      p: 2,
                      border: '1px solid #ddd',
                      borderRadius: 1,
                    }}
                  >
                    <Typography>{product.title}</Typography>
                    <FormControlLabel
                      control={<Switch defaultChecked={product.available} />}
                      label={product.available ? 'In Stock' : 'Out of Stock'}
                    />
                  </Box>
                </Grid>
              ))}
            </Grid>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default AdminPage;
