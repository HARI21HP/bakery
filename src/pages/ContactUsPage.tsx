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
  Paper,
  Alert,
} from '@mui/material';
import {
  Email,
  Phone,
  LocationOn,
  Schedule,
  Send,
} from '@mui/icons-material';
import { theme } from '../constants';

const ContactUsPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <Box
      sx={{
        backgroundColor: theme.backgroundColor,
        minHeight: '100vh',
        py: 6,
        backgroundImage: 'url(https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=1600&q=30)',
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
          backgroundColor: 'rgba(255, 248, 248, 0.95)',
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Typography variant="h3" gutterBottom textAlign="center" fontWeight="bold" sx={{ mb: 2 }}>
          Contact Us
        </Typography>
        <Typography variant="h6" textAlign="center" color="text.secondary" sx={{ mb: 6 }}>
          We'd love to hear from you! Get in touch with us.
        </Typography>

        <Grid container spacing={4}>
          {/* Contact Information */}
          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%' }}>
              <CardContent sx={{ p: 3 }}>
                <Typography variant="h5" fontWeight="600" gutterBottom>
                  Get In Touch
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  Have questions? We're here to help!
                </Typography>

                <Box sx={{ mt: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 3 }}>
                    <LocationOn sx={{ color: theme.primaryColor, mr: 2, mt: 0.5 }} />
                    <Box>
                      <Typography variant="subtitle2" fontWeight="600">
                        Address
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        123 Bakery Street
                        <br />
                        Sweet Town, ST 12345
                        <br />
                        India
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 3 }}>
                    <Phone sx={{ color: theme.primaryColor, mr: 2, mt: 0.5 }} />
                    <Box>
                      <Typography variant="subtitle2" fontWeight="600">
                        Phone
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        +91 1234567890
                        <br />
                        +91 0987654321
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 3 }}>
                    <Email sx={{ color: theme.primaryColor, mr: 2, mt: 0.5 }} />
                    <Box>
                      <Typography variant="subtitle2" fontWeight="600">
                        Email
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        info@pastrypalace.com
                        <br />
                        support@pastrypalace.com
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                    <Schedule sx={{ color: theme.primaryColor, mr: 2, mt: 0.5 }} />
                    <Box>
                      <Typography variant="subtitle2" fontWeight="600">
                        Business Hours
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Monday - Saturday: 9:00 AM - 8:00 PM
                        <br />
                        Sunday: 10:00 AM - 6:00 PM
                      </Typography>
                    </Box>
                  </Box>
                </Box>

                <Paper
                  sx={{
                    mt: 4,
                    p: 2,
                    backgroundColor: theme.primaryColor,
                    color: theme.secondaryColor,
                  }}
                >
                  <Typography variant="body2" fontWeight="600" gutterBottom>
                    Special Orders & Bulk Inquiries
                  </Typography>
                  <Typography variant="body2">
                    For custom cakes and bulk orders, please call us or email at
                    orders@pastrypalace.com
                  </Typography>
                </Paper>
              </CardContent>
            </Card>
          </Grid>

          {/* Contact Form */}
          <Grid item xs={12} md={8}>
            <Card>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h5" fontWeight="600" gutterBottom>
                  Send Us a Message
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  Fill out the form below and we'll get back to you as soon as possible.
                </Typography>

                {submitted && (
                  <Alert severity="success" sx={{ mb: 3 }}>
                    Thank you for contacting us! We'll respond within 24 hours.
                  </Alert>
                )}

                <form onSubmit={handleSubmit}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        required
                        label="Your Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Nila"
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
                        placeholder="nila@example.com"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Phone Number"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 1234567890"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        required
                        label="Subject"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="Order Inquiry"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        required
                        multiline
                        rows={6}
                        label="Your Message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us how we can help you..."
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        startIcon={<Send />}
                        sx={{
                          backgroundColor: theme.primaryColor,
                          color: theme.secondaryColor,
                          '&:hover': { backgroundColor: '#ff9db3' },
                        }}
                      >
                        Send Message
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </CardContent>
            </Card>

            {/* Map Placeholder */}
            <Paper sx={{ mt: 3, p: 3, textAlign: 'center', backgroundColor: '#f5f5f5' }}>
              <Typography variant="h6" gutterBottom>
                Visit Our Bakery
              </Typography>
              <Typography variant="body2" color="text.secondary" paragraph>
                Come visit us at our store to taste our fresh baked goods!
              </Typography>
              <Box
                sx={{
                  height: 250,
                  backgroundColor: '#e0e0e0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 1,
                }}
              >
                <Typography variant="body1" color="text.secondary">
                  [Map placeholder - Integrate Google Maps here]
                </Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactUsPage;
