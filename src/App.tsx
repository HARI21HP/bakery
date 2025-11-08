import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline, Box } from '@mui/material';
import { CartProvider } from './contexts/CartContext';
import { WishlistProvider } from './contexts/WishlistContext';
import { AuthProvider } from './contexts/AuthContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProfilePage from './pages/ProfilePage';
import NilasTreatsPage from './pages/NilasTreatsPage';
import CakeVarietiesPage from './pages/CakeVarietiesPage';
import CategoryPage from './pages/CategoryPage';
import WishlistPage from './pages/WishlistPage';
import CartPage from './pages/CartPage';
import CustomizePage from './pages/CustomizePage';
import OffersPage from './pages/OffersPage';
import FeedbackPage from './pages/FeedbackPage';
import CheckoutPage from './pages/CheckoutPage';
import PaymentPage from './pages/PaymentPage';
import AdminPage from './pages/AdminPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsConditionsPage from './pages/TermsConditionsPage';
import ContactUsPage from './pages/ContactUsPage';
import { theme as customTheme } from './constants';

const muiTheme = createTheme({
  palette: {
    primary: {
      main: customTheme.primaryColor,
    },
    secondary: {
      main: customTheme.secondaryColor,
    },
    background: {
      default: customTheme.backgroundColor,
    },
  },
  typography: {
    fontFamily: customTheme.fontFamily,
  },
});

const App: React.FC = () => {
  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <BrowserRouter>
        <AuthProvider>
          <CartProvider>
            <WishlistProvider>
              <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                <Navbar />
                <Box component="main" sx={{ flexGrow: 1 }}>
                  <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/profile" element={<ProfilePage />} />
                    <Route path="/nilas-treats" element={<NilasTreatsPage />} />
                  <Route path="/cakes" element={<CakeVarietiesPage />} />
                  <Route path="/cakes/:category" element={<CategoryPage />} />
                  <Route path="/wishlist" element={<WishlistPage />} />
                  <Route path="/cart" element={<CartPage />} />
                  <Route path="/customize" element={<CustomizePage />} />
                  <Route path="/offers" element={<OffersPage />} />
                  <Route path="/feedback" element={<FeedbackPage />} />
                  <Route path="/checkout" element={<CheckoutPage />} />
                  <Route path="/payment" element={<PaymentPage />} />
                  <Route path="/admin" element={<AdminPage />} />
                  <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
                  <Route path="/terms-conditions" element={<TermsConditionsPage />} />
                  <Route path="/contact" element={<ContactUsPage />} />
                </Routes>
              </Box>
              <Footer />
            </Box>
          </WishlistProvider>
        </CartProvider>
        </AuthProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
