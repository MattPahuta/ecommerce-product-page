import {
  createContext,
  useContext,
  useState,
  useRef,
  useCallback,
} from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [announcement, setAnnouncement] = useState("");
  const clearTimeoutRef = useRef(null);

  const announce = useCallback((message) => {
    clearTimeout(clearTimeoutRef.current);
    setAnnouncement("");
    clearTimeoutRef.current = setTimeout(
      () => setAnnouncement(message),
      100,
    );
  }, []);

  function addToCart(product, quantity) {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        );
      }
      return [...prev, { ...product, quantity }];
    });
    announce(`${quantity} ${product.name} added to cart`);
  }

  function removeFromCart(id) {
    setCartItems((prev) => {
      const removedItem = prev.find((item) => item.id === id);
      const next = prev.filter((item) => item.id !== id);
      if (removedItem) {
        announce(
          `${removedItem.name} removed. Your cart is now empty.`,
        );
      }
      return next;
    });
  }

  const cartCount = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0,
  );

  const value = {
    cartItems,
    cartCount,
    addToCart,
    removeFromCart,
    announcement,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used inside a CartProvider");
  }
  return context;
}
