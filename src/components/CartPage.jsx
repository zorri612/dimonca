import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const { cart, removeFromCart, incrementQuantity, decrementQuantity } = useContext(CartContext);
  

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Tu carrito 🛒</h2>
      {cart.length === 0 ? (
        <p className="text-center">El carrito está vacío.</p>
      ) : (
        cart.map((item, index) => (
          <Row key={index} className="align-items-center mb-3 cart-item-row thin-strip">
            <Col xs={2}>
              <Image src={item.image} thumbnail className="cart-img-small" />
            </Col>
            <Col xs={6}>
              <h6 className="mb-1">{item.name}</h6>
              <small>{item.description}</small>
            </Col>
            <Col xs={3} className="text-center">
                <div className="d-flex align-items-center justify-content-center">
                    <Button
                    variant="outline-secondary"
                    size="sm"
                    onClick={() => decrementQuantity(item.name)}
                    >
                    -
                    </Button>
                    <span className="mx-2 fw-bold">{item.quantity}</span>
                    <Button
                    variant="outline-secondary"
                    size="sm"
                    onClick={() => incrementQuantity(item.name)}
                    >
                    +
                    </Button>
                </div>
                </Col>
            <Col xs={11} className="text-end">
              <Button
                variant="danger"
                size="sm"
                onClick={() => removeFromCart(item.name)}
              >
                Eliminar
              </Button>
            </Col>
          </Row>
        ))
      )}

      <div className="text-center mt-4">
        <Link to="/" className="btn-regresar">
          ⬅ Volver a la tienda
        </Link>
      </div>
    </Container>
  );
};

export default CartPage;
