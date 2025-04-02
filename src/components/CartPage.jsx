import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const { cart, removeFromCart, incrementQuantity, decrementQuantity, getTotalPrice } = useContext(CartContext);
  const navigate = useNavigate(); // Hook para la navegación

  const handleCheckout = () => {
    navigate('/checkout'); // Redirige a la página de resumen del pedido
  };

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Tu carrito hacia la felicidad 💕🛒</h2>

      <div className="text-left mt-4">
        <Link to="/" className="btn-regresar">
          Volver a la tienda
        </Link>
      </div>

      {cart.length === 0 ? (
        <p className="text-center">El carrito está vacío.</p>
      ) : (
        <>
          {cart.map((item, index) => (
            <Row key={index} className="align-items-center mb-3 cart-item-row thin-strip">
              <Col xs={2}>
                <Image src={item.image} thumbnail className="cart-img-small" />
              </Col>
              <Col xs={4}>
                <h6 className="mb-1">{item.name}</h6>
                <small>{item.description}</small>
              </Col>
              <Col xs={2} className="text-center fw-bold">
                ${item.precio.toLocaleString()}
              </Col>
              <Col xs={3} className="text-center">
                <div className="d-flex align-items-center justify-content-center">
                  <Button variant="outline-secondary" size="sm" onClick={() => decrementQuantity(item.name)}>
                    -
                  </Button>
                  <span className="mx-2 fw-bold">{item.quantity}</span>
                  <Button variant="outline-secondary" size="sm" onClick={() => incrementQuantity(item.name)}>
                    +
                  </Button>
                </div>
              </Col>
              <Col xs={1} className="text-end">
                <Button variant="danger" size="sm" onClick={() => removeFromCart(item.name)}>
                  🗑
                </Button>
              </Col>
            </Row>
          ))}

          {/* Total del carrito */}
          <Row className="mt-4">
            <Col className="text-end">
              <h4 className="fw-bold">Total: ${getTotalPrice().toLocaleString()}</h4>
            </Col>
          </Row>

          {/* Botón de Pagar */}
          <Row className="mt-3">
            <Col className="text-end">
              <Button variant="success" size="lg" onClick={handleCheckout}>
                Pagar 🛍️
              </Button>
            </Col>
          </Row>
        </>
      )}
    </Container>
  );
};

export default CartPage;
