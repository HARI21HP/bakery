import React from 'react';
import { Container, Box, Typography, Paper, Divider } from '@mui/material';
import { theme } from '../constants';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <Box sx={{ backgroundColor: theme.backgroundColor, minHeight: '100vh', py: 6 }}>
      <Container maxWidth="md">
        <Typography variant="h3" gutterBottom textAlign="center" fontWeight="bold" sx={{ mb: 4 }}>
          Privacy Policy
        </Typography>
        
        <Paper sx={{ p: 4 }}>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            Last Updated: November 8, 2025
          </Typography>
          
          <Divider sx={{ my: 3 }} />
          
          <Typography variant="h5" gutterBottom fontWeight="600" sx={{ mt: 3 }}>
            1. Information We Collect
          </Typography>
          <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
            At Pastry Palace, we collect information that you provide directly to us when you:
          </Typography>
          <Typography variant="body1" component="div" sx={{ pl: 3, mb: 2 }}>
            • Create an account or register
            <br />
            • Place an order or make a purchase
            <br />
            • Subscribe to our newsletter
            <br />
            • Contact us for customer support
            <br />
            • Provide feedback or reviews
          </Typography>
          
          <Typography variant="h5" gutterBottom fontWeight="600" sx={{ mt: 3 }}>
            2. How We Use Your Information
          </Typography>
          <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
            We use the information we collect to:
          </Typography>
          <Typography variant="body1" component="div" sx={{ pl: 3, mb: 2 }}>
            • Process and fulfill your orders
            <br />
            • Send you order confirmations and updates
            <br />
            • Respond to your questions and provide customer support
            <br />
            • Send you marketing communications (with your consent)
            <br />
            • Improve our products and services
            <br />
            • Prevent fraud and enhance security
          </Typography>
          
          <Typography variant="h5" gutterBottom fontWeight="600" sx={{ mt: 3 }}>
            3. Information Sharing
          </Typography>
          <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
            We do not sell, trade, or rent your personal information to third parties. We may share your 
            information with:
          </Typography>
          <Typography variant="body1" component="div" sx={{ pl: 3, mb: 2 }}>
            • Service providers who help us operate our business
            <br />
            • Payment processors to complete transactions
            <br />
            • Delivery partners to ship your orders
            <br />
            • Legal authorities when required by law
          </Typography>
          
          <Typography variant="h5" gutterBottom fontWeight="600" sx={{ mt: 3 }}>
            4. Data Security
          </Typography>
          <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
            We implement appropriate technical and organizational measures to protect your personal 
            information against unauthorized access, alteration, disclosure, or destruction. However, 
            no method of transmission over the Internet is 100% secure.
          </Typography>
          
          <Typography variant="h5" gutterBottom fontWeight="600" sx={{ mt: 3 }}>
            5. Cookies and Tracking
          </Typography>
          <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
            We use cookies and similar tracking technologies to enhance your browsing experience, 
            analyze site traffic, and understand where our visitors are coming from. You can control 
            cookies through your browser settings.
          </Typography>
          
          <Typography variant="h5" gutterBottom fontWeight="600" sx={{ mt: 3 }}>
            6. Your Rights
          </Typography>
          <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
            You have the right to:
          </Typography>
          <Typography variant="body1" component="div" sx={{ pl: 3, mb: 2 }}>
            • Access your personal information
            <br />
            • Correct inaccurate information
            <br />
            • Request deletion of your information
            <br />
            • Opt-out of marketing communications
            <br />
            • Object to processing of your information
          </Typography>
          
          <Typography variant="h5" gutterBottom fontWeight="600" sx={{ mt: 3 }}>
            7. Children's Privacy
          </Typography>
          <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
            Our services are not intended for children under 13 years of age. We do not knowingly 
            collect personal information from children under 13.
          </Typography>
          
          <Typography variant="h5" gutterBottom fontWeight="600" sx={{ mt: 3 }}>
            8. Changes to This Policy
          </Typography>
          <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
            We may update this Privacy Policy from time to time. We will notify you of any changes 
            by posting the new Privacy Policy on this page and updating the "Last Updated" date.
          </Typography>
          
          <Typography variant="h5" gutterBottom fontWeight="600" sx={{ mt: 3 }}>
            9. Contact Us
          </Typography>
          <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
            If you have any questions about this Privacy Policy, please contact us at:
            <br />
            Email: privacy@pastrypalace.com
            <br />
            Phone: +91 1234567890
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
};

export default PrivacyPolicyPage;
