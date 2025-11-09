import React, { useState } from 'react';
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  Rating,
  Grid,
  Alert,
} from '@mui/material';
import { theme } from '../constants';
import { sendFeedbackToTelegram } from '../lib/telegramService';

const FeedbackPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    rating: 0,
    comments: '',
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.phone || !formData.comments) {
      setMessage({ type: 'error', text: 'Please fill in all fields' });
      return;
    }

    setLoading(true);
    try {
      const result = await sendFeedbackToTelegram({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.comments,
        rating: formData.rating,
      });

      if (result.success) {
        setMessage({ type: 'success', text: 'Thank you for your feedback! We will review it shortly.' });
        setFormData({ name: '', email: '', phone: '', rating: 0, comments: '' });
      } else {
        setMessage({ type: 'error', text: result.error || 'Failed to submit feedback' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'An error occurred while submitting feedback' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ backgroundColor: theme.backgroundColor, minHeight: '100vh', py: 6 }}>
      <Container maxWidth="sm">
        <Typography variant="h3" gutterBottom textAlign="center" fontWeight="bold" sx={{ mb: 4 }}>
          We'd Love Your Feedback
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
                <TextField
                  fullWidth
                  label="Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography component="legend" gutterBottom>
                  Rating
                </Typography>
                <Rating
                  value={formData.rating}
                  onChange={(_, value) => setFormData({ ...formData, rating: value || 0 })}
                  size="large"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  multiline
                  rows={4}
                  label="Comments"
                  value={formData.comments}
                  onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
                  placeholder="Tell us about your experience..."
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
                  {loading ? 'Submitting...' : 'Submit Feedback'}
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default FeedbackPage;
