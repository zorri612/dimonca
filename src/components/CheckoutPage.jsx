import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Container, Card, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CheckoutPage = () => {
  const { cart, getTotalPrice } = useContext(CartContext);

  return (
    <Container className="d-flex justify-content-center align-items-center mt-4">
      <Card className="p-3 shadow-sm text-center" style={{ maxWidth: '90%', minWidth: '300px' }}>
        <h4 className="mb-3 fs-5">🧾 Resumen del Pedido</h4>

        {cart.length === 0 ? (
          <p>No hay productos en el carrito.</p>
        ) : (
          <>
            {cart.map((item, index) => (
              <Row key={index} className="mb-2">
                <Col xs={8} className="text-start">
                  <p className="mb-0 fw-bold">{item.name}</p>
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
                <h5 className="fw-bold fs-5">Total: ${getTotalPrice().toLocaleString()}</h5>
              </Col>
            </Row>

            {/* Botón para confirmar */}
            <Row className="mt-3">
              <Col>
                <Button variant="primary" size="lg" className="w-100">
                  Confirmar Pedido ✅
                </Button>
              </Col>
            </Row>

            {/* Volver al carrito */}
            <Row className="mt-3">
              <Col>
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
