import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import ProductList from './components/ProductList';
import CartPage from './components/CartPage';
import FloatingCartButton from './components/FloatingCartButton';

function App() {
  return (
    <CartProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/carrito" element={<CartPage />} />
        </Routes>
        <FloatingCartButton />
      </Router>
    </CartProvider>
  );
}

export default App;
