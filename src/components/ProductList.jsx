
import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import { Container, Row, Col } from 'react-bootstrap';
import { FaArrowUp } from 'react-icons/fa'; // Ícono de flecha arriba

//estos son los productos, los escondí porque hay muchos y no hay algo por cambiar ahí.
const products = [
  //----------------- SECCION COOKIES--------------------
  {
    category: "cookies",
    name: "Red Velvet Cookie",
    description: "Chocolate derretido, textura NYC.",
    precio: 6000,
    image: "/img/cookies/redvelvet.jpeg",
  },
  {
    category: "cookies",
    name: "Oreo Cookie",
    description: "Con relleno de Nutella.",
    precio: 6000,
    image: "/img/cookies/oreo.jpeg",
  },
  {
    category: "cookies",
    name: "Triple Chocolate Cookie",
    description: "Centro relleno, extra crujiente.",
    precio: 6000,
    image: "/img/cookies/triplechocolate.jpeg",
  },
  {
    category: "cookies",
    name: "Nutella Velvet Cookie",
    description: "Chocolate derretido, textura NYC.",
    precio: 6000,
    image: "/img/cookies/velvetnutella.jpeg",
  },
  {
    category: "cookies",
    name: "Churro Cookie + Helado",
    description: "Con relleno de Nutella.",
    precio: 6000,
    image: "/img/cookies/churrohelado.jpeg",
  },
  {
    category: "cookies",
    name: "Chips Cookie",
    description: "Centro relleno, extra crujiente.",
    precio: 6000,
    image: "/img/cookies/chips.png",
  },
  {
    category: "cookies",
    name: "Cookies & Cream",
    description: "Chocolate derretido, textura NYC.",
    precio: 6000,
    image: "/img/cookies/cookiesandcream.jpeg",
  },
  {
    category: "cookies",
    name: "Funfetti Cookie",
    description: "Con relleno de Nutella.",
    precio: 6000,
    image: "/img/cookies/funfetti.png",
  },
  {
    category: "cookies",
    name: "Midnight Cookie",
    description: "Centro relleno, extra crujiente.",
    precio: 6000,
    image: "/img/cookies/midnight.png",
  },
  //----------------- SECCION CHEESECAKES--------------------
  {
    category: "cheesecakes",
    name: "Cheesecake de Chocolate 🍫",
    description: "Deléitate con nuestro irresistible cheesecake de chocolate! este postre cuenta con una base crujiente de galleta de chocolate, un suave relleno de queso crema con un toque de cacao, cubierto con una rica ganache de chocolate y finalizado con un ligero toque de crema batida. perfecto para los amantes del chocolate, cada bocado es una experiencia indulgente que no querrás perderte.",
    nota: "Nota: Único tamaño, 8-10 porciones",
    precio: 70000,
    image: "/img/cheesecakes/cheese_chocolate.png",
  },
  {
    category: "cheesecakes",
    name: "Cheesecake de Fresa 🍓",
    description: "Descubre nuestro clásico cheesecake tradicional, con una base crujiente de galletas, cubierto con una deliciosa confitura de fresa y terminado con un ligero toque de crema batida. Cada bocado es una combinación perfecta de suavidad y frescura que te hará disfrutar de una experiencia dulce y exquisita.",
    nota: "Nota: Único tamaño, 8-10 porciones",
    precio: 70000,
    image: "/img/cheesecakes/cheese_fresa.png",
  },
  {
    category: "cheesecakes",
    name: "Cheesecake de Frutos Rojos  🍇🍒🫐🍓",
    description: "Descubre nuestro clásico cheesecake tradicional, con una base crujiente de galletas, cubierto con una deliciosa confitura de frutos rojos y terminado con un ligero toque de crema batida. cada bocado es una combinación perfecta de suavidad y frescura que te hará disfrutar de una experiencia dulce y exquisita.",
    nota: "Nota: Único tamaño, 8-10 porciones",
    precio: 70000,
    image: "/img/cheesecakes/cheese_frutos.png",
  },
  {
    category: "cheesecakes",
    name: "Cheesecake de Zanahoria",
    description: "Sumérgete en la decadencia de nuestro cheesecake de CarrotCake. Este exquisito postre combina la rica textura del cheesecake con el sabor reconfortante del pastel de zanahoria, todo coronado con un suave frosting de queso crema. Las nueces garrapiñadas añaden un toque de crocante, mientras que el caramelo salado brinda un equilibrio perfecto de sabores.",
    nota: "Nota: Único tamaño, 8-10 porciones",
    precio: 65000,
    image: "/img/cheesecakes/cheese_zanahoria.png",
  },
//----------------- SECCION PASTELES--------------------
  {
    category: "pasteles",
    name: "Pastel de chocolate 🍫",
    description: "Déjate seducir por nuestro Pastel de Chocolate, un festín para los amantes del cacao. Su esponjoso ponque de chocolate alberga un corazón dulce de arequipe Alpina, mientras una sedosa ganache de chocolate se derrite sobre el exterior. Las perlas crocantes de chocolate coronan esta obra maestra, brindando una textura encantadora a cada mordisco. ¡Una experiencia indulgente que te transportará al paraíso del chocolate!",
    precio: 90000,
    image: "/img/pasteles/chocolate.png",
  },
  {
    category: "pasteles",
    name: "Pastel de Red Velvet ❤️",
    description: "Embárcate en un viaje de placer con nuestro Red Velvet: un enigma de vainilla y cacao, fusionado en una obra maestra esponjosa. Su dulzura perfecta se equilibra con una crema de queso Philadelphia, creando una danza de sabores irresistibles en cada bocado. ¡Un festín para tus sentidos!",
    precio: 70000,
    image: "/img/pasteles/redvelvet.png",
  },
  {
    category: "pasteles",
    name: "Pastel de Zanahoria 🥕",
    description: "Ponqué de zanahoria, caramelo salado, frosting de queso crema y nueces garrapiñadas! 🥕🌰 este pastel ha llegado para conquistar tu paladar!",
    precio: 75000,
    image: "/img/pasteles/zanahoria.png",
  },
  {
    category: "pasteles",
    name: "Ponqué de ChocoBanano 🍌🍫",
    description: "Ponqué casero de banano y chips de chocolate, una receta tradicional pero con el toque secreto que te enamorará!",
    precio: 30000,
    image: "/img/pasteles/chocobanano.png",
  },
  {
    category: "pasteles",
    name: "Pastel Angelita 😇",
    description: "Conoce nuestro Pastel Angelita 😇 un esponjoso y tierno ponqué de Vainilla, relleno con el inigualable arequipe Alpina ✨✨ una decadente y clásica combinación que te encantará! ☕️🍰",
    precio: 65000,
    image: "/img/pasteles/angelita.png",
  },
  {
    category: "pasteles",
    name: "Ponqué de arándanos y limón 🫐🍋",
    description: "Esponjoso ponqué aromatizado con limón y arándanos frescos en su interior.",
    nota: "Nota: Único tamaño (16 porciones)",
    precio: 65000,
    image: "/img/pasteles/arandanos_limon.png",
  },
  {
    category: "pasteles",
    name: "Ponqué de nueces pecanas y canela ✨",
    description: "Delicioso ponqué casero de vainilla con trozos de nueces pecanas y canela en su interior, cubierto con glaseado de vainilla y terminado con más nueces pecanas.",
    nota: "Nota: Único tamaño (16 porciones)",
    precio: 65000,
    image: "/img/pasteles/nueces.png",
  }


];

// Definir las categorías que tenemos
const categories = [
  { id: "cookies", label: "Nuestras Cookies 🍪", },
  { id: "pasteles", label: "Pasteles" },
  { id: "cheesecakes", label: "Cheesecakes " },
  { id: "promos", label: "Nuestras Promos para ti! 🎉"}
];

const ProductList = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToCategory = (categoryId) => {
    document.getElementById(categoryId).scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.name === product.name);
      if (existingItem) {
        return prevCart.map((item) =>
          item.name === product.name ? { ...item, cantidad: item.cantidad + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, cantidad: 1 }];
      }
    });
  };


  return (
    <section className="seccion-productos" id="productos">
      <div className="text-center mb-4">
        {categories.map(({ id, label }) => (
          <button key={id} className="btn-ver-productos" onClick={() => scrollToCategory(id)}>
            {label}
          </button>
        ))}
      </div>

      <Container>
        {categories.map(({ id, label }) => (
          <div key={id} id={id} className="mb-5">
            <h2 className="text-center mb-3">{label}</h2>
            <Row className="g-4">
              {products.filter((product) => product.category === id).map((product, index) => (
                <Col xs={12} sm={6} md={4} key={index}>
                  <ProductCard product={product} addToCart={addToCart} />
                </Col>
              ))}
            </Row>
          </div>
        ))}
      </Container>

      

      {showScrollButton && (
        <button className="scroll-to-top" onClick={scrollToTop}>
          <FaArrowUp />
        </button>
      )}
    </section>
  );
};

export default ProductList;
