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

// ** Temp stub components

// function Header() {
//   const { cartCount } = useCart();
//   return (
//     <header className="p-4 border-b">
//       <p>Header placeholder -- cart count: {cartCount}</p>
//     </header>
//   );
// }

// function ProductGallery() {
//   return <section className="p-4">Gallery placeholder</section>;
// }

// function ProductInfo() {
//   const { addToCart } = useCart();
//   return (
//     <section className="p-4">
//       <button
//         onClick={() => addToCart({ id: 1, name: "Sneaker" }, 2)}
//         className="border px-3 py-1 rounded">
//         Test: add 2 to cart
//       </button>
//     </section>
//   );
// }

export default App;
