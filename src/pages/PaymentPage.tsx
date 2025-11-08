import React, { useState } from 'react';
import {
  Container,
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  RadioGroup,
  FormControlLabel,
  Radio,
  Alert,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { theme } from '../constants';

const PaymentPage: React.FC = () => {
  const navigate = useNavigate();
  const { getTotal, clearCart } = useCart();
  const [paymentMethod, setPaymentMethod] = useState('card');

  const handlePayment = () => {
    // Simulate payment processing
    setTimeout(() => {
      alert('Payment successful! Thank you for your order.');
      clearCart();
      navigate('/');
    }, 1000);
  };

  return (
    <Box sx={{ backgroundColor: theme.backgroundColor, minHeight: '100vh', py: 6 }}>
      <Container maxWidth="sm">
        <Typography variant="h3" gutterBottom textAlign="center" fontWeight="bold" sx={{ mb: 4 }}>
          Payment
        </Typography>
        <Card>
          <CardContent sx={{ p: 4 }}>
            <Alert severity="info" sx={{ mb: 3 }}>
              This is a demo payment page. No actual payment will be processed.
            </Alert>
            <Box sx={{ mb: 3 }}>
              <Typography variant="h6" gutterBottom>
                Order Total: ₹{getTotal()}
              </Typography>
            </Box>
            <Typography variant="subtitle1" gutterBottom fontWeight="600">
              Select Payment Method
            </Typography>
            <RadioGroup
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              sx={{ mb: 3 }}
            >
              <FormControlLabel value="card" control={<Radio />} label="Credit/Debit Card" />
              <FormControlLabel value="upi" control={<Radio />} label="UPI" />
              <FormControlLabel value="cod" control={<Radio />} label="Cash on Delivery" />
            </RadioGroup>
            <Button
              variant="contained"
              fullWidth
              size="large"
              onClick={handlePayment}
              sx={{ backgroundColor: theme.primaryColor, color: theme.secondaryColor }}
            >
              Complete Payment
            </Button>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default PaymentPage;
