import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <aside className="carrito">
      <h2>Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        cart.map((item, index) => (
          <div key={index} className="item-carrito">
            <p>{item.name} - {item.description}</p>
            <button onClick={() => removeFromCart(item.name)}>Eliminar</button>
          </div>
        ))
      )}
    </aside>
  );
};

export default Cart;
