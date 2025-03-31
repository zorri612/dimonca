import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Card, Button } from 'react-bootstrap';

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <Card className="h-100 shadow-sm">
      <Card.Img variant="top" src={product.image} />
      <Card.Body className="d-flex flex-column">
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <Button
          variant="primary"
          onClick={() => addToCart(product)}
          className="mt-auto"
        >
          Agregar al carrito
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
