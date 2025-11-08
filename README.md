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

### Installation

```bash
npm install
```

### Run Development Server

```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
```

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

## License

MIT License

---

© 2025 Pastry Palace. Crafted with love by Nila.
