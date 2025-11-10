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
    image: '/cakes/id1.jpeg',
    description: 'Rich chocolate cake with truffle layers',
    available: true,
  },
  {
    id: '2',
    title: 'Red Velvet Jar Cake',
    category: 'jar-cake',
    price: 250,
    image: '/cakes/id2.jpeg',
    description: 'Classic red velvet in a convenient jar',
    available: true,
  },
  {
    id: '3',
    title: 'Dream Cake Slice',
    category: 'dream-cake',
    price: 120,
    image: '/cakes/id3.jpeg',
    description: 'Dreamy layered cake slice',
    available: true,
  },
  {
    id: '4',
    title: 'Fudgy Brownie',
    category: 'brownie',
    price: 180,
    image: '/cakes/id4.jpeg',
    description: 'Dense and chocolatey brownies',
    available: true,
  },
  {
    id: '5',
    title: 'Vanilla Cupcake',
    category: 'cup-cake',
    price: 80,
    image: '/cakes/id5.jpeg',
    description: 'Fluffy vanilla cupcakes with buttercream',
    available: true,
  },
  {
    id: '6',
    title: 'Strawberry Jar Cake',
    category: 'jar-cake',
    price: 280,
    image: '/cakes/id6.jpg',
    description: 'Fresh strawberry flavor in a jar',
    available: true,
  },
  {
    id: '7',
    title: 'Chocolate Chip Cupcake',
    category: 'cup-cake',
    price: 90,
    image: '/cakes/id7.jpg',
    description: 'Chocolate chip loaded cupcakes',
    available: true,
  },
  {
    id: '8',
    title: 'Caramel Brownie',
    category: 'brownie',
    price: 200,
    image: '/cakes/id8.jpg',
    description: 'Brownies with caramel drizzle',
    available: true,
  },
];

export const offers = [
  {
    id: 'offer1',
    title: 'Festive Combo Offer',
    details: 'Buy 2 cakes and get a 20% discount.',
    image: '/cakes/offer1.jpg',
  },
  {
    id: 'offer2',
    title: 'Jar Cake Bonanza',
    details: 'Flat 15% off on all jar cakes this weekend.',
    image: '/cakes/offer2.jpg',
  },
];
