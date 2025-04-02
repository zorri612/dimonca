import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import ProductList from './components/ProductList';
import CartPage from './components/CartPage';
import FloatingCartButton from './components/FloatingCartButton';
import CheckoutPage from './components/CheckoutPage';

function App() {
  return (
    <CartProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/carrito" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
        <FloatingCartButton />
      </Router>
    </CartProvider>
  );
}

export default App;
