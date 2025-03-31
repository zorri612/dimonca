import React from 'react';
import './App.css'; // o './Home.css' si lo separas

const productos = [
  {
    nombre: "Cookie Clásica",
    descripcion: "Chocolate derretido, textura NYC. $5.000",
    imagen: "/img/galleta1.jpeg",
  },
  {
    nombre: "Red Velvet",
    descripcion: "Con relleno de Nutella. $6.000",
    imagen: "/img/galleta2.jpeg",
  },
  {
    nombre: "Cookie Bomba",
    descripcion: "Centro relleno, extra crujiente. $6.500",
    imagen: "/img/galleta3.jpeg",
  },
];

export default function App() {
  return (
    <div className="App">
      <header>
        <h1>Dimonca</h1>
        <p>Las mejores cookies de Cali a un precio irresistible</p>
        <a href="#productos" className="btn-principal">Ver productos</a>
        
      </header>

      <section className="seccion-productos" id="productos">
        <h2>Nuestras Galletas</h2>
        <div className="galeria">
          {productos.map((producto, index) => (
            <div className="producto" key={index}>
              <img src={producto.imagen} alt={producto.nombre} />
              <h3>{producto.nombre}</h3>
              <p>{producto.descripcion}</p>
              <button>Agregar al carrito</button>
            </div>
          ))}
        </div>
      </section>

      <footer>
        <p>© 2025 Dimonca. Repostería artesanal desde Cali. Síguenos en Instagram @dimonca.cookies</p>
      </footer>
    </div>
  );
}