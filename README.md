# Pastry Palace 🧁

A modern online pastry shop web app featuring home-baked treats, customizable cakes, and secure online ordering. Built with React and Material-UI.

## Features

- 🏠 **Home Page** - Welcoming hero section with featured cakes
- � **Authentication** - Login/Register with user profile management
- 👤 **User Profile** - View account details, cart & wishlist summary
- �👩‍🍳 **Nila's Treats** - Special collection by our home baker
- 🎂 **Cake Varieties** - Browse by categories (Brownies, Jar Cakes, Dream Cakes, Cupcakes)
- ❤️ **Wishlist** - Save your favorite items
- 🛒 **Shopping Cart** - Add items and manage quantities
- 🎨 **Customization** - Design your own cake with custom flavors, shapes, and messages
- 🎉 **Special Offers** - Browse current deals and promotions
- 💬 **Feedback** - Share your experience with ratings and comments
- 💳 **Checkout & Payment** - Complete demo payment flow
- � **Admin Panel** - Manage products and stock availability

## Tech Stack

- **React 18** with TypeScript
- **Material-UI (MUI)** for beautiful UI components
- **React Router** for navigation
- **Context API** for state management (Cart & Wishlist)

## Getting Started

### Prerequisites

- Node.js 16+ 
- npm or yarn
- Supabase account (for authentication)
- Telegram bot (optional, for notifications)

### Installation

```bash
# Install dependencies
npm install
```

### Environment Setup

1. Copy the example environment file:
```bash
cp .env.example .env.local
```

2. Fill in your credentials in `.env.local`:
```env
REACT_APP_SUPABASE_URL=your-supabase-url
REACT_APP_SUPABASE_ANON_KEY=your-anon-key
REACT_APP_TELEGRAM_BOT_TOKEN=your-bot-token
REACT_APP_TELEGRAM_CHAT_ID=your-chat-id
```

**For detailed setup instructions:**
- 🔐 [Supabase Auth Setup](./TELEGRAM_SETUP.md#1-create-a-telegram-bot-if-you-havent-already)
- 💬 [Telegram Notifications Setup](./TELEGRAM_SETUP.md)

### Run Development Server

```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build/` folder.

**For deployment instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md)**

## Project Structure

```
src/
├── components/       # Reusable components (Navbar, Footer, ProductCard)
├── contexts/         # Context providers (Cart, Wishlist)
├── pages/           # Page components
├── constants.ts     # Theme, products, and offers data
├── App.tsx          # Main app component with routing
└── index.tsx        # Entry point
```

## Pages

- `/` - Home page
- `/login` - User login page
- `/register` - User registration page
- `/profile` - User profile (protected)
- `/nilas-treats` - Nila's special collection
- `/cakes` - Cake varieties overview
- `/cakes/:category` - Category-specific products
- `/wishlist` - User's wishlist
- `/cart` - Shopping cart
- `/customize` - Cake customization form
- `/offers` - Special offers
- `/feedback` - Customer feedback form
- `/checkout` - Delivery details
- `/payment` - Payment page (demo)
- `/admin` - Admin dashboard
- `/privacy-policy` - Privacy policy details
- `/terms-conditions` - Terms and conditions
- `/contact` - Contact us page with form

## Theme

- Primary Color: `#ffb6c1` (Light Pink)
- Secondary Color: `#6d6875` (Dark Gray)
- Background: `#fff8f8` (Light Rose)
- Font: Poppins

## Authentication & Real-time Features

### Supabase Authentication
- Secure email/password authentication
- Session persistence
- User profile management
- Ready for production deployment

### Telegram Notifications
The app sends real-time notifications to Telegram for:
- **📝 Customer Feedback** - With ratings and messages
- **📦 New Orders** - Full order details with items and prices
- **🎂 Customization Requests** - Detailed cake specifications

See [TELEGRAM_SETUP.md](./TELEGRAM_SETUP.md) for configuration.

## Documentation

- 📖 [DEPLOYMENT.md](./DEPLOYMENT.md) - Deploy to Vercel, Netlify, or Docker
- 💬 [TELEGRAM_SETUP.md](./TELEGRAM_SETUP.md) - Telegram bot configuration
- 🔒 [Supabase Docs](https://supabase.com/docs) - Authentication setup

## License

MIT License

---

© 2025 Pastry Palace. Crafted with love by Nila.
