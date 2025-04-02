import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Container, Card, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CheckoutPage = () => {
  const { cart, getTotalPrice } = useContext(CartContext);

  return (
    <Container className="d-flex justify-content-center align-items-center mt-5">
      <Card style={{ width: '400px' }} className="p-4 shadow-sm">
        <h4 className="text-center mb-4">🧾 Resumen del Pedido</h4>

        {cart.length === 0 ? (
          <p className="text-center">No hay productos en el carrito... 💔</p>
        ) : (
          <>
            {cart.map((item, index) => (
              <Row key={index} className="mb-2">
                <Col xs={8}>
                  <p className="mb-0">
                    <strong>{item.name}</strong>
                  </p>
                  <small>{item.quantity} x ${item.precio.toLocaleString()}</small>
                </Col>
                <Col xs={4} className="text-end fw-bold">
                  ${ (item.precio * item.quantity).toLocaleString()}
                </Col>
              </Row>
            ))}

            {/* Línea divisoria */}
            <hr />

            {/* Total */}
            <Row className="mt-2">
              <Col className="text-end">
                <h5 className="fw-bold">Total: ${getTotalPrice().toLocaleString()}</h5>
              </Col>
            </Row>

            {/* Botón para confirmar */}
            <Row className="mt-3">
              <Col className="text-center">
                <Button variant="primary" size="lg" className="w-100">
                  Confirmar Pedido ✅
                </Button>
              </Col>
            </Row>

            {/* Volver al carrito */}
            <Row className="mt-3">
              <Col className="text-center">
                <Link to="/carrito" className="btn btn-secondary w-100">
                  Volver al Carrito 🛒
                </Link>
              </Col>
            </Row>
          </>
        )}
      </Card>
    </Container>
  );
};

export default CheckoutPage;
