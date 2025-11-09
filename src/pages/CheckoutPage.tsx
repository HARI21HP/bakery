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
  Alert,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { theme } from '../constants';
import { useCart } from '../contexts/CartContext';
import { sendOrderToTelegram } from '../lib/telegramService';

const CheckoutPage: React.FC = () => {
  const navigate = useNavigate();
  const { cart, getTotal, clearCart } = useCart();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    pincode: '',
  });

  const subtotal = getTotal();
  const tax = subtotal * 0.1; // 10% tax
  const total = subtotal + tax;

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.phone || !formData.address) {
      setMessage({ type: 'error', text: 'Please fill in all required fields' });
      return;
    }

    if (cart.length === 0) {
      setMessage({ type: 'error', text: 'Your cart is empty' });
      return;
    }

    setLoading(true);
    try {
      const orderId = `ORD-${Date.now()}`;
      const result = await sendOrderToTelegram({
        orderId,
        customerName: formData.name,
        email: formData.email,
        phone: formData.phone,
        items: cart.map((item) => ({
          name: item.title,
          quantity: item.quantity,
          price: item.price,
        })),
        subtotal,
        tax,
        total,
        deliveryAddress: `${formData.address}, ${formData.city}, ${formData.pincode}`,
      });

      if (result.success) {
        setMessage({ type: 'success', text: 'Order confirmed! You will be contacted shortly.' });
        clearCart();
        setTimeout(() => {
          navigate('/payment', { state: { orderId } });
        }, 2000);
      } else {
        setMessage({ type: 'error', text: result.error || 'Failed to submit order' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'An error occurred while processing your order' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ backgroundColor: theme.backgroundColor, minHeight: '100vh', py: 6 }}>
      <Container maxWidth="md">
        <Typography variant="h3" gutterBottom textAlign="center" fontWeight="bold" sx={{ mb: 4 }}>
          Checkout
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <Card>
              <CardContent sx={{ p: 4 }}>
                {message && (
                  <Alert severity={message.type} sx={{ mb: 3 }}>
                    {message.text}
                  </Alert>
                )}
                <Alert severity="info" sx={{ mb: 3 }}>
                  Please provide your delivery details
                </Alert>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      required
                      label="Full Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      required
                      type="email"
                      label="Email Address"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      required
                      label="Phone Number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      required
                      multiline
                      rows={3}
                      label="Delivery Address"
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="City"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="PIN Code"
                      value={formData.pincode}
                      onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      variant="contained"
                      fullWidth
                      size="large"
                      onClick={handleSubmit}
                      disabled={loading || cart.length === 0}
                      sx={{ backgroundColor: theme.primaryColor, color: theme.secondaryColor }}
                    >
                      {loading ? 'Processing...' : 'Confirm Order & Proceed'}
                    </Button>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  Order Summary
                </Typography>
                <TableContainer component={Paper} sx={{ mb: 2, boxShadow: 'none' }}>
                  <Table size="small">
                    <TableHead>
                      <TableRow sx={{ backgroundColor: theme.primaryColor }}>
                        <TableCell sx={{ color: theme.secondaryColor }}>Item</TableCell>
                        <TableCell align="right" sx={{ color: theme.secondaryColor }}>Qty</TableCell>
                        <TableCell align="right" sx={{ color: theme.secondaryColor }}>Total</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {cart.map((item) => (
                        <TableRow key={item.id}>
                          <TableCell>{item.title}</TableCell>
                          <TableCell align="right">{item.quantity}</TableCell>
                          <TableCell align="right">₹{(item.price * item.quantity).toFixed(2)}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
                <Box sx={{ borderTop: `2px solid ${theme.primaryColor}`, pt: 2 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography>Subtotal:</Typography>
                    <Typography>₹{subtotal.toFixed(2)}</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                    <Typography>Tax (10%):</Typography>
                    <Typography>₹{tax.toFixed(2)}</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography fontWeight="bold" variant="h6">
                      Total:
                    </Typography>
                    <Typography fontWeight="bold" variant="h6" sx={{ color: theme.primaryColor }}>
                      ₹{total.toFixed(2)}
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default CheckoutPage;
