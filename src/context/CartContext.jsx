import { createContext, useContext, useState } from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  // screen reader messaging for cart changes
  const [announcement, setAnnouncement] = useState('');

  function addToCart(product, quantity) {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) => 
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity}
            : item
        );
      }
      return [...prev, { ...product, quantity }];
    });
    setAnnouncement(`${quantity} ${product.name} added to cart`);
  }

  function removeFromCart(id) {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  }

  // derived value for cart count (badge)
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const value = { cartItems, cartCount, addToCart, removeFromCart, announcement };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used inside a CartProvider');
  }
  return context;
}