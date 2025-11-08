export const theme = {
  primaryColor: '#ffb6c1',
  secondaryColor: '#6d6875',
  backgroundColor: '#fff8f8',
  fontFamily: 'Poppins, sans-serif',
};

export interface Product {
  id: string;
  title: string;
  category: string;
  price: number;
  image: string;
  description?: string;
  available?: boolean;
}

export const products: Product[] = [
  {
    id: '1',
    title: 'Chocolate Truffle Cake',
    category: 'featured',
    price: 850,
    image: 'https://images.unsplash.com/photo-1606312619683-9dcf4c15b3e5?w=400',
    description: 'Rich chocolate cake with truffle layers',
    available: true,
  },
  {
    id: '2',
    title: 'Red Velvet Jar Cake',
    category: 'jar-cake',
    price: 250,
    image: 'https://images.unsplash.com/photo-1612197521875-9380ccd8f1b1?w=400',
    description: 'Classic red velvet in a convenient jar',
    available: true,
  },
  {
    id: '3',
    title: 'Dream Cake Slice',
    category: 'dream-cake',
    price: 120,
    image: 'https://images.unsplash.com/photo-1606312619609-7f93a540df42?w=400',
    description: 'Dreamy layered cake slice',
    available: true,
  },
  {
    id: '4',
    title: 'Fudgy Brownie',
    category: 'brownie',
    price: 180,
    image: 'https://images.unsplash.com/photo-1606312619723-3abef7bbd373?w=400',
    description: 'Dense and chocolatey brownies',
    available: true,
  },
  {
    id: '5',
    title: 'Vanilla Cupcake',
    category: 'cup-cake',
    price: 80,
    image: 'https://images.unsplash.com/photo-1606312619651-1a1f3d3eabcf?w=400',
    description: 'Fluffy vanilla cupcakes with buttercream',
    available: true,
  },
  {
    id: '6',
    title: 'Strawberry Jar Cake',
    category: 'jar-cake',
    price: 280,
    image: 'https://images.unsplash.com/photo-1612197594562-9380ccd8f1b1?w=400',
    description: 'Fresh strawberry flavor in a jar',
    available: true,
  },
  {
    id: '7',
    title: 'Chocolate Chip Cupcake',
    category: 'cup-cake',
    price: 90,
    image: 'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?w=400',
    description: 'Chocolate chip loaded cupcakes',
    available: true,
  },
  {
    id: '8',
    title: 'Caramel Brownie',
    category: 'brownie',
    price: 200,
    image: 'https://images.unsplash.com/photo-1564355808853-7313f48f9c4a?w=400',
    description: 'Brownies with caramel drizzle',
    available: true,
  },
];

export const offers = [
  {
    id: 'offer1',
    title: 'Festive Combo Offer',
    details: 'Buy 2 cakes and get a 20% discount.',
    image: 'https://images.unsplash.com/photo-1606312619692-935f4d7f5b1c?w=400',
  },
  {
    id: 'offer2',
    title: 'Jar Cake Bonanza',
    details: 'Flat 15% off on all jar cakes this weekend.',
    image: 'https://images.unsplash.com/photo-1612197521875-9380ccd8f1b1?w=400',
  },
];
