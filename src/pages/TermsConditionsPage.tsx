import React from 'react';
import { Container, Box, Typography, Paper, Divider } from '@mui/material';
import { theme } from '../constants';

const TermsConditionsPage: React.FC = () => {
  return (
    <Box sx={{ backgroundColor: theme.backgroundColor, minHeight: '100vh', py: 6 }}>
      <Container maxWidth="md">
        <Typography variant="h3" gutterBottom textAlign="center" fontWeight="bold" sx={{ mb: 4 }}>
          Terms & Conditions
        </Typography>
        
        <Paper sx={{ p: 4 }}>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            Last Updated: November 8, 2025
          </Typography>
          
          <Divider sx={{ my: 3 }} />
          
          <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
            Welcome to Pastry Palace! These Terms and Conditions outline the rules and regulations 
            for the use of our website and services.
          </Typography>
          
          <Typography variant="h5" gutterBottom fontWeight="600" sx={{ mt: 3 }}>
            1. Acceptance of Terms
          </Typography>
          <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
            By accessing and using this website, you accept and agree to be bound by these Terms 
            and Conditions. If you do not agree with any part of these terms, you must not use our website.
          </Typography>
          
          <Typography variant="h5" gutterBottom fontWeight="600" sx={{ mt: 3 }}>
            2. Use of Website
          </Typography>
          <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
            You agree to use this website only for lawful purposes and in a way that does not infringe 
            the rights of, restrict, or inhibit anyone else's use and enjoyment of the website.
          </Typography>
          
          <Typography variant="h5" gutterBottom fontWeight="600" sx={{ mt: 3 }}>
            3. Orders and Payment
          </Typography>
          <Typography variant="body1" component="div" sx={{ lineHeight: 1.8, mb: 2 }}>
            • All orders are subject to acceptance and availability
            <br />
            • Prices are subject to change without notice
            <br />
            • Payment must be made in full before order processing
            <br />
            • We accept various payment methods including UPI, cards, and cash on delivery
            <br />
            • You must provide accurate billing and delivery information
          </Typography>
          
          <Typography variant="h5" gutterBottom fontWeight="600" sx={{ mt: 3 }}>
            4. Product Information
          </Typography>
          <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
            We strive to display our products as accurately as possible. However, we cannot guarantee 
            that the colors and images you see accurately reflect the product's appearance. All weights, 
            measurements, and descriptions are approximate.
          </Typography>
          
          <Typography variant="h5" gutterBottom fontWeight="600" sx={{ mt: 3 }}>
            5. Delivery and Shipping
          </Typography>
          <Typography variant="body1" component="div" sx={{ lineHeight: 1.8, mb: 2 }}>
            • Delivery times are estimates and not guaranteed
            <br />
            • You must provide accurate delivery address
            <br />
            • Delivery charges may apply based on location
            <br />
            • We are not responsible for delays caused by factors beyond our control
            <br />
            • Perishable items must be inspected upon delivery
          </Typography>
          
          <Typography variant="h5" gutterBottom fontWeight="600" sx={{ mt: 3 }}>
            6. Cancellation and Refunds
          </Typography>
          <Typography variant="body1" component="div" sx={{ lineHeight: 1.8, mb: 2 }}>
            • Orders can be cancelled within 2 hours of placement
            <br />
            • Custom cake orders require 24 hours notice for cancellation
            <br />
            • Refunds will be processed within 7-10 business days
            <br />
            • We reserve the right to refuse returns on perishable goods
            <br />
            • Damaged or defective items will be replaced or refunded
          </Typography>
          
          <Typography variant="h5" gutterBottom fontWeight="600" sx={{ mt: 3 }}>
            7. Food Safety and Allergies
          </Typography>
          <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
            Our products may contain allergens including eggs, milk, nuts, and gluten. Please inform us 
            of any allergies when placing custom orders. We take precautions but cannot guarantee 
            allergen-free products.
          </Typography>
          
          <Typography variant="h5" gutterBottom fontWeight="600" sx={{ mt: 3 }}>
            8. Intellectual Property
          </Typography>
          <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
            All content on this website, including text, graphics, logos, and images, is the property 
            of Pastry Palace and protected by copyright laws. You may not reproduce, distribute, or 
            use any content without written permission.
          </Typography>
          
          <Typography variant="h5" gutterBottom fontWeight="600" sx={{ mt: 3 }}>
            9. User Accounts
          </Typography>
          <Typography variant="body1" component="div" sx={{ lineHeight: 1.8, mb: 2 }}>
            • You are responsible for maintaining account confidentiality
            <br />
            • You must provide accurate registration information
            <br />
            • We reserve the right to suspend or terminate accounts
            <br />
            • You must notify us immediately of any unauthorized access
          </Typography>
          
          <Typography variant="h5" gutterBottom fontWeight="600" sx={{ mt: 3 }}>
            10. Limitation of Liability
          </Typography>
          <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
            To the fullest extent permitted by law, Pastry Palace shall not be liable for any indirect, 
            incidental, special, or consequential damages arising from your use of our website or products.
          </Typography>
          
          <Typography variant="h5" gutterBottom fontWeight="600" sx={{ mt: 3 }}>
            11. Governing Law
          </Typography>
          <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
            These Terms and Conditions are governed by and construed in accordance with the laws of 
            India. Any disputes shall be subject to the exclusive jurisdiction of the courts in [Your City].
          </Typography>
          
          <Typography variant="h5" gutterBottom fontWeight="600" sx={{ mt: 3 }}>
            12. Changes to Terms
          </Typography>
          <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
            We reserve the right to modify these terms at any time. Changes will be effective immediately 
            upon posting to the website. Continued use of the website constitutes acceptance of modified terms.
          </Typography>
          
          <Typography variant="h5" gutterBottom fontWeight="600" sx={{ mt: 3 }}>
            13. Contact Information
          </Typography>
          <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
            For questions about these Terms and Conditions, please contact us:
            <br />
            Email: support@pastrypalace.com
            <br />
            Phone: +91 1234567890
            <br />
            Address: Pastry Palace, [Your Address]
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
};

export default TermsConditionsPage;
