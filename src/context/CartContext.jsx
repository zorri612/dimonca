import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Guarda el carrito en localStorage cuando cambia
  useEffect(() => {
    console.log("Carrito actualizado:", cart);
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.name === product.name);
      if (existing) {
        return prevCart.map((item) =>
          item.name === product.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const incrementQuantity = (productName) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.name === productName ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQuantity = (productName) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.name === productName
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (productName) => {
    setCart((prev) => prev.filter((item) => item.name !== productName));
  };

  // ✅ Función para calcular el total del carrito
  const getTotalPrice = () => {
    return cart.reduce((total, item) => {
      const itemPrice = item.precio || 0; // Evita valores inválidos
      const itemQuantity = item.quantity || 1; // Evita que quantity sea undefined
      return total + itemPrice * itemQuantity;
    }, 0);
  };
  
  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, decrementQuantity, incrementQuantity, getTotalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
};
