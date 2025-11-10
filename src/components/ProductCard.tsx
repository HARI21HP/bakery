import React from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
  IconButton,
} from '@mui/material';
import { ShoppingCart, Favorite, FavoriteBorder } from '@mui/icons-material';
import { Product } from '../constants';
import { useCart } from '../contexts/CartContext';
import { useWishlist } from '../contexts/WishlistContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const inWishlist = isInWishlist(product.id);

  const handleWishlistToggle = () => {
    if (inWishlist) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardMedia
        component="img"
        height="200"
        image={product.image}
        alt={product.title}
        sx={{ objectFit: 'cover' }}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h6" component="div">
          {product.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
          {product.description}
        </Typography>
        <Typography variant="h6" color="primary" fontWeight="bold">
          ₹{product.price}
        </Typography>
        {!product.available && (
          <Typography variant="body2" color="error">
            Out of Stock
          </Typography>
        )}
      </CardContent>
      <CardActions sx={{ justifyContent: 'space-between', px: 2, pb: 2 }}>
        <Button
          variant="contained"
          startIcon={<ShoppingCart />}
          onClick={() => addToCart(product)}
          disabled={!product.available}
          size="small"
        >
          Add to Cart
        </Button>
        <IconButton onClick={handleWishlistToggle} color="error">
          {inWishlist ? <Favorite /> : <FavoriteBorder />}
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
