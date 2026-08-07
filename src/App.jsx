import { CartProvider, useCart } from "./context/CartContext";
import Header from "./components/Header";
import ProductPage from "./components/ProductPage";

function LiveAnnouncer() {
  const { announcement } = useCart();
  return (
    <div aria-live="polite" aria-atomic="true" className="sr-only">
      {announcement}
    </div>
  );
}

function App() {
  return (
    <CartProvider>
      <LiveAnnouncer />
      <div className="mx-auto max-w-277.5">
        <Header />
        <ProductPage />
      </div>
    </CartProvider>
  );
}

export default App;
