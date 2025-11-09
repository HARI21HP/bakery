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
  MenuItem,
  Alert,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from '@mui/material';
import { theme } from '../constants';
import { sendCustomizeToTelegram } from '../lib/telegramService';

const CustomizePage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    cakeType: '',
    size: '0.5',
    flavor: '',
    frosting: '',
    fillings: [] as string[],
    toppers: [] as string[],
    specialRequests: '',
    preferredDate: '',
    budget: '',
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const fillingOptions = ['Chocolate', 'Vanilla', 'Strawberry', 'Caramel', 'Cream Cheese'];
  const topperOptions = ['Sprinkles', 'Pearls', 'Flowers', 'Edible Gold', 'Fresh Fruits'];

  const handleChange = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleFillingChange = (filling: string) => {
    setFormData((prev) => ({
      ...prev,
      fillings: prev.fillings.includes(filling)
        ? prev.fillings.filter((f) => f !== filling)
        : [...prev.fillings, filling],
    }));
  };

  const handleTopperChange = (topper: string) => {
    setFormData((prev) => ({
      ...prev,
      toppers: prev.toppers.includes(topper)
        ? prev.toppers.filter((t) => t !== topper)
        : [...prev.toppers, topper],
    }));
  };

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.phone || !formData.cakeType || !formData.flavor) {
      setMessage({ type: 'error', text: 'Please fill in all required fields' });
      return;
    }

    setLoading(true);
    try {
      const result = await sendCustomizeToTelegram({
        customerName: formData.name,
        email: formData.email,
        phone: formData.phone,
        cakeType: formData.cakeType,
        size: formData.size,
        flavor: formData.flavor,
        frosting: formData.frosting,
        fillings: formData.fillings,
        toppers: formData.toppers,
        specialRequests: formData.specialRequests,
        preferredDate: formData.preferredDate,
        budget: formData.budget ? parseFloat(formData.budget) : undefined,
      });

      if (result.success) {
        setMessage({ type: 'success', text: 'Customization request submitted! We will contact you soon.' });
        setFormData({
          name: '',
          email: '',
          phone: '',
          cakeType: '',
          size: '0.5',
          flavor: '',
          frosting: '',
          fillings: [],
          toppers: [],
          specialRequests: '',
          preferredDate: '',
          budget: '',
        });
      } else {
        setMessage({ type: 'error', text: result.error || 'Failed to submit customization request' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'An error occurred while submitting your request' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        py: 6,
        background: `
          radial-gradient(circle at 50% 50%, rgba(255, 182, 193, 0.1) 0%, transparent 60%),
          repeating-radial-gradient(circle at 50% 50%, transparent 0, transparent 40px, rgba(255, 182, 193, 0.04) 40px, rgba(255, 182, 193, 0.04) 80px),
          conic-gradient(from 0deg at 50% 50%, rgba(255, 192, 203, 0.02) 0deg, transparent 90deg, rgba(255, 182, 193, 0.02) 180deg, transparent 270deg),
          ${theme.backgroundColor}
        `,
        position: 'relative',
      }}
    >
      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
        <Typography variant="h3" gutterBottom textAlign="center" fontWeight="bold" sx={{ mb: 4 }}>
          Customize Your Cake
        </Typography>
        <Card>
          <CardContent sx={{ p: 4 }}>
            {message && (
              <Alert severity={message.type} sx={{ mb: 3 }}>
                {message.text}
              </Alert>
            )}
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Typography variant="h6" fontWeight="bold">
                  Your Information
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  required
                  label="Name"
                  value={formData.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  required
                  label="Email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  required
                  label="Phone"
                  value={formData.phone}
                  onChange={(e) => handleChange('phone', e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Preferred Delivery Date"
                  type="date"
                  value={formData.preferredDate}
                  onChange={(e) => handleChange('preferredDate', e.target.value)}
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>

              <Grid item xs={12}>
                <Typography variant="h6" fontWeight="bold">
                  Cake Design
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  select
                  fullWidth
                  required
                  label="Cake Type"
                  value={formData.cakeType}
                  onChange={(e) => handleChange('cakeType', e.target.value)}
                >
                  <MenuItem value="">-- Select Type --</MenuItem>
                  <MenuItem value="sponge">Sponge Cake</MenuItem>
                  <MenuItem value="chocolate">Chocolate Cake</MenuItem>
                  <MenuItem value="butter">Butter Cake</MenuItem>
                  <MenuItem value="eggless">Eggless Cake</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  select
                  fullWidth
                  required
                  label="Size (kg)"
                  value={formData.size}
                  onChange={(e) => handleChange('size', e.target.value)}
                >
                  <MenuItem value="0.5">0.5 kg</MenuItem>
                  <MenuItem value="1">1 kg</MenuItem>
                  <MenuItem value="1.5">1.5 kg</MenuItem>
                  <MenuItem value="2">2 kg</MenuItem>
                  <MenuItem value="3">3 kg</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  select
                  fullWidth
                  required
                  label="Flavor"
                  value={formData.flavor}
                  onChange={(e) => handleChange('flavor', e.target.value)}
                >
                  <MenuItem value="">-- Select Flavor --</MenuItem>
                  <MenuItem value="chocolate">Chocolate</MenuItem>
                  <MenuItem value="vanilla">Vanilla</MenuItem>
                  <MenuItem value="strawberry">Strawberry</MenuItem>
                  <MenuItem value="red-velvet">Red Velvet</MenuItem>
                  <MenuItem value="butterscotch">Butterscotch</MenuItem>
                  <MenuItem value="pineapple">Pineapple</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  select
                  fullWidth
                  label="Frosting"
                  value={formData.frosting}
                  onChange={(e) => handleChange('frosting', e.target.value)}
                >
                  <MenuItem value="">-- Select Frosting --</MenuItem>
                  <MenuItem value="cream-cheese">Cream Cheese</MenuItem>
                  <MenuItem value="buttercream">Buttercream</MenuItem>
                  <MenuItem value="fondant">Fondant</MenuItem>
                  <MenuItem value="ganache">Ganache</MenuItem>
                </TextField>
              </Grid>

              <Grid item xs={12}>
                <Typography variant="subtitle1" fontWeight="bold">
                  Fillings (Select multiple)
                </Typography>
                <FormGroup row>
                  {fillingOptions.map((filling) => (
                    <FormControlLabel
                      key={filling}
                      control={
                        <Checkbox
                          checked={formData.fillings.includes(filling)}
                          onChange={() => handleFillingChange(filling)}
                        />
                      }
                      label={filling}
                    />
                  ))}
                </FormGroup>
              </Grid>

              <Grid item xs={12}>
                <Typography variant="subtitle1" fontWeight="bold">
                  Toppers (Select multiple)
                </Typography>
                <FormGroup row>
                  {topperOptions.map((topper) => (
                    <FormControlLabel
                      key={topper}
                      control={
                        <Checkbox
                          checked={formData.toppers.includes(topper)}
                          onChange={() => handleTopperChange(topper)}
                        />
                      }
                      label={topper}
                    />
                  ))}
                </FormGroup>
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Budget (₹)"
                  type="number"
                  value={formData.budget}
                  onChange={(e) => handleChange('budget', e.target.value)}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  multiline
                  rows={4}
                  label="Special Instructions / Comments"
                  value={formData.specialRequests}
                  onChange={(e) => handleChange('specialRequests', e.target.value)}
                  placeholder="Message on cake, specific decorations, allergies, etc."
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  fullWidth
                  size="large"
                  onClick={handleSubmit}
                  disabled={loading}
                  sx={{ backgroundColor: theme.primaryColor, color: theme.secondaryColor }}
                >
                  {loading ? 'Submitting...' : 'Submit Customization Request'}
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default CustomizePage;
