import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

const FloatingCartButton = () => {
  const { cart } = useContext(CartContext);

  // Calcula el total de unidades sumando las cantidades
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Link to="/carrito" className="cart-button">
      <FaShoppingCart />
      {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
    </Link>
  );
};

export default FloatingCartButton;
