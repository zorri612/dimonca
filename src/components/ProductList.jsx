import React from 'react';
import ProductCard from './ProductCard';
import { Container, Row, Col } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa'; // npm install react-icons

const products = [
  {
    name: "Red Velvet Cookie",
    description: "Chocolate derretido, textura NYC. $5.000",
    image: "/img/redvelvet.jpeg",
  },
  {
    name: "Oreo Cookie",
    description: "Con relleno de Nutella. $6.000",
    image: "/img/oreo.jpeg",
  },
  {
    name: "Triple Chocolate Cookie",
    description: "Centro relleno, extra crujiente. $6.500",
    image: "/img/triplechocolate.jpeg",
  },
  {
    name: "Nutella Velvet Cookie",
    description: "Chocolate derretido, textura NYC. $5.000",
    image: "/img/velvetnutella.jpeg",
  },
  {
    name: "Churro Cookie + Helado ",
    description: "Con relleno de Nutella. $6.000",
    image: "/img/churrohelado.jpeg",
  },
  {
    name: "Chips Cookie",
    description: "Centro relleno, extra crujiente. $6.500",
    image: "/img/chips.png",
  },
  {
    name: "Cookies & Cream",
    description: "Chocolate derretido, textura NYC. $5.000",
    image: "/img/cookiesandcream.jpeg",
  },
  {
    name: "Funfetti Cookie",
    description: "Con relleno de Nutella. $6.000",
    image: "/img/funfetti.png",
  },
  {
    name: "Midnight Cookie",
    description: "Centro relleno, extra crujiente. $6.500",
    image: "/img/midnight.png",
  },
];

const ProductList = () => (
  <section className="seccion-productos" id="productos">
    <div>
      <button> Pasteles</button>
    </div>
    <h2 className="text-center mb-4">Nuestras Galletas</h2>
    <Container>
      <Row className="g-4">
        {products.map((product, index) => (
          <Col xs={12} sm={6} md={4} key={index}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  </section>
);



export default ProductList;
