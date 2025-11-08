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
} from '@mui/material';
import { theme } from '../constants';

const CustomizePage: React.FC = () => {
  const [formData, setFormData] = useState({
    kg: '0.5',
    flavour: '',
    shape: '',
    image: null as File | null,
    comments: '',
  });

  const handleChange = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, image: e.target.files![0] }));
    }
  };

  const handleSubmit = () => {
    alert('Customization request submitted! We will contact you soon.');
    console.log('Custom order:', formData);
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
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  select
                  fullWidth
                  label="Weight (kg)"
                  value={formData.kg}
                  onChange={(e) => handleChange('kg', e.target.value)}
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
                  label="Flavour"
                  value={formData.flavour}
                  onChange={(e) => handleChange('flavour', e.target.value)}
                >
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
                  label="Shape"
                  value={formData.shape}
                  onChange={(e) => handleChange('shape', e.target.value)}
                >
                  <MenuItem value="round">Round</MenuItem>
                  <MenuItem value="square">Square</MenuItem>
                  <MenuItem value="heart">Heart</MenuItem>
                  <MenuItem value="rectangle">Rectangle</MenuItem>
                  <MenuItem value="custom">Custom</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12}>
                <Button variant="outlined" component="label" fullWidth>
                  Upload Reference Image
                  <input type="file" hidden accept="image/*" onChange={handleImageUpload} />
                </Button>
                {formData.image && (
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    Selected: {formData.image.name}
                  </Typography>
                )}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  multiline
                  rows={4}
                  label="Special Instructions / Comments"
                  value={formData.comments}
                  onChange={(e) => handleChange('comments', e.target.value)}
                  placeholder="Any special requirements, message on cake, decorations, etc."
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  fullWidth
                  size="large"
                  onClick={handleSubmit}
                  sx={{ backgroundColor: theme.primaryColor, color: theme.secondaryColor }}
                >
                  Submit Customization Request
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
